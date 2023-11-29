import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function TriplogReviewCard (props) {
  const router = useRouter();
    return(
        <ReviewCard style={{'cursor': 'pointer'}} onClick={(e) => router.push(`/review/${props.info.reviewId}`)}>
            <ReviewCardTitle>{props.info.tripylerTitle}</ReviewCardTitle>
            <ReviewCardImgWrapper>
                {props.info.imageUrls.map((e, idx) => {
                    if(0 <= idx && idx < 3){
                    return (<ReviewCardImg key={idx} src={e === null ? "/img/defaultImg.png" : e}></ReviewCardImg>)}
                })}

            </ReviewCardImgWrapper>
            <ReviewCardContent>{props.info.tripylerTitle}</ReviewCardContent>
            <ReviewCardLine></ReviewCardLine>
            <ReviewCardFooter>
                <ReviewCardDesWrapper>
                    <ReviewCardDesIcon src="/icon/location.png"></ReviewCardDesIcon>
                    <ReviewCardDes>{props.info.nationName}</ReviewCardDes>
                    <ReviewCardDesIcon src="/icon/calendar.png"></ReviewCardDesIcon>
                    <ReviewCardDes>{props.info.startDate.substring(2).replace("-", ".")} ~ {props.info.endDate.substring(2).replace("-", ".")}</ReviewCardDes>
                </ReviewCardDesWrapper>
                <ReviewCardInfoWrapper>
                    <ReviewCardInfoIcon src="/icon/heart_gray.png"></ReviewCardInfoIcon>
                    <ReviewCardInfoTxt>{props.info.likes}</ReviewCardInfoTxt>
                    <ReviewCardInfoIcon src="/icon/comment.png"></ReviewCardInfoIcon>
                    <ReviewCardInfoTxt>{props.info.comments}</ReviewCardInfoTxt>
                    <ReviewCardInfoIcon src="/icon/view_gray.png"></ReviewCardInfoIcon>
                    <ReviewCardInfoTxt>{props.info.hits}</ReviewCardInfoTxt>
                </ReviewCardInfoWrapper>
            </ReviewCardFooter>
        </ReviewCard>
    )
}

const ReviewCard = styled.div`
  width: 400px;
  height: 295px;

  background: rgba(160, 187, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0px 3px 3px 3px rgba(153, 153, 153, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;
  margin: 20px 30px 20px 30px;

`;

const ReviewCardTitle = styled.div`
    width: 380px;
    height: 27;
    background-color: #ffffff;
    color: #A0BBFF;
    border-radius: 10px;
    font-size: 15px;
    text-align: center;
    padding: 5px 0;
   
`;

const ReviewCardImgWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 79px;
`;

const ReviewCardImg = styled.img`
    width: 119px;
    height: 79px;
    margin: 5px 5px;
    object-fit: cover;
`;

const ReviewCardContent = styled.div`
    color: #696969;
    font-size: 12px;
    width: 380px;
    height: 90px;
    overflow: hidden;
    margin: 10px 0;
`;

const ReviewCardLine = styled.div`
    height: 1px;
    width: 378px;
    background-color: #ffffff;
`;

const ReviewCardFooter = styled.div`
    display: flex;
    flex-direction: column;
`;

const ReviewCardDesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
`;

const ReviewCardDesIcon = styled.img`
    width: 15px;
    height: 15px;

    margin-top: 3px;
    margin-right: 5px;
`;
const ReviewCardDes = styled.div`
    color: #696969;
    font-size: 15px;
    font-weight: bold;
    margin-right: 10px;
`;

const ReviewCardInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin: 8px 0;
`;

const ReviewCardInfoIcon = styled.img`
    width: 15px;
    height: 13px;
    margin-right: 5px;
    margin-top: 2px;
`;

const ReviewCardInfoTxt = styled.div`
    color: #696969;
    font-size: 10px;
    font-weight: bold;
    margin-right: 10px;
`;