import styled from "@emotion/styled";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 150px;
  width: fit-content;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 8px;
  color: black;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
`;

export const TitleLine = styled.div`
  height: 3px;
  background-color: black;
  margin-bottom: 70px;

  width: ${(props) => (props.kakao ? "250px" : "139px")};
`;

export const Label = styled.div`
  width: 170px;
  display: flex;
  align-items: center;
`;

export const LabelTxt = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  color: #000000;
`;

export const LabelStar = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: #ff1d1d;

  margin-left: 7px;
`;

export const Input = styled.input`
  height: 60px;
  width: 500px;
  padding: 15px 20px;
  margin-right: 15px;

  border-radius: 10px;
  border: 1px solid #d6d5d5;

  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 1;
  color: #666666;

  &:-webkit-autofill {
    -webkit-text-fill-color: #666666;
  }
`;

export const Error = styled.div`
  width: 480px;
  height: 35px;
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 14px;
  color: #ff1d1d;
`;

export const PhoneCheckInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 500px;
  margin-right: 15px;
  padding: 0 20px;

  border-radius: 10px;
  border: 1px solid #d6d5d5;
`;

export const PhoneCheckInput = styled.input`
  width: 85%;
  height: 100%;
  padding: 15px 0;
  font-weight: 400;
  font-size: 15px;
  color: #666666;
  border: none;

  &:-webkit-autofill {
    -webkit-text-fill-color: #666666;
  }
`;

export const Timer = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #03045e;
`;

export const GenderWrapper = styled.div`
  height: 73px;
  width: 500px;
  margin-right: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpanLabel = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  color: #666666;
`;

export const RadioBtn = styled.input`
  width: 25px;
  height: 25px;
  margin-right: 20px;
  background: #ffffff;
  border: 1.5px solid #d6d5d5;
  border-radius: 20px;
  cursor: pointer;
  appearance: none;
  transition: background 0.2s;

  &:checked {
    background: #c8b6ff;
    border: none;
    content: "✔";
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckBtn = styled.button`
  width: 140px;
  height: 60px;

  border: 1px solid #03045e;
  border-radius: 10px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: #03045e;
`;

export const BlankBtn = styled.div`
  width: 143px;
  height: 60px;
`;

export const BlankLabel = styled.div`
  width: 170px;
  height: 60px;
`;

export const BirthDateWrapper = styled.div`
  height: 60px;
  width: 500px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 1px solid #d6d5d5;
`;

export const BirthDateInput = styled.input`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  color: #666666;
  text-align: center;
  border: none;
  outline: none;
  width: 100px;
`;

export const BirthDateSlash = styled.div`
  margin: 0px 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  color: #666666;
`;

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

// export const ModalRecogHashtag = styled.button`
//   width: 44.5px;
//   height: 17px;
//   border: 1px solid #90e0ef;
//   border-radius: 15.5px;

//   font-size: 10px;
//   font-weight: 600;
//   color: #90e0ef;
//   text-align: center;
// `;

export const ModalBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 174px;
`;

export const ModalCancelBtn = styled.button`
  width: 80px;
  height: 30px;
  background-color: #ffffff;
  color: #c8b6ff;
  border: 1px solid #c8b6ff;
  border-radius: 10px;

  text-align: center;
  font-weight: 400;
  font-size: 12px;
`;

export const ModalSubmitBtn = styled(ModalCancelBtn)`
  background-color: #c8b6ff;
  color: #ffffff;
  border: none;
`;

export const Hashtag = styled(ModalHashtag)`
  width: 130px;
  height: 40px;
  cursor: default;

  font-size: 16px;
`;

export const AcceptTitleWrapper = styled.div`
  width: 500px;
  margin: 40px 0px 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.div`
  width: 156px;
  height: 1px;
  background-color: #666666;
`;

export const AcceptTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  text-align: center;
  color: #666666;
`;

export const AcceptWrapper = styled.div`
  width: 480px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  background: #ffffff;
  border: 1px solid #d6d5d5;
  border-radius: 5px;
  appearance: none;
  transition: background 0.2s;

  &:checked {
    background-color: #c8b6ff;
    border: none;
    content: "✔";
  }
`;

export const AcceptLabel = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
`;

export const EnrollBtn = styled.button`
  width: 500px;
  height: 73px;
  background: #c8b6ff;
  border-radius: 5px;
  margin: 40px 0px 200px 10px;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;
