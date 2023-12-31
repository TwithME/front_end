import FindTwithmeBanner from "@/components/commons/Layout/findTwithmeBanner";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as S from "./applyDetail.style";

export default function FindBoardApplyDetail() {
  const router = useRouter();
  const apiPath = "http://semtle.catholic.ac.kr:8081";
  const { boardId, applyId } = router.query;

  const [isAccept, setIsAccept] = useState(false);
  const [data, setData] = useState({});

  const formatUserInfo = (age, gender) => {
    const formatAge = age >= 10 ? `${age.toString().slice(0, 1)}0대` : "아동";
    const formatGender = gender === "M" ? "남성" : "여성";
    return formatAge + " " + formatGender;
  };

  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] =
      window.localStorage.getItem("login-token");

    applyId && fetchData();
  }, [applyId]);

  const fetchData = async () => {
    await axios
      .get(`${apiPath}/board/apply/${applyId}`)
      .then((res) => {
        setData({ ...res.data.data });
      })
      .catch((err) => console.error(err));
  };

  const onClickRejectBtn = async () => {
    await axios
      .get(`${apiPath}/board/apply/refuse/${applyId}`)
      .then((res) => {
        alert("거절");
        router.push(`/findTwithme/${boardId}`);
      })
      .catch((err) => console.error(err));
  };

  const onClickAcceptBtn = async () => {
    await axios
      .get(`${apiPath}/board/apply/accept/${applyId}`)
      .then((res) => {
        alert("수락");
        setIsAccept(true);
      })
      .catch((err) => console.error(err));
  };

  const onSubmitMsg = async (event) => {
    event.preventDefault();
    await axios
      .post(apiPath + "/chat/send", {
        content: event.target.message.value,
        recipientId: data.applicantId,
      })
      .then((res) => {
        alert("전송이 완료되었습니다.");
        router.push(`/findTwithme/${boardId}`);
      })
      .catch((err) => console.error(err));
    event.target.reset();
  };

  return (
    <>
      <FindTwithmeBanner
        title="TwithMe 신청내역"
        subTitle="TwithMe에서 나에게 동행신청을 보낸 TwithMe들을 만나보세요."
      />
      <S.Title>TwithMe 신청 확인하기</S.Title>
      <S.Contents>
        <S.ContentsImgWrapper>
          <S.ContentsImg src="/img/Santorini.png" />
        </S.ContentsImgWrapper>
        <S.ContentsTitle>{data.title}</S.ContentsTitle>
        <S.UserWrapper>
          <S.UserImgWrapper>
            <S.UserImg
              src={data.profileUrl || "/icon/defaultProfile.png"}
            ></S.UserImg>
          </S.UserImgWrapper>
          <S.UserTxtWrapper>
            <S.UserID>{data.nickname}</S.UserID>
            <S.UserInfo>{formatUserInfo(data.age, data.gender)}</S.UserInfo>
          </S.UserTxtWrapper>
          <S.UserStyleWrapper>
            {data.hashtag?.map((el) => (
              <S.UserStyle key={el}>#{el}</S.UserStyle>
            ))}
          </S.UserStyleWrapper>
        </S.UserWrapper>
        <S.ContentsSubTitle>
          상대방에게 본인에 대해 간단히 소개해주세요.
        </S.ContentsSubTitle>
        <S.IntroduceBox>{data.content}</S.IntroduceBox>
        {data.accepted === 0 ? (
          isAccept ? (
            <S.SendMsgForm onSubmit={onSubmitMsg}>
              <S.SendMsgInput
                name="message"
                autoComplete="off"
                placeholder="TwithMe 신청 메세지를 입력해주세요."
              ></S.SendMsgInput>
              <S.SendMsgBtn>Send</S.SendMsgBtn>
            </S.SendMsgForm>
          ) : (
            <S.BtnWrapper>
              <S.RejectBtn onClick={onClickRejectBtn}>거절하기</S.RejectBtn>
              <S.AcceptBtn onClick={onClickAcceptBtn}>수락하기</S.AcceptBtn>
            </S.BtnWrapper>
          )
        ) : (
          <S.BtnWrapper>
            <S.AfterBtn>
              {data.accepted === 1 ? "수락완료" : "거절완료"}
            </S.AfterBtn>
          </S.BtnWrapper>
        )}
      </S.Contents>
    </>
  );
}
