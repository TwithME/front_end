import styled from "styled-components";

// 필수 props: title, toggleAlert
export default function Alert(props) {
  return (
    <>
      <ModalOverlay>
        <Modal>
          <ModalTitle>{props.title}</ModalTitle>
          <ModalSubmitBtn onClick={props.toggleAlert}>확인</ModalSubmitBtn>
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

const ModalSubmitBtn = styled.button`
  width: 80px;
  height: 40px;
  background-color: #c8b6ff;
  color: #ffffff;
  border: none;
  border-radius: 5px;

  text-align: center;
  font-weight: 400;
  font-size: 12px;
`;
