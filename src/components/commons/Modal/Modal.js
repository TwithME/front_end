import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

export default function ModalComponent(props){

    return (
        <ModalOverlay>
            <Modal>
                <ModalTitle>프로필</ModalTitle>
                <ModalMbtiWrapper>
                    수정하시겠습니까?
                </ModalMbtiWrapper>
                <ModalBtnWrapper>
                    <ModalCancelBtn onClick={props.setIsModifyCheckModal(false)}>
                    취소
                    </ModalCancelBtn>
                    <ModalSubmitBtn onClick={props.onModifyProfile}>
                    확인
                    </ModalSubmitBtn>
                </ModalBtnWrapper>
            </Modal>
        </ModalOverlay>
    );

}

const ModalOverlay = styled.div`
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

const Modal = styled.div`
  width: 550px;
  padding-bottom: 27px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalTitle = styled.div`
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

const ModalMbtiWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const DefaultProfile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ModalMbtiContent = styled.div`
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

const ModalBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 174px;
`;

const ModalCancelBtn = styled.button`
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

const ModalSubmitBtn = styled(ModalCancelBtn)`
  background-color: #c8b6ff;
  color: #ffffff;
  border: none;
`;
