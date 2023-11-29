import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MyCollectionsFindCard (props) {
  const router = useRouter();
  useEffect(() => {
    if(props){
        console.log(props);
    }
  }, [props])
    return(
       <>
        <CollectionReviewWrapper  style={{'cursor': 'pointer'}} onClick={(e) => router.push(`/findTripyler/${props.data.tripylerId}`)}>
            <CollectionReviewDes>{props.data.regionName}</CollectionReviewDes>
            <CountryWrapper>
                <ReviewIcon src="/icon/location.png"></ReviewIcon>
                <ReviewInfoTxt>{props.data.nationName}</ReviewInfoTxt>
                <ReviewIcon src="/icon/calendar.png"></ReviewIcon>
                <ReviewInfoTxt>{props.data.startDate.substring(2).replace("-", ".")} - {props.data.endDate.substring(2).replace("-", ".")}</ReviewInfoTxt>
                <ReviewIcon src="/icon/user.png"></ReviewIcon>
                <ReviewInfoTxt>{props.data.totalPeopleNum}인</ReviewInfoTxt>
            </CountryWrapper>
            <ReviewHashTagWrapper>
                {props.data.hashtag1 && (<ReviewHashTag>#{props.data.hashtag1}</ReviewHashTag>)}
                {props.data.hashtag2 && (<ReviewHashTag>#{props.data.hashtag2}</ReviewHashTag>)}
                {props.data.hashtag3 && (<ReviewHashTag>#{props.data.hashtag3}</ReviewHashTag>)}
              </ReviewHashTagWrapper>
        </CollectionReviewWrapper>
       </>
    )
};


const CollectionReviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 880px;
  height: 80px;
  box-shadow: 10px 10px 20px 10px rgba(102, 102, 102, 0.12);

  margin-top: 10px;
  margin-bottom: 10px;
`;

const CollectionReviewDes = styled.div`
    font-size: 22px;
    font-weight: bold;
    margin-left: 30px;
    width: 170px;
`;

const CountryWrapper = styled.div`
    width: 370px;
    display: flex;
    flex-direction: row;
`;

const ReviewIcon = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 8px;
`;

const ReviewInfoTxt = styled.div`
    font-size: 14px;
    color: #666666;
    margin-right: 20px;
`;

const ReviewHashTagWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const ReviewHashTag = styled.div`
    height: 25px;
    width: 65px;

    padding: 5px 8px;
    margin-right: 15px;
    background: #00b4d8;
    border-radius: 30px;
    text-align: center;

    font-weight: 500;
    font-size: 5px;
    color: #ffffff;
`;