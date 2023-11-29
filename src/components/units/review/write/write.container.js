import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as S from "./write.style";

export default function TriplogWrite(props) {
  const [isOpenStep1, setIsOpenStep1] = useState(true);
  const [isOpenStep2, setIsOpenStep2] = useState(true);
  const [isOpenStep3, setIsOpenStep3] = useState(true);
  const [isOpenCmbBox, setIsOpenCmbBox] = useState(false);
  const [isOpenWithTripList, setIsOpenWithTripList] = useState(false);

  // params변수
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [oneLine, setOneLine] = useState("");

  const apiPath = "http://semtle.catholic.ac.kr:8081";
  const router = useRouter();
  const { reviewId } = router.query;

  // 더보기 버튼
  const onClickMoreBtn = (event) => {
    const stepNum = event.currentTarget.id;
    if (stepNum === "1") setIsOpenStep1((prev) => !prev);
    if (stepNum === "2") setIsOpenStep2((prev) => !prev);
    if (stepNum === "3") setIsOpenStep3((prev) => !prev);
  };

  // 데이터 불러오기
  const fetchData = async () => {
    await axios
      .get(`${apiPath}/review/${reviewId}`)
      .then((res) => {
        const data = res.data.data;
        setTitle(data.reviewTitle);
        setContent(data.reviewContent);
        setOneLine(data.reviewOneLine);
        setSelectedInfo({
          title: data.boardTitle,
          startDate: data.startDate,
          endDate: data.endDate,
          nationName: data.nationName,
          regionName: data.regionName,
          boardId: data.boardId,
          boardWithList: [...data.boardWithList],
        });
        setImageList([...data.reviewImageList.map((el) => ({ url: el }))]);
      })
      .catch((err) => console.error(err));
  };

  // 콤보박스
  const [tripList, setTripList] = useState([]);
  const [selectedInfo, setSelectedInfo] = useState([]);

  const onClickCmbBox = () => {
    setIsOpenCmbBox((prev) => !prev);
  };

  const fetchList = async () => {
    await axios
      .get(`${apiPath}/my-collections/my-all-borads`)
      .then((res) => {
        setTripList([...res.data.data]);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] =
      window.localStorage.getItem("login-token");

    !props.isEdit && fetchList();
    reviewId && props.isEdit && fetchData();
  }, [reviewId]);

  const onClickCmbBoxItem = (event) => {
    const value = parseInt(event.target.id);
    setSelectedInfo({ ...tripList[value] });
    setIsOpenCmbBox(false);
    setIsOpenWithTripList(false);
  };

  // 동행 TwithMe
  const onClickWithTrip = () => {
    setIsOpenWithTripList((prev) => !prev);
  };

  // 이미지
  const [imageList, setImageList] = useState([]);
  const [selectedImageList, setSelectedImageList] = useState([]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImageList((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        imageList.length < 10 &&
          setImageList((prev) => [
            ...prev,
            { url: reader.result, name: file.name },
          ]);
      });
      reader.readAsDataURL(file);
    }
  };

  const onClickDelImg = (event) => {
    setImageList(
      imageList.filter((el, idx) => idx !== parseInt(event.target.id))
    );
    setSelectedImageList(
      selectedImageList.filter((el, idx) => idx !== parseInt(event.target.id))
    );
  };

  // 작성완료, 취소 Btn
  const onClickCancelBtn = () => {
    alert("취소");
    console.log(selectedInfo, title, content, oneLine);
  };

  const onClickSubmitBtn = async () => {
    if (selectedInfo.boardId && title && content && oneLine) {
      const requestData = {
        boardId: selectedInfo.boardId,
        title,
        content,
        oneLine,
      };

      await axios
        .post(apiPath + "/review", requestData)
        .then((res) => {
          if (selectedImageList.length > 0) {
            selectedImageList.forEach(async (el, idx) => {
              const formData = new FormData();
              formData.append("images", el);

              await axios
                .post(
                  `${apiPath}/review/${res.data.data}/profile-picture`,
                  formData
                )
                .then((res) => {
                  if (idx === selectedImageList.length - 1) {
                    alert("후기가 등록되었습니다.");
                    router.push("/review");
                  }
                })
                .catch((err) => {
                  console.error(err);
                  return;
                });
            });
          } else {
            alert("후기가 등록되었습니다.");
            router.push("/review");
          }
        })
        .catch((error) => console.error(error));
    } else {
      alert("필수입력 항목을 확인해주세요");
    }
  };

  // 수정완료 Btn
  const onClickEditBtn = async () => {
    if (selectedInfo.boardId && title && content && oneLine) {
      const requestData = {
        boardId: selectedInfo.boardId,
        title,
        content,
        oneLine,
      };
      const formData = new FormData();
      formData.append(
        "review",
        new Blob([JSON.stringify(requestData)], { type: "application/json" })
      );
      formData.append("images", imageList);

      await axios
        .patch(`${apiPath}/review/${reviewId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            accept: "application/json",
          },
        })
        .then((res) => {
          // alert(res.data.data);
          alert("작성이 완료되었습니다.");
          // router.push("/review");
        })
        .catch((error) => console.error(error));
    } else {
      alert("필수입력 항목을 확인해주세요");
    }
  };

  return (
    <>
      <S.TitleBanner>
        <S.TitleTxt>
          <S.Title>여행 후기 게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
          <S.SubTitle>TwithMe와 함께한 여행 후기를 들려주세요</S.SubTitle>
        </S.TitleTxt>
        <S.WriteForm>
          <S.StepWrapper>
            <S.FormTitleWrapper>
              <S.FormTitleTxtWrapper>
                <S.StepTxt>Step 1/3</S.StepTxt>
                <S.StepTitleTxt>여행 정보 선택</S.StepTitleTxt>
              </S.FormTitleTxtWrapper>
              <S.MoreBtn id="1" onClick={onClickMoreBtn}>
                <S.MoreBtnImg
                  src="/icon/moreBtn.svg"
                  isOpenStep={isOpenStep1}
                />
              </S.MoreBtn>
            </S.FormTitleWrapper>
            <S.Line></S.Line>
            {isOpenStep1 && (
              <S.StepInfoWrapper>
                <S.InputInfoWrapper style={{ position: "relative" }}>
                  <S.InputTitle>여행기록 선택</S.InputTitle>
                  <S.CmbBox
                    isEdit={props.isEdit}
                    onClick={!props?.isEdit ? onClickCmbBox : undefined}
                  >
                    <S.CmbBoxTxt>{selectedInfo.title || "선택"}</S.CmbBoxTxt>
                    {!props.isEdit && <S.CmbBoxArrow src="/icon/moreBtn.svg" />}
                  </S.CmbBox>
                  {isOpenCmbBox && (
                    <S.CmbBoxList>
                      {tripList.map((el, idx) => (
                        <S.CmbBoxListItem
                          key={el.boardId}
                          onClick={onClickCmbBoxItem}
                          id={idx}
                        >
                          {el.title}
                        </S.CmbBoxListItem>
                      ))}
                    </S.CmbBoxList>
                  )}
                </S.InputInfoWrapper>
                <S.InfoBox>
                  <S.InfoBoxItem>
                    <S.InfoBoxTitle>여행지역</S.InfoBoxTitle>
                    <S.InfoBoxInput>
                      {selectedInfo.nationName
                        ? `${selectedInfo.nationName}, ${selectedInfo.regionName}`
                        : "선택"}
                    </S.InfoBoxInput>
                  </S.InfoBoxItem>
                  <S.InfoBoxItem>
                    <S.InfoBoxTitle>여행기간</S.InfoBoxTitle>
                    <S.InfoBoxInput>
                      {selectedInfo.startDate
                        ? `${selectedInfo.startDate} ~ ${selectedInfo.endDate}`
                        : "선택"}
                    </S.InfoBoxInput>
                  </S.InfoBoxItem>
                  <S.InfoBoxItem
                    style={{ marginLeft: "35x", position: "relative" }}
                  >
                    <S.InfoBoxTitle>동행 TwithMe</S.InfoBoxTitle>

                    <S.WithTripProfileList>
                      {selectedInfo.boardWithList ? (
                        <>
                          {selectedInfo.boardWithList
                            ?.filter((el, idx) => idx < 4)
                            .map((el, idx) => (
                              <S.WithTripProfileWrapper
                                key={el.nickname}
                                style={{ left: `${idx * 35}px` }}
                                onClick={onClickWithTrip}
                              >
                                <S.WithTripProfile
                                  src={
                                    el.profileUrl || "/icon/defaultProfile.png"
                                  }
                                />
                              </S.WithTripProfileWrapper>
                            ))}
                          {selectedInfo.boardWithList.length > 4 && (
                            <S.WithTripMoreBox onClick={onClickWithTrip}>
                              +{selectedInfo.boardWithList.length - 4}
                            </S.WithTripMoreBox>
                          )}
                        </>
                      ) : (
                        "선택"
                      )}
                    </S.WithTripProfileList>
                    {isOpenWithTripList && (
                      <S.WithTripList>
                        <S.WithTripListTitle>
                        TwithMe 리스트
                        </S.WithTripListTitle>
                        <S.WithTripListWrapper>
                          {selectedInfo.boardWithList.map((el) => (
                            <S.WithTripListItem>
                              <S.WithTripListProfile>
                                <S.Image
                                  src={
                                    el.profileUrl || "/icon/defaultProfile.png"
                                  }
                                />
                              </S.WithTripListProfile>
                              <S.WithTripListID>{el.nickname}</S.WithTripListID>
                            </S.WithTripListItem>
                          ))}
                        </S.WithTripListWrapper>
                      </S.WithTripList>
                    )}
                  </S.InfoBoxItem>
                </S.InfoBox>
              </S.StepInfoWrapper>
            )}
          </S.StepWrapper>

          <S.StepWrapper>
            <S.FormTitleWrapper>
              <S.FormTitleTxtWrapper>
                <S.StepTxt>Step 2/3</S.StepTxt>
                <S.StepTitleTxt>내용 작성</S.StepTitleTxt>
              </S.FormTitleTxtWrapper>
              <S.MoreBtn id="2" onClick={onClickMoreBtn}>
                <S.MoreBtnImg
                  src="/icon/moreBtn.svg"
                  isOpenStep={isOpenStep2}
                />
              </S.MoreBtn>
            </S.FormTitleWrapper>
            <S.Line></S.Line>
            {isOpenStep2 && (
              <S.StepInfoWrapper>
                <S.TitleInput
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="제목을 입력해주세요"
                  defaultValue={title}
                ></S.TitleInput>
                <S.LongTextarea
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="내용을 입력해주세요"
                  defaultValue={content}
                ></S.LongTextarea>
                {imageList.length === 0 ? (
                  <>
                    <S.NoImgWrapper htmlFor="first-upload-input">
                      <S.NoImgIconWrapper>
                        <S.NoImgIcon src="/icon/image.svg" />
                        <S.NoImgTxt> 이미지 첨부</S.NoImgTxt>
                      </S.NoImgIconWrapper>
                      <S.NoImgSubTxt>
                        여행 이미지는 최대 10장까지 첨부 가능합니다.
                      </S.NoImgSubTxt>
                    </S.NoImgWrapper>
                    <input
                      id="first-upload-input"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                      multiple
                    />
                  </>
                ) : (
                  <S.ImgWrapper>
                    {imageList.map((el, idx) => (
                      <S.ImageItem key={idx}>
                        <S.ImageWrapper>
                          <S.Img src={el.url} />
                        </S.ImageWrapper>
                        <S.ImgNameWrapper>
                          <S.ImgName>{el.name}</S.ImgName>
                          <S.ImgDelBtn
                            id={idx}
                            src="/icon/delBtn.svg"
                            onClick={onClickDelImg}
                          />
                        </S.ImgNameWrapper>
                      </S.ImageItem>
                    ))}

                    {imageList.length < 10 && (
                      <>
                        <S.ImgAddBtn htmlFor="upload-input">
                          <S.ImgAddIcon src="/icon/plus.png" />
                          <S.ImgAddTxt>이미지 추가</S.ImgAddTxt>
                        </S.ImgAddBtn>
                        <input
                          id="upload-input"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          style={{ display: "none" }}
                          multiple
                        />
                      </>
                    )}
                  </S.ImgWrapper>
                )}
              </S.StepInfoWrapper>
            )}
          </S.StepWrapper>

          <S.StepWrapper>
            <S.FormTitleWrapper>
              <S.FormTitleTxtWrapper>
                <S.StepTxt>Step 3/3</S.StepTxt>
                <S.StepTitleTxt>여행 한줄</S.StepTitleTxt>
                <S.StepSubTitleTxt>
                  여행 후기 메인 본문에 같이 노출됩니다.
                </S.StepSubTitleTxt>
              </S.FormTitleTxtWrapper>
              <S.MoreBtn id="3" onClick={onClickMoreBtn}>
                <S.MoreBtnImg
                  src="/icon/moreBtn.svg"
                  isOpenStep={isOpenStep3}
                />
              </S.MoreBtn>
            </S.FormTitleWrapper>
            <S.Line></S.Line>
            {isOpenStep3 && (
              <S.StepInfoWrapper>
                <S.InputInfoWrapper>
                  <S.LongInput
                    onChange={(e) => setOneLine(e.target.value)}
                    placeholder="우리의 여행을 한 줄로 표현해보세요!"
                    defaultValue={oneLine}
                  ></S.LongInput>
                </S.InputInfoWrapper>
              </S.StepInfoWrapper>
            )}
          </S.StepWrapper>
          <S.BtnWrapper>
            <S.CancelBtn onClick={onClickCancelBtn}>취소</S.CancelBtn>
            <S.SubmitBtn
              onClick={props.isEdit ? onClickEditBtn : onClickSubmitBtn}
            >
              {props.isEdit ? "수정" : "작성"} 완료
            </S.SubmitBtn>
          </S.BtnWrapper>
        </S.WriteForm>
      </S.TitleBanner>
      <S.FormBtm />
    </>
  );
}
