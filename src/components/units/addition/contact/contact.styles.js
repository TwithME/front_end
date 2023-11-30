import { styled } from "styled-components";

export const MainWrapper = styled.div`
`;

export const MainContainer = styled.div`
    margin: 100px auto;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
`;

export const TitleWrapper = styled.div`
    margin-left: 30px;
`;

export const MainTitle = styled.div`
    font-size: 35px;
    color: #FF5251;
    font-weight: 700;

`;

export const MainTxtBox = styled.div`
    margin: 40px 0;
`;

export const MainTxt = styled.div`
    font-size: 20px;
    color: #A7A7A7;
    margin-top: 20px;
`;

export const Line = styled.div`
    height: 1px;
    width: 1390px;
    background-color: #A7A7A7;
    margin-bottom: 40px;
`;

export const ContentWrapper = styled.div`

`;

export const TitleBox = styled.div`
    display: flex;
    
    width: 1350px;
    height: 75px;
    border-radius: 20px;
    box-shadow: 0px 2px 20px 3px rgba(153, 153, 153, 0.25);
    margin: 35px 0;
`;

export const TitleLittleBox = styled.div`
    width: 242px;
    height: 75px;

    text-align: center;
    align-items: center;
    line-height: 75px;
    color: #ffffff;
    background-color: rgba(255, 82, 81, 0.8);
    font-size: 25px;
    border-radius: 20px;
`;

export const TitleInput = styled.input`
    width: 900px;
    margin: 0 auto;
    font-size: 25px;
    border: none;
`;

export const ContentBox = styled.div`
    width: 1350px;
    height: 625px;

    text-align: center;
    line-height: 625px;
    margin: 30px 0;
    
    border: 1px solid #A7A7A7;
    border-radius: 20px;
`;

export const ContentInput = styled.textarea`
    width: 100%;
    height: 100%;
    
    text-align: center;
    align-items: center;
    font-size: 30px;
    border: none;
    padding: 50px;
    border-radius: 20px;
    scroll-y: auto;
    resize: none;
`;

export const PhotoBox = styled.div`
    width: 1350px;
    height: 200px;

    text-align: center;
    line-height: 200px;
    font-size: 25px;
    margin: 30px 0;
`;


export const NoImgWrapper = styled.label`
    width: 1350px;
    height: 200px;

  border-radius: 20px;
  border: 1px solid #A7A7A7;
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

export const ImgWrapper = styled.label`
    overflow: hidden;
    width: 1350px;
    height: 200px;

  border-radius: 20px;
  border: 1px solid #A7A7A7;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    content: "x";
    position: absolute;
    top: 20%;
    left: 90%;
    transform: translate(-50%, -50%);
    font-size: 100px;
    color: white;
  }
`;

export const Image = styled.img`
    width: 1350px;
    height: 200px;
    object-fit: cover;
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

export const EmailBox = styled.div`
    width: 1350px;
    height: 75px;

    text-align: center;
    line-height: 75px;
    margin: 30px 0;
    
    border: 1px solid #A7A7A7;
    border-radius: 20px;
`;

export const EmailInput = styled.input`
    text-align: center;
    align-items: center;
    font-size: 25px;
    border: none;
    border-radius: 20px;
`;

export const EmailNoti = styled.div`
    font-size: 20px;
    color: #A7A7A7;
    margin: 30px 0;
`;

export const TermsBox = styled.div`
    display: flex;
    margin: 30px 0;
`;

export const TermsInput = styled.input`
    width: 24px;
    height: 24px;
    border-radius: 5px;
`;

export const TermsTxt = styled.div`
    margin-left: 20px;
    font-size: 20px;
    color: #A7A7A7;
`;

export const BtnWrapper = styled.div`

`;

export const Btn = styled.div`
    width: 1350px;
    height: 75px;
    border-radius: 20px;
    background-color: rgba(255, 82, 81, 0.8);
    color: #fff;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    line-height: 75px;
    cursor: pointer;
`;