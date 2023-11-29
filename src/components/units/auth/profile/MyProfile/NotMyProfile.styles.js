import styled from "@emotion/styled";

export const MyProfileWrapper = styled.div`
  width: 1105px;
  min-height: 960px;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
`;

export const StyleTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 1000px;
`;

export const StyleTitle = styled.h1`
  font-size: 36px;
  color: #c8b6ff;
  margin-bottom: 30px;
  margin-right: 30px;
`;

export const StyleHashTag = styled.div`
  line-height: 42px;
  height: 42px;
  font-size: 17px;
  font-weight: bold;
  background-color: #90e0ef;
  border: 1px solid #90e0ef;

  border-radius: 15px;
  color: #ffffff;
  margin: 0 10px;
  margin-top: 6px;
  padding: 0 20px;
  cursor: pointer;
`;

export const StyleEditImg = styled.img`
  cursor: pointer;
  width:30px;
  height: 30px;
  justify-content: center;
  margin-top: 5px;
`

export const StyleWrapper = styled.div``;

export const StyleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 2.5px solid #c8b6ff;
  border-radius: 15px;
  background-color: white;
  padding: auto;

  width: 1000px;
  height: 180px;

  font-size: 20px;
`;

export const BioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 50px;
`;

export const BioNoneWrapper = styled.div`
  text-align: center;
`

export const StyleBio = styled.div`
  flex:1;
  width: 100%;
  height: 55px;
  padding: 20px 0;
  color: #666666;
`

export const BioBold = styled.span`
  color: #9471FF;
`

export const StyleBioImg = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 15px;
  margin-right: 10px;
  object-fit: cover;
`

export const StyleNoneBioImg = styled.img`
width: 60px;
height: 60px;
object-fit: cover;
`;

export const StyleBioDelImg = styled(StyleBioImg)`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-top: 25px;
  cursor: pointer;
`;

export const StyleLineBio = styled(StyleBio)`
  border-bottom: 1.5px solid #c8b6ff;
`

export const StyleModifyBioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  white-space: nowrap;
  margin-top: 20px;
`;

export const StyleBioInput = styled.input`
  font-size: 20px;
  width: 100%;
  white-space: nowrap;
  margin: 0 20px;
  margin-bottom: 10px;
  padding: 3px 10px;

  border-top: none;
  border-left: none;
  border-right: none;

  color: ${(props) => 
    props.max ? "#FF7373" : "#666666"
  };
`

export const StyleMaxErr = styled.span`
  font-size: 13px;
  margin-right: 30px;
  margin-top: 13px;
`;

export const BioInputWrapper = styled.div`
  width: 100%;
`;

export const StyleLineBioInput = styled(StyleBio)`
  border-bottom: 1.5px solid #c8b6ff;
`

export const Title = styled.h1`
  width: 1000px;
  font-size: 36px;
  color: #c8b6ff;
  margin-top: 60px;
  margin-bottom: 30px;
`;

// 테이블

export const TableWrapper = styled.div`
  display: inline-block;
  border-radius: 50px;
`;

export const Table = styled.table`
  width: 1000px;
  height: 420px;
  background-color: white;
  margin-bottom: 15px;
  padding: 10px;
  border-collapse: collapse;
  border-radius: 15px;
  border-style: hidden;
  box-shadow: 0 0 0 2px #c8b6ff;
`;

export const Td = styled.td`
  max-height: 100px;
  padding-left: 50px;
  width: 230px;
  border: none;
  font-size: 20px;
  color: #666666;
  border-right: 2px solid #C8B6FF;
`;

export const ModifyTd = styled(Td)`
  max-width: 250px;
  height: 100px;
  padding-left: 0;
`

export const Tc = styled(Td)`
  width: 100px;
  text-align: center;
  color: #c8b6ff;
  border: none;
  font-weight: bold;
`;

export const TdWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TdTxt = styled.div`

`;

export const LockIcon = styled.img`
  width: 25px;
  height: 30px;
  margin-right: 30px;
  cursor: pointer;
`;

export const TdLine = styled.div`
  height: 120px;
  width: 2px;
  background-color: #C8B6FF;
`;  

// 수정 시 스타일

export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const EmailFirstInput = styled.input`
  padding: 0 20px;
  height: 52px;
  width: 142px;
  border: 2px solid #c8b6ff;
  border-radius: 15px;
  font-size: 20px;
`;

export const EmailAt = styled.span`
  margin: 0px 10px;
  margin-top: 10px;
  font-weight: bold;
`;

export const EmailSecondSelect = styled.select`
  padding: 0 20px;
  height: 52px;
  width: 161px;
  border: 2px solid #c8b6ff;
  border-radius: 15px;
  font-size: 20px;
  box-shadow: 0 0 0 rgb(255, 255, 255), 0.2em 0.2em 1em rgba(0, 0, 0, 0.3);
`;

export const EmailOption = styled.option`
  font-size: 20px;
`;

export const mbti = styled.span`
  cursor: pointer;
  border: 2px solid #c8b6ff;
  border-radius: 15px;
  padding: 10px 20px;
