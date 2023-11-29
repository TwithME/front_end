import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { LoginState, IsJwtValidSelector, JwtTokenState, logout } from "@/States/LoginState";

export default function Review (props) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const isJwtValid = useRecoilValue(IsJwtValidSelector); // JWT 토큰 유효성 가져오기
  const setJwtToken = useSetRecoilState(JwtTokenState);

    // 나이 형식 변경
    const [age, setAge] = useState(parseInt(props.info.age));
    const [ageCategory, setAgeCategory] = useState("");
    useEffect(() => {
      if (0 <= age % 10 && age % 10 <= 3) {
        setAgeCategory("초반");
      } else if (4 <= age % 10 && age % 10 <= 6) {
        setAgeCategory("중반");
      } else {
        setAgeCategory("후반");
      }
    }, [age]);

    return (
      <>
      <ReviewCard onClick={props.onClick}>
        <ReviewImgWrapper>
          <ReviewImg
            src={
              props.info.image === null
                ? "/img/defaultImg.png"
                : props.info.image
            }
          ></ReviewImg>
        </ReviewImgWrapper>
        <ReviewContentWrapper>
        <ReviewCardHeader>
          <ReviewInfo>
            <CountryWrapper>
              <ReviewInfoTxt>{props.info.nationName}</ReviewInfoTxt>
            </CountryWrapper>
            <ReviewCity> · {props.info.regionName}</ReviewCity>
          </ReviewInfo>
        </ReviewCardHeader>

        <ReviewCardContents>
          <ReviewCardContentsTitle>
            {props.info.title.length < 20
              ? props.info.title
              : props.info.title.substring(0, 21) + "..."}
          </ReviewCardContentsTitle>
        </ReviewCardContents>
        <ReviewLine></ReviewLine>
        <ReviewCardFooter>
          <ReviewInfoUserWrapper>
            <ReviewUserImg
              src={props.info.userProfileUrl || "/icon/defaultProfile.png"}
            ></ReviewUserImg>
            <ReviewUserInfoWrapper>
              <ReviewUsername>{props.info.username}</ReviewUsername>
              <ReviewAge>
                {parseInt(age / 10) * 10 < 10
                  ? "아동"
                  : `${parseInt(age / 10) * 10}대`}{" "}
                {parseInt(age / 10) * 10 >= 10 && ageCategory}{" "}
                {props.info.gender === "M" ? "남성" : "여성"}
              </ReviewAge>
            </ReviewUserInfoWrapper>
          </ReviewInfoUserWrapper>
        <ReviewReactWrapper>
            <ReviewInfoWrapper>
                <ReviewIcon src="/icon/calendar.png"></ReviewIcon>
                <ReviewDateTxt>
                  <ReviewSmallTxt>
                    {props.info.startDate.substring(2).replace("-", ".")}
                  </ReviewSmallTxt>
                  <ReviewDateLine></ReviewDateLine>
                  <ReviewSmallTxt>
                    {props.info.endDate.substring(2).replace("-", ".")}
                  </ReviewSmallTxt>
                </ReviewDateTxt>
              </ReviewInfoWrapper>
            <ReviewReactContent>
              <ReviewReactIcon src="/icon/heart.png"></ReviewReactIcon>
              <ReviewReactTxt>{props.info.likes}</ReviewReactTxt>
              <ReviewReactIcon src="/icon/comment.png"></ReviewReactIcon>
              <ReviewReactTxt>{props.info.comments}</ReviewReactTxt>
  
              <ReviewReactIcon src="/icon/views.png"></ReviewReactIcon>
              <ReviewReactTxt>{props.info.hits}</ReviewReactTxt>
            </ReviewReactContent>
          </ReviewReactWrapper>
        </ReviewCardFooter>
        </ReviewContentWrapper>
      </ReviewCard>
      </>
    );
}

const ReviewCard = styled.div`
  width: 415px;
  height: 491px;
  background: #ffffff;
  box-shadow: 0px 5px 20px 3px rgba(153, 153, 153, 0.25);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  position: relative;
`;

const LastReviewCard = styled(ReviewCard)`
  margin-right: 0;
`;

const ReviewImgWrapper = styled.div`
  width: 415px;
  height: 491px;
  border-radius: 5px;
`;

const ReviewImg = styled.img`
  width: 415px;
  height: 491px;
  object-fit: cover;
  border-radius: 5px;
`;

const ReviewContentWrapper = styled.div`
  position: absolute;
  top: 315px;
  width: 373px;
  height: 150px;
  background-color: #fff;
  opacity: 0.8;
  border-radius: 10px;
`;

const ReviewCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 373px;
  margin-bottom: 14px;
  margin-top: 10px;
`;

const ReviewInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  width: 350px;
  height: 35px;
  background-color: #9AB3F5;
  border-radius: 5px;
`;

const CountryWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewIcon = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 3px;
  margin-top: 7.5px;
`;

const ReviewInfoTxt = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: #fff;
`;

const ReviewSmallTxt = styled(ReviewInfoTxt)`
  font-size: 10px;
  color: #666;
  font-weight: 300;
`;

const ReviewCity = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  color: #fff;
  margin-left: 10px;
`;

const ReviewInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 25px;
`;

const ReviewDateTxt = styled.div`
  display: flex;
  align-items: center;
  line-height: 25px;
`;

const ReviewDateLine = styled.div`
  width: 4px;
  height: 0.7px;
  background-color: #666666;
  margin: 0px 4px;
`;

const ReviewInfoUserWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ReviewUserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  margin-right: 8px;
  margin-top: 10.5px;
  object-fit: cover;
`;

const ReviewUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 51px;
  justify-content: center;
`;

const ReviewUsername = styled.div`
  color: #666;
  font-size: 10px;
  height: 25px;
  line-height: 25px;
`;

const ReviewAge = styled.div`
  color: #666666;
  font-size: 10px;
  height: 26px;
  line-height: 26px;
`;

const ReviewLine = styled.div`
  width: 345px;
  height: 1px;
  background-color: #d6d6d6;
  margin: 0 auto;
  margin-bottom: 5px;
`;

const ReviewCardContents = styled.div`
  width: 330px;
  height: 23px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  color: #333333;
  margin: 0 auto;
`;

const ReviewCardContentsTitle = styled.div`
  color: #000;
  font-size: 15px;
  font-weight: 500;
  margin: 5px 0 5px 0;

`;

const ReviewCardFooter = styled.div`
  width: 330px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;


const ReviewReactContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 26px;
  line-height: 26px;
`;

const ReviewReactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 51px;
`;

const ReviewReactIcon = styled.img`
  width: 14px;
  height: 14px;
  margin: 6px 4px 0 5px;
`;

const ReviewReactTxt = styled.div`
  width: 10px;
  margin: 0 2px;
  font-weight: 400;
  font-size: 10px;
  line-height: 26px;
  color: #666666;
`;

const ReviewReactMsgTxt = styled(ReviewReactTxt)`
  margin-right: 23px;
`;

const ReviewDetailBtn = styled.button`
  width: 62px;
  height: 24px;
  background: #9ab3f5;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewDetailBtnTxt = styled.div`
  font-weight: 700;
  font-size: 10px;
  line-height: 1;
  color: #ffffff;
`;

const BtnArrow = styled.img``;
