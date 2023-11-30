import React, { useRef } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { LoginState } from "@/States/LoginState";

export default function ReviewMain(props) {
  const ref = useRef();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

  // 시간 형식 변경
  const formatTime = () => {
    const today = new Date();
    const timeValue = new Date(props.info.regDateTime);
    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 1) return"방금전";
        if (betweenTime < 60) {
          return`${betweenTime}분전`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
          return`${betweenTimeHour}시간전`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
          return`${betweenTimeDay}일전`;
        }

        return`${Math.floor(betweenTimeDay / 365)}년전`;
  };
  const [timeFormat, setTimeFormat] = useState(formatTime(props.info.regDateTime));
  
    return (
        <ReviewContents>
            <ReviewCard onClick={() => props.onClick()}>
              <ReviewCardContentWrapper>
                <ReviewCardDesWrapper>
                    <ReviewCardDes>
                        <ReviewCardDesIcon src="/icon/location.png"></ReviewCardDesIcon>
                        <ReviewCardNation>{props.info.nationName}</ReviewCardNation>
                        <ReviewCardRegion>·</ReviewCardRegion>
                        <ReviewCardRegion>{props.info.regionName}</ReviewCardRegion>
                    </ReviewCardDes>
                    <ReviewHashtagWrapper ref={ref}>
                        <ReviewHashtag>#{props.info.hashtags[0]}</ReviewHashtag>
                        <ReviewHashtag>#{props.info.hashtags[1]}</ReviewHashtag>
                        <ReviewHashtag>#{props.info.hashtags[2]}</ReviewHashtag>
                    </ReviewHashtagWrapper>
                </ReviewCardDesWrapper>
                <ReviewLine></ReviewLine>
                <ReviewDetailWrapper>
                    <ReviewDetailTitle>
                        {props.info.title}
                    </ReviewDetailTitle>
                    <ReviewDetailContent>{props.info.content.length < 169 ? props.info.content : props.info.content.substring(0, 169) + "..."}</ReviewDetailContent>
                </ReviewDetailWrapper>
                <ReviewLongLine></ReviewLongLine>
                <ReviewInfoWrapper>
                    <ReviewInfoTime>{timeFormat}</ReviewInfoTime>
                    <ReviewInfoAdditionWrapper>
                        <ReviewInfoAdditionIcon src="/icon/heart.png"></ReviewInfoAdditionIcon>
                        <ReviewInfoAdditionTxt>{props.info.likes}</ReviewInfoAdditionTxt>
                        <ReviewInfoAdditionIcon src="/icon/comment.png"></ReviewInfoAdditionIcon>
                        <ReviewInfoAdditionTxt>{props.info.comments}</ReviewInfoAdditionTxt>
                        
                        <ReviewInfoAdditionIcon src="/icon/view_gray.png"></ReviewInfoAdditionIcon>
                        <ReviewInfoAdditionTxt>{props.info.hits}</ReviewInfoAdditionTxt>
                    </ReviewInfoAdditionWrapper>
                </ReviewInfoWrapper>
              </ReviewCardContentWrapper>
              <ReviewImgWrapper>
                <ReviewCardImg src={props.info.image === null ? "/img/defaultImg.png" : props.info.image}></ReviewCardImg>
              </ReviewImgWrapper>
            </ReviewCard>
          </ReviewContents>
    );
    
}

const ReviewContents = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 20px;
`;

const ReviewCard = styled.div`
  width: 1400px;
  height: 340px;

  margin-bottom: 50px;
  box-shadow: 0px 5px 20px 3px rgba(153, 153, 153, 0.25);
  display: flex;
  flex-direction: row;

  align-items: center;
  cursor: pointer;
`;

const ReviewCardContentWrapper = styled.div`
  width: 824px;
  height: 340px;
  padding: 30px 0;

  display: flex;
  flex-direction: column;
`;

const ReviewCardDesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  height: 70px;
`;

const ReviewCardDes = styled.div`
  display: flex;
  flex-direction: row;
`;

const ReviewCardDesIcon = styled.img`
  width: 18px;
  height: 20px;

  margin-top: 10px;
`;

const ReviewCardNation = styled.div`
  font-size: 30px;
  color: #666666;
  margin-left: 10px;
`;

const ReviewCardRegion = styled.div`
  font-size: 30px;
  color: #000000;
  margin-left: 10px;
`;

const ReviewHashtagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
`;

const ReviewHashtag = styled.div`
  background-color: #FF5251;
  border-radius: 30px;
  width: px;
  height: 43px;

  text-align: center;

  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
  padding-top: 3px;
  padding: 4px 15px 0 15px;
  margin: 0 7px;
`;

const ReviewLine = styled.div`
  height: 0.5px;
  width: 294px;
  background-color: #d6d6d6;
  margin-left: 30px;
  // margin-top: 20px;
`;
const ReviewLongLine = styled(ReviewLine)`
  width: 765px;
`;

const ReviewDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  height: 150px;
`;

const ReviewDetailTitle = styled.div`
  font-size: 25px;
  color: #9ab3f5;
  font-weight: bold;
  margin: 20px 0 0 0;
`;

const ReviewDetailContent = styled.div`
  height: 117px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  // justify-content: center;
`;

const ReviewInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 30px;
  // margin-top: 30px;
  height: 60px;
`;

const ReviewInfoTime = styled.div`
  font-size: #666666;
  font-size: 16px;
  margin-left: 10px;
`;

const ReviewInfoAdditionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ReviewInfoAdditionIcon = styled.img`
  width: 25px;
  height: 20px;
  margin-right: 8px;
  margin-top: 5px;
`;

const ReviewInfoAdditionTxt = styled.div`
  font-size: 16px;
  color: #666666;
  margin-right: 15px;
`;

const ReviewImgWrapper = styled.div`
  width: 530px;
  height: 282px;
`;

const ReviewCardImg = styled.img`
  width: 530px;
  height: 282px;
  object-fit: cover;
`;