`;

export const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`

export const PhoneInput = styled.input`
  padding: 0 20px;
  height: 52px;
  width: 200px;
  border: 2px solid #c8b6ff;
  border-radius: 15px;
  font-size: 20px;
`;

export const phoneBtn = styled.div`
  width: 70px;
  padding: 10px;
  margin: 0 10px;
  font-size: 15px;
  color: white;
  border-radius: 15px;
  background-color: #c8b6ff;
  border: 1px solid #c8b6ff;
  text-align: center;
  justify-content: center;
  cursor: pointer;
`

export const BtnWrapper = styled.div`
  align-items: center;
  text-align: center;
  margin-top: 45px;
`;

export const Btn = styled.button`
  width: 200px;
  height: 63px;
  border-radius: 50px;
  background-color: #c8b6ff;
  border: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin: 0 20px;
`;

export const CancleBtn = styled(Btn)`
  border: 1px solid #c8b6ff;
  color: #c8b6ff;
  background-color: #ffffff;
`

export const ProfileImage = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background-color: #e6e6e6;

  display: flex;           
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const defaultProfile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProfileFileInput = styled.input`
  background-color: #ffffff;
`

export const profileFileBtn = styled.label`
  background-color: #c8b6ff;
  width: 150px;
  height: 50px;
  margin-top: 10px;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  margin: 0 30px;
`;

export const profileRegisterBtn = styled.button`
  background-color: #ffffff;
  color: #c8b6ff;
  font-weight: bold;
  border: 4px solid #c8b6ff;
  border-radius: 15px;
  width: 100px;
  height: 50px;
  margin-top: 10px;
  font-size: 20px;
  margin: 0 10px;
`;

export const profileBtn = styled.button`
  background-color: #c8b6ff;
  color: #ffffff;
  border-radius: 15px;
  padding: 0 20px;
  width: 330px;
  height: 50px;
  margin-top: 10px;
  font-size: 20px;
  margin: 0 10px;
`;

// mbti 모달 창
export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  width: 550px;
  padding-bottom: 27px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 10px 10px 0px 0px;
  background-color: #c8b6ff;
  text-align: center;
  margin-bottom: 26px;

  font-weight: 700;
  font-size: 22px;
  line-height: 50px;
  color: #ffffff;
`;

export const ModalMbtiWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DefaultProfile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ModalMbtiContent = styled.div`
  cursor: pointer;
  text-align: center;
  width: 17.5%;
  font-size: 20px;
  padding: 10px 20px;
  margin: 10px 15px;
  background-color: #90e0ef;
  color: #ffffff;
  border-radius: 15px;

  &:hover {
    background-color: #19d0f2;
  }
`;

export const ModalBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 174px;
`;

export const ModalCancelBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: #ffffff;
  color: #c8b6ff;
  border: 1px solid #c8b6ff;
  border-radius: 10px;
  margin: 0 10px;

  text-align: center;
  font-weight: 400;
  font-size: 12px;
`;

export const ModalSubmitBtn = styled(ModalCancelBtn)`
  background-color: #c8b6ff;
  color: #ffffff;
  border: none;
`;

// 스타일 모달 창

export const ModalInputWrapper = styled.form`
  width: 458px;
  height: 36px;
  border: 1px solid #999999;
  border-radius: 10px;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
`;

export const ModalInput = styled.input`
  width: 422px;
  height: 100%;
  border: none;
  border-radius: 10px;

  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #999999;
`;

export const ModalInputBtn = styled.button`
  width: 36px;
  height: 100%;
  background: #999999;
  border-radius: 8px;

  font-size: 30px;
  line-height: 1;
  color: #ffffff;
`;

export const ModalHashtagError = styled(Error)`
  width: 458px;
  height: 10px;
  font-size: 10px;
  margin-bottom: 15px;
  justify-content: center;
  text-align: center;
`;

export const ModalMyStyleWrapper = styled.div`
  height: 27px;
  display: flex;
  margin-bottom: 43px;
  gap: 10.5px;
`;

export const ModalHashtag = styled.button`
  width: 83px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #90e0ef;
  border-radius: 30px;
  background-color: #90e0ef;
  cursor: pointer;

  font-weight: 500;
  font-size: 12px;
  color: #ffffff;
  line-height: 1;
`;

export const ModalRecogHahstag = styled(ModalHashtag)`
  background-color: #ffffff;
  color: #90e0ef;
`;

export const ModalRecogStyleWrapper = styled.div`
  width: 458px;
  padding: 30px 0px;
  margin-bottom: 26px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #90e0ef;
  border-bottom: 1px solid #90e0ef;
`;

export const ModalRecogTitle = styled.div`
  width: 120px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-bottom: 24px;
  background-color: #ffffff;

  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #90e0ef;
`;

export const ModalRecogHashtagWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 10.5px;
`;


export const Hashtag = styled(ModalHashtag)`
  width: 130px;
  height: 40px;
  cursor: default;

  font-size: 16px;
`;