import { LoginState } from '@/States/LoginState';
import FindTwithmeBanner from "@/components/commons/Layout/findTwithmeBanner";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import * as S from "./detail.style";

export default function TriplogDetail() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const apiPath = "http://semtle.catholic.ac.kr:8081";
  const { reviewId } = router.query;

  const [data, setData] = useState({});
  const [hashtag, setHashtag] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [cmtLen, setCmtLen] = useState(5);
  const [isOpenWithTripList, setIsOpenWithTripList] = useState(false);

  const onClickEditBtn = () => {
    router.push(`/review/${reviewId}/edit`);
  };

  const formatUserInfo = (age, gender) => {
    const formatAge = age >= 10 ? `${age.toString().slice(0, 1)}0대` : "아동";
    const formatGender = gender === "M" ? "남성" : "여성";
    return formatAge + " " + formatGender;
  };

  // 프로필 이동
  const checkUser = async () => {
    if (data.myReview) {
      router.push("/auth/profile");
    } else {
      router.push({
        pathname: "/auth/profile",
        query: { userId: data.userId },
      });
    }
  };

  // 데이터 불러오기
  const fetchData = async () => {
    await axios
      .get(`${apiPath}/review/${reviewId}`)
      .then((res) => {
        const data = res.data.data;

        setData({ ...data });
        setHashtag([
          data.hashtag1,
          data.hashtag2,
          data.hashtag3,
          data.hashtag4,
          data.hashtag5,
        ]);
      })
      .catch((error) => {
        console.error(error);
        if(error.response.data.code === 401){
          router.push("/auth/signIn");
          alert("토큰이 만료되었습니다. 다시 로그인 해주세요.");
          localStorage.clear();
          setIsLoggedIn(false);
        }
      });
  };

  // 댓글 기능
  const fetchComment = async () => {
    axios
      .get(`${apiPath}/review/${reviewId}/comment/list`)
      .then((res) => {
        setCommentData([...res.data.data]);
      })
      .catch((error) => console.error(error));
  };

  const onClickMoreCmt = () => {
    if (commentData.length > cmtLen) setCmtLen((prev) => prev + 5);
  };

  const onSubmitCmt = async (event) => {
    event.preventDefault();

    await axios
      .post(`${apiPath}/review/comment`, {
        content: event.target.comment.value,
        reviewId,
      })
      .then((res) => {
        fetchComment();
      })
      .catch((err) => console.error(err));
    event.target.reset();
  };

  // 좋아요 기능
  const onClickLike = async () => {
    await axios
      .post(apiPath + "/review/like", {
        reviewId,
      })
      .then((res) => {
        fetchData();
      })
      .catch((error) => console.error(error));
  };

  // 이미지 기능
  const [showImgNum, setShowImgNum] = useState(0);
  const onClickNextImg = () => {
    if (showImgNum < data?.reviewImageList?.length - 3)
      setShowImgNum((prev) => prev + 1);
  };

  const onClickPrevImg = () => {
    if (showImgNum > 0) setShowImgNum((prev) => prev - 1);
  };

  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] =
      window.localStorage.getItem("login-token");

    if (reviewId) {
      fetchData();
      fetchComment();
    }
  }, [reviewId]);

  // 이전, 다음게시물 이동 기능
  const onClickPrevPost = () => {
    data.previousReviewId && router.push(`/review/${data.previousReviewId}`);
  };

  const onClickNextPost = () => {
    data.nextReviewId && router.push(`/review/${data.nextReviewId}`);
  };

  // 동행자 프로필
  const onClickWithTrip = () => {
    setIsOpenWithTripList((prev) => !prev);
  };

  return (
    <>
      <FindTwithmeBanner
        title="TwithMe 찾기"
        subTitle="함께 하고 싶은 여행자를 TwithMe에서 바로 찾아보세요"
      />
      <S.ContentsLoc>
        <S.LocTxt>{data?.nickname}님의 여행후기</S.LocTxt>
      </S.ContentsLoc>
      <S.Contents>
        <S.ContentsImgWrapper>
          <S.ContentsImg src={data?.image || "/img/Santorini.png"} />
        </S.ContentsImgWrapper>
        <S.ContentsTopWrapper>
          <S.ContentsTitleWrapper>
            <S.ContentsTitle>{data?.reviewTitle}</S.ContentsTitle>
            <S.ContentsDate>{data?.regDateTime?.slice(0, 10)}</S.ContentsDate>
          </S.ContentsTitleWrapper>
          <S.OneLineReview>{data?.reviewOneLine}</S.OneLineReview>
        </S.ContentsTopWrapper>
        <S.ContentsMidTopWrapper>
          <S.MidTopLeftWrapper>
            <S.UserImgWrapper>
              <S.UserImg
                src={data?.profileUrl || "/icon/defaultProfile.png"}
                onClick={checkUser}
                style={{ cursor: "pointer" }}
              />
            </S.UserImgWrapper>
            <S.UserTxtWrapper>
              <S.UserID onClick={checkUser} style={{ cursor: "pointer" }}>
                {data?.nickname}
              </S.UserID>
              <S.UserInfo>{formatUserInfo(data?.age, data?.gender)}</S.UserInfo>
            </S.UserTxtWrapper>
          </S.MidTopLeftWrapper>

          <S.MidTopRightWrapper>
            <S.WithBoardWrapper>
              <S.WithTripTitle>
                동행 TwithMe ({data.boardWithList?.length}명)
              </S.WithTripTitle>
              <S.WithTripProfileList>
                {data.boardWithList
                  ?.filter((el, idx) => idx < 4)
                  .map((el, idx) => (
                    <S.WithTripProfileWrapper
                      key={el.nickname}
                      style={{ left: `${idx * 35}px` }}
                      onClick={onClickWithTrip}
                    >
                      <S.WithTripProfile
                        src={el.profileUrl || "/icon/defaultProfile.png"}
                      />
                    </S.WithTripProfileWrapper>
                  ))}
                {data.boardWithList?.length > 4 && (
                  <S.WithTripMoreBox onClick={onClickWithTrip}>
                    +{data.boardWithList?.length - 4}
                  </S.WithTripMoreBox>
                )}
              </S.WithTripProfileList>
              {isOpenWithTripList && (
                <S.WithTripList>
                  <S.WithTripListTitle>TwithMe 리스트</S.WithTripListTitle>
                  <S.WithTripListWrapper>
                    {data.boardWithList?.map((el) => (
                      <S.WithTripListItem>
                        <S.WithTripListProfile>
                          <S.UserImg
                            src={el.profileUrl || "/icon/defaultProfile.png"}
                          />
                        </S.WithTripListProfile>
                        <S.WithTripListID>{el.nickname}</S.WithTripListID>
                      </S.WithTripListItem>
                    ))}
                  </S.WithTripListWrapper>
                </S.WithTripList>
              )}
            </S.WithBoardWrapper>
            <S.BoardInfoWrapper>
              <S.ContentsInfoWrapper>
                <S.ContentsInfoIcon src="/icon/location.png" />
                <S.ContentsInfoTxt>
                  {data.nationName}, {data.regionName}
                </S.ContentsInfoTxt>
              </S.ContentsInfoWrapper>
              <S.ContentsInfoWrapper>
                <S.ContentsInfoIcon src="/icon/calendar.png" />
                <S.ContentsInfoTxt>
                  {data?.startDate} ~ {data?.endDate}
                </S.ContentsInfoTxt>
              </S.ContentsInfoWrapper>
              <S.ContentsInfoWrapper>
                <S.ContentsInfoIcon src="/icon/user.png" />
                <S.ContentsInfoTxt>{data?.totalPeopleNum}인</S.ContentsInfoTxt>
              </S.ContentsInfoWrapper>
            </S.BoardInfoWrapper>
          </S.MidTopRightWrapper>
        </S.ContentsMidTopWrapper>
        <S.ContentsMidBtmWrapper>
          <S.MidBtmTitle>이번 여행의 Trip 스타일</S.MidBtmTitle>
          <S.MidBtmStyleWrapper>
            {hashtag
              .filter((el) => el)
              .map((el) => (
                <S.MidBtmStyle key={el}>#{el}</S.MidBtmStyle>
              ))}
          </S.MidBtmStyleWrapper>
          <S.MidBtmBodyTxt>{data?.reviewContent}</S.MidBtmBodyTxt>
          {data.reviewImageList?.length > 0 && (
            <S.ImgWrapper>
              <S.ImgTitleWrapper>
                <S.ImgIcon src="/icon/imagePurple.svg" />
                <S.ImgTitle>이미지</S.ImgTitle>
              </S.ImgTitleWrapper>
              <S.ImgShowWrapper>
                <S.ImgShowLeftArrow
                  src="/icon/imgShowArrow.svg"
                  style={
                    data?.reviewImageList?.length <= 3
                      ? {
                          visibility: "hidden",
                        }
                      : {}
                  }
                  onClick={onClickPrevImg}
                />

                {data?.reviewImageList
                  ?.filter(
                    (el, idx) => idx >= showImgNum && idx < showImgNum + 3
                  )
                  .map((el) => (
                    <S.ShowingImgWrapper>
                      <S.ShowingImg src={el} />
                    </S.ShowingImgWrapper>
                  ))}

                <S.ImgShowRightArrow
                  src="/icon/imgShowArrow.svg"
                  style={
                    data.reviewImageList?.length <= 3
                      ? {
                          visibility: "hidden",
                        }
                      : {}
                  }
                  onClick={onClickNextImg}
                />
              </S.ImgShowWrapper>
            </S.ImgWrapper>
          )}
        </S.ContentsMidBtmWrapper>
        <S.ContentsBtmWrapper>
          <S.BtmLeftWrapper>
            <S.BtmIcon
              src={data.tokenUserLiked ? "/icon/like.png" : "/icon/heart.png"}
              onClick={onClickLike}
            />
            <S.BtmTxt>좋아요 {data?.likes}개</S.BtmTxt>
          </S.BtmLeftWrapper>
          {data.myReview && <S.ApplyBtn
            onClick={onClickEditBtn}
            style={data?.myReview ? {} : { visibility: "hidden" }}
          >
            수정하기
          </S.ApplyBtn>}
        </S.ContentsBtmWrapper>
      </S.Contents>

      <S.PostList>
        <S.PostListTitleWrapper>
          <S.PostListTitle>댓글</S.PostListTitle>
          <S.PostListCnt>{commentData.length}개</S.PostListCnt>
        </S.PostListTitleWrapper>

        {commentData.length > 0 ? (
          <S.CmtListWrapper>
            {commentData
              .filter((el, index) => index < cmtLen)
              .map((el) => (
                <S.CmtList>
                  <S.ListTitle>{el.nickname}</S.ListTitle>
                  <S.CmtContents>{el.content}</S.CmtContents>
                </S.CmtList>
              ))}
          </S.CmtListWrapper>
        ) : (
          <S.NoCmtWrapper>
            <S.NoCmtIcon src="/icon/noCmt.png" />
            <S.NoCmtTxt>첫 댓글을 작성해보세요</S.NoCmtTxt>
          </S.NoCmtWrapper>
        )}

        {commentData.length > cmtLen && (
          <S.CmtMoreBtn onClick={onClickMoreCmt}>
            <S.CommetnMoreBtnTxt>댓글 더보기</S.CommetnMoreBtnTxt>
            <S.CommetnMoreBtnIcon src="/icon/moreBtn.svg" />
          </S.CmtMoreBtn>
        )}

        <S.CmtWriteWrapper onSubmit={onSubmitCmt}>
          <S.ListTitle>댓글 작성하기</S.ListTitle>
          <S.CmtInput
            placeholder="직접 댓글을 작성해보세요"
            name="comment"
            autoComplete="off"
          />
          <S.CmtWriteBtn>작성</S.CmtWriteBtn>
        </S.CmtWriteWrapper>
      </S.PostList>
      <S.PostList>
        <S.PostListTitle style={{ marginBottom: "30px" }}>목록</S.PostListTitle>
        <S.ListWrapper>
          <S.ListIcon />
          <S.ListTitle>이전 게시물</S.ListTitle>
          <S.PostTitle
            reviewId={data.previousReviewId}
            onClick={onClickPrevPost}
          >
            {data?.previousTitle || "없음"}
          </S.PostTitle>
        </S.ListWrapper>
        <S.ListWrapper
          style={{ borderBottom: "1px solid rgba(214, 214, 214, 0.60)" }}
        >
          <S.ListIcon style={{ transform: "rotate(180deg)" }} />
          <S.ListTitle>다음 게시물</S.ListTitle>
          <S.PostTitle reviewId={data.nextReviewId} onClick={onClickNextPost}>
            {data.nextTitle || "없음"}
          </S.PostTitle>
        </S.ListWrapper>
      </S.PostList>
    </>
  );
}
