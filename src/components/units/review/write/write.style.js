import { styled } from "styled-components";
import { StyleEditImg } from "../../auth/profile/MyProfile/NotMyProfile.styles";

export const TitleBanner = styled.div`
  width: 100%;
  height: 500px;
  background: rgba(255, 82, 81, 0.8);
  display: flex;
  justify-content: center;
  position: relative;
`;

export const TitleTxt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  color: #fff;
  font-size: 50px;
  font-weight: 700;
  margin-top: 140px;
  margin-bottom: 28px;
`;

export const SubTitle = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
`;

export const WriteForm = styled.div`
  position: absolute;
  top: 317px;
  width: 1240px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 5px 20px 3px rgba(153, 153, 153, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 80px;
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 100px;
`;

export const FormTitleWrapper = styled.div`
  width: 1080px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const FormTitleTxtWrapper = styled.div`
  width: 500px;
`;

export const StepTxt = styled.div`
  color: #666;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const StepTitleTxt = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 600;
`;

export const StepSubTitleTxt = styled.div`
  color: #666;
  font-size: 16px;
  font-weight: 500;
  margin-top: 8px;
`;

export const MoreBtnImg = styled.img`
  transform: ${(props) => (props.isOpenStep ? "rotate(180deg)" : "none")};
`;

export const MoreBtn = styled.button`
  width: 40px;
  height: 40px;
`;

export const Line = styled.div`
  width: 1080px;
  height: 1px;
  background: rgba(153, 153, 153, 0.5);
`;

export const StepInfoWrapper = styled.div`
  margin-top: 50px;
`;

export const InputInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 40px;
`;

export const InputTitle = styled.div`
  width: 250px;
  color: #333;
  font-size: 20px;
  font-weight: 500;
  margin-right: 40px;
`;

export const CmbBox = styled.div`
  width: 790px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid rgba(153, 153, 153, 0.5);
  background: rgba(217, 217, 217, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  cursor: ${(props) => (props.isEdit ? "default" : "pointer")};
  padding: 0px 20px 0px 30px;
`;

export const CmbBoxTxt = styled.div`
  color: #333;
  font-size: 16px;
  font-weight: 500;
  width: 680px;
`;

export const CmbBoxArrow = styled.img`
  width: 20px;
`;

export const CmbBoxList = styled.div`
  width: 790px;
  height: 202px;
  position: absolute;
  top: 48px;
  left: 290px;
  z-index: 50;
  background-color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  border-end-start-radius: 5px;
  border-end-end-radius: 5px;
  border: 1px solid rgba(153, 153, 153, 0.5);

  &::-webkit-scrollbar {
    width: 6px; /* 스크롤바 너비 설정 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(167, 167, 167, 0.5);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 4px;
  }
`;

export const CmbBoxListItem = styled.div`
  width: 790px;
  /* background-color: aliceblue; */
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 30px;
  border-bottom: 1px solid rgba(153, 153, 153, 0.5);
  cursor: pointer;

  color: #666;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background-color: rgba(0, 180, 216, 0.1);
    /* color: #FFF; */
  }
`;

export const InfoBox = styled.div`
  width: 1080px;
  height: 180px;
  display: flex;
  justify-content: center;
  gap: 100px;
  padding-top: 43px;
  border-radius: 10px;
  border: 1px solid rgba(153, 153, 153, 0.5);
  background: rgba(217, 217, 217, 0.2);
`;

export const InfoBoxTitle = styled.div`
  color: #333;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const InfoBoxInput = styled.div`
  width: 250px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid rgba(153, 153, 153, 0.5);
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #666;
  font-size: 16px;
  font-weight: 500;
`;

export const InfoBoxItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WithTripProfileList = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 50px;
`;

export const WithTripProfileWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  background-color: #fff;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const WithTripProfile = styled(Image)`
  cursor: pointer;
`;

export const WithTripMoreBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #999;

  color: #666;
  font-size: 12px;
  cursor: pointer;
`;

export const WithTripList = styled.div`
  width: 170px;
  height: 200px;
  border-radius: 10px;
  background-color: #fff;
  position: absolute;
  top: 100px;
  left: 5px;
  box-shadow: 0px 5px 20px 3px rgba(153, 153, 153, 0.25);
  padding-top: 10px;
`;

export const WithTripListTitle = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

export const WithTripListWrapper = styled.div`
  max-height: 150px;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  gap: 15px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px; /* 스크롤바 너비 설정 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(167, 167, 167, 0.5);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 4px;
  }
`;

export const WithTripListItem = styled.div`
  display: flex;
  gap: 15px;
`;

export const WithTripListProfile = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: aliceblue;
  overflow: hidden;
`;

export const WithTripListID = styled.div`
  color: #666;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const LongInput = styled.input`
  width: 1080px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid rgba(153, 153, 153, 0.5);
  background: rgba(255, 255, 255);
  color: #333;
  font-size: 18px;
  font-weight: 500;
  padding: 25px 25px;
  margin-bottom: 40px;
`;

export const TitleInput = styled(LongInput)`
  font-size: 24px;
  margin-bottom: 20px;
  padding: 35px 25px;
  color: #333;
`;

export const LongTextarea = styled.textarea`
  width: 1080px;
  height: 600px;
  border-radius: 5px;
  border: 1px solid rgba(153, 153, 153, 0.5);
  background: rgba(255, 255, 255);
  color: #333;
  font-size: 18px;
  font-weight: 500;
  padding: 21px 25px;
  resize: none;
  overflow-y: auto;
  margin-bottom: 20px;
`;

// 이미지 뷰어
export const ImgWrapper = styled.div`
  width: 1080px;
  padding: 20px;
  padding-bottom: 0px;
  border-radius: 5px;
  border: 1px solid rgba(153, 153, 153, 0.5);
  background: #fff;
  margin-bottom: 40px;

  display: flex;
  flex-wrap: wrap;
  gap: 8.4px;
`;

export const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ImageWrapper = styled.div`
  width: 200px;
  height: 150px;
  overflow: hidden;
  /* background-color: beige; */
`;

export const Img = styled(Image)`
  object-fit: contain;
`;

export const ImgNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ImgName = styled.div`
  color: rgba(102, 102, 102, 0.8);
  font-size: 18px;
  font-weight: 500;
`;

export const ImgDelBtn = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const ImgAddBtn = styled.label`
  width: 200px;
  height: 182px;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 23px;
`;

export const ImgAddIcon = styled.img`
  margin-bottom: 10px;
`;

export const ImgAddTxt = styled.div`
  color: #666;
  font-size: 18px;
  font-weight: 700;
`;

export const NoImgWrapper = styled.label`
  width: 1080px;
  height: 228px;
  border-radius: 5px;
  border: 1px solid rgba(153, 153, 153, 0.5);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  position: relative;
  cursor: pointer;

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }

  &:hover::after {
    content: "+";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 100px;
    color: white;
  }
`;

export const NoImgIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const NoImgIcon = styled.img`
  width: 80px;
`;

export const NoImgTxt = styled.div`
  color: rgba(102, 102, 102);
  font-size: 20px;
  font-weight: 600;
`;

export const NoImgSubTxt = styled.div`
  color: rgba(102, 102, 102, 0.8);
  font-size: 18px;
  font-weight: 500;
`;

export const BtnWrapper = styled.div`
  display: flex;
`;

export const CancelBtn = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 5px;
  background: #d9d9d9;
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

export const SubmitBtn = styled(CancelBtn)`
  background: #0077b6;
  margin-left: 45px;
`;

export const FormBtm = styled.div`
  height: 2300px;
`;
