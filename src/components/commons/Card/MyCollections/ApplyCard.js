import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function MyCollectionsFindCard (props) {
  console.log(props.data);
  const router = useRouter();

    return(
        <ReviewCard style={{'cursor': 'pointer'}} onClick={(e) => router.push(`/findTwithme/${props.data.boardId}`)}>
          <ReviewImgWrapper>
            <ReviewImg src={props.data.imageUrl === null ? "/img/defaultImg.png" : props.data.imageUrl}></ReviewImg>
            </ReviewImgWrapper>
            <ReviewCardHeader>
              <ReviewInfo>
                <CountryWrapper>
                  <ReviewIcon src="/icon/location.png"></ReviewIcon>
                  <ReviewInfoTxt>{props.data.nationName}</ReviewInfoTxt>
                </CountryWrapper>
                <ReviewCity>{props.data.regionName}</ReviewCity>
              </ReviewInfo>
              <ReviewInfo>
                <ReviewInfoWrapper>
                  <ReviewIcon src="/icon/user.png"></ReviewIcon>
                  <ReviewNumTxt>{props.data.totalPeopleNum}인</ReviewNumTxt>
                </ReviewInfoWrapper>
                <ReviewInfoWrapper style={{ "margin-bottom": "5px" }}>
                  <ReviewIcon src="/icon/calendar.png"></ReviewIcon>
                  <ReviewDateTxt>
                    <ReviewInfoTxt>{props.data.startDate.substring(2).replace("-", ".")}</ReviewInfoTxt>
                    <ReviewDateLine></ReviewDateLine>
                    <ReviewInfoTxt>{props.data.endDate.substring(2)}</ReviewInfoTxt>
                  </ReviewDateTxt>
                </ReviewInfoWrapper>
              </ReviewInfo>
            </ReviewCardHeader>
            <ReviewUserWrapper>
              <ReviewHashTagWrapper>
                {props.data.hashtag1 && (<ReviewHashTag>#{props.data.hashtag1}</ReviewHashTag>)}
                {props.data.hashtag2 && (<ReviewHashTag>#{props.data.hashtag2}</ReviewHashTag>)}
              </ReviewHashTagWrapper>
              <ReviewIconWrapper>
                <ReviewReactIcon src="/icon/heart.png"></ReviewReactIcon>
                <ReviewReactTxt>{props.data.likes}</ReviewReactTxt>
                <ReviewReactIcon src="/icon/comment.png"></ReviewReactIcon>
                <ReviewReactTxt>{props.data.comments}</ReviewReactTxt>
              </ReviewIconWrapper>
            </ReviewUserWrapper>
            
        </ReviewCard>
    )
}

const ReviewCard = styled.div`
  width: 266px;
  height: 278px;

  background: #ffffff;
  box-shadow: 0px 5px 20px 3px rgba(153, 153, 153, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 35px;
  margin-bottom: 20px;
`;

const ReviewImgWrapper = styled.div`
width: 266px;
  height: 180px;
  margin-bottom: 20px;
`;


const ReviewImg = styled.img`
  width: 266px;
  height: 180px;
  object-fit: cover;
`;

const ReviewCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin-bottom: 14px;
`;

const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 112px;
`;

const CountryWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewIcon = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 3px;
`;

const ReviewInfoTxt = styled.div`
  font-weight: 300;
  font-size: 10px;
  line-height: 1;
  color: #666666;

`;

const ReviewNumTxt = styled(ReviewInfoTxt)`
width: 100px;
font-weight: 300;
font-size: 10px;
line-height: 1;
color: #666666;
margin-left: 10px;
`;

const ReviewCity = styled.div`
  margin-top: 7px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  color: #000000;
`;

const ReviewInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3px 0;
`;


const ReviewDateTxt = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewDateLine = styled.div`
  width: 4px;
  height: 0.7px;
  background-color: #666666;
  margin: 0px 4px;
`;

const ReviewUserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 3px;
  margin-bottom: 3px;
  width: 240px;
`;

const ReviewUser = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`;

const ReviewUserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  margin-right: 8px;
`;

const ReviewUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewUsername = styled.div`
  color: #C8B6FF;
  font-size: 10px;
`;

const ReviewAge = styled.div`
  color: #666666;
  font-size: 10px;
`;

const ReviewHashTagWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const ReviewHashTag = styled.button`
  height: 14px;
  width: 50px;

  padding: 0px 8px;
  margin-right: 8px;
  background: #00b4d8;
  border-radius: 30px;

  font-weight: 500;
  font-size: 5px;
  color: #ffffff;
`;

const ReviewIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
    margin-left: 20px;
`;

const ReviewReactIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 4px;
`;

const ReviewReactTxt = styled.div`
  width: 25px;
  margin: 0 2px;  
  font-weight: 400;
  font-size: 10px;
  line-height: 1;
  color: #666666;
`;
