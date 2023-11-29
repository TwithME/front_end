import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function TriplogFindcard (props) {
  const router = useRouter();
    return(
       <>
        <TriplogFindCardWrapper onClick={(e) => router.push(`/findTwithme/${props.info.tripylerId}`)}>
            <TriplogFindImgWrapper>
                <TriplogFindDesWrapper>
                    <TriplogFindDesIcon src="/icon/location.png"></TriplogFindDesIcon>
                    <TriplogFindDes>{props.info.regionName}</TriplogFindDes>

                </TriplogFindDesWrapper>
                <ReviewImgWrapper>
                <TriplogFindImg src={props.info.imageUrl === null ? "/img/defaultImg.png" : props.info.imageUrl}></TriplogFindImg>
                </ReviewImgWrapper>
            </TriplogFindImgWrapper>
            <TriplogFindContentWrapper>
                <TriplogFindContentTitle>{props.info.title}</TriplogFindContentTitle>
                <TriplogFindContentNumWrapper>
                    <TriplogFindNumIcon src="/icon/profile_white.png"></TriplogFindNumIcon>
                    <TriplogFindContentTxt>{props.info.recruitPeopleNum}인 모집 완료 / {props.info.totalPeopleNum}인</TriplogFindContentTxt>
                </TriplogFindContentNumWrapper>
                <TriplogFindLine></TriplogFindLine>
                <TriplogFindInfoWrapper>
                    <TriplogFindInfoIcon src="/icon/heart_white.png"></TriplogFindInfoIcon>
                    <TriplogFindInfoTxt>{props.info.likes}</TriplogFindInfoTxt>
                    <TriplogFindInfoIcon src="/icon/comment_white.png"></TriplogFindInfoIcon>
                    <TriplogFindInfoTxt>{props.info.comments}</TriplogFindInfoTxt>
                    <TriplogFindInfoIcon src="/icon/view_white.png"></TriplogFindInfoIcon>
                    <TriplogFindInfoTxt>{props.info.hits}</TriplogFindInfoTxt>
                </TriplogFindInfoWrapper>
            </TriplogFindContentWrapper>
        </TriplogFindCardWrapper>
       </>
    )
};


const TriplogFindCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 880px;
  height: 125px;
  box-shadow: 0px 10px 30px 10px rgba(102, 102, 102, 0.12);
  background-color: #A0BBFF;
  border-radius: 10px;

  margin-top: 30px;
  cursor: pointer;

  
`;

const TriplogFindImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 220px;
`;

const TriplogFindDesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 25px;
    margin-bottom: 6px;
`;

const TriplogFindDesIcon = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 5px;
`;

const TriplogFindDes = styled.div`
    color: #ffffff;
    font-size: 15px;
    font-weight: bold;
`;

const ReviewImgWrapper = styled.div`
width: 170px;
    height: 75px;
`;

const TriplogFindImg = styled.img`
    width: 170px;
    height: 75px;
    object-fit: cover;
    border-radius: 10px;
    border: 5px solid rgba(255, 255, 255, 0.7);
    margin-left: 25px;
`;

const TriplogFindContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const TriplogFindContentTitle = styled.div`
    color: #A0BBFF;
    font-size: 15px;
    font-weight: bold;
    background-color: #ffffff;
    border-radius: 10px;
    width: 643px;
    height: 27px;
    padding: 3px 10px;
`;

const TriplogFindContentNumWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 8px;
`;

const TriplogFindNumIcon = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 8px;
    margin-top: 3px;
`;

const TriplogFindContentTxt = styled.div`
    color: #ffffff;
    font-size: 15px;
`;

const TriplogFindLine = styled.div`
    height: 3px;
    width: 637px;
    background-color: #ffffff;
    border-radius: 15px;
    margin-top: 8px;
`;

const TriplogFindInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
`;

const TriplogFindInfoIcon = styled.img`
width: 13px;
height: 13px;
margin-right: 5px;
`;

const TriplogFindInfoTxt = styled.div`
    color: #ffffff;
    font-size: 10px;
    margin-right: 10px;
`;