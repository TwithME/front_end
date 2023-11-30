import styled from "styled-components";

// 필수 props: title, onClickSubmit, onClickCancel
export default function Confirm(props) {
  return (
    <>
      <ModalOverlay>
        <Modal>
          <ModalTitle>{props.title}</ModalTitle>
          <ModalBtnWrapper>
            <ModalSubmitBtn onClick={props.onClickSubmit}>네</ModalSubmitBtn>
            <ModalCancelBtn onClick={props.onClickCancel}>
              아니오
            </ModalCancelBtn>
          </ModalBtnWrapper>
        </Modal>
      </ModalOverlay>
    </>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const Modal = styled.div`
  width: 400px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.15);
  padding: 2.5rem 0;
  z-index: 101;
`;

const ModalTitle = styled.div`
  color: #c8b6ff;
  font-size: 20px;
  font-weight: 600;
`;

const ModalBtnWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const ModalCancelBtn = styled.button`
  width: 80px;
  height: 40px;
  background-color: #ffffff;
  color: #c8b6ff;
  border: 1px solid #c8b6ff;
  border-radius: 5px;

  text-align: center;
  font-weight: 400;
  font-size: 12px;
`;

const ModalSubmitBtn = styled(ModalCancelBtn)`
  background-color: #c8b6ff;
  color: #ffffff;
  border: none;
`;
