import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Block from "./Block";

// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// 필수 props: name, id, toggleReport
export default function Report(props) {
  const [reasonList, setReasonList] = useState([]);
  const [reason, setReason] = useState({});
  const [isOpenCmbBox, setIsOpenCmbBox] = useState(false);
  const [content, setContent] = useState("");

  const [isOpenReport, setIsOpenReport] = useState(true);
  const [isOpenBlock, setIsOpenBlock] = useState(false);

  const toggleCmbBox = () => {
    setIsOpenCmbBox((prev) => !prev);
  };

  const onClickCmbItem = (e) => {
    setReason(reasonList.filter((el) => el.id == e.target.id)[0]);
    toggleCmbBox();
  };

  const fetchList = async () => {
    await axios
      .get(`http://semtle.catholic.ac.kr:8081/report/reason`)
      .then((res) => {
        console.log(res);
        setReasonList([...res.data.data]);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchList();
  }, []);

  const onClickSubmit = async () => {
    await axios
      .post(`http://semtle.catholic.ac.kr:8081/report`, {
        content,
        reportReasonId: reason?.id,
        reporteeId: props.id,
      })
      .then((res) => {
        console.log(res);
        setIsOpenReport((prev) => !prev);
        setIsOpenBlock((prev) => !prev);
      })
      .catch((err) => console.error(err));
  };

  const toggleBlock = () => {
    setIsOpenBlock((prev) => !prev);
    props.toggleReport();
  };

  return (
    <>
      <ModalOverlay>
        {isOpenReport && (
          <ReportModal>
            <ModalTitle
              onClick={() => {
                console.log(reason);
              }}
            >
              유저님을 신고하시나요?
            </ModalTitle>
            <ModalContent>
              <ModalSubTitle>어떤 이유로 신고하려 하시나요?</ModalSubTitle>
              <ModalCmbBox onClick={toggleCmbBox}>
                <CmbBoxTxt>
                  {reason?.reason || "신고 이유를 선택해주세요"}
                </CmbBoxTxt>
                <ArrowDropDownIcon style={{ color: "#999" }} />
              </ModalCmbBox>
              {isOpenCmbBox && (
                <CmbBoxWrapper>
                  {reasonList.map((el) => (
                    <CmbBoxItem key={el.id} id={el.id} onClick={onClickCmbItem}>
                      {el.reason}
                    </CmbBoxItem>
                  ))}
                </CmbBoxWrapper>
              )}
            </ModalContent>
            <ModalContent>
              <ModalSubTitle>구체적인 이유가 있다면 적어주세요.</ModalSubTitle>
              <ModalInput
                onChange={(e) => setContent(e.target.value)}
              ></ModalInput>
            </ModalContent>
            <ModalBtnWrapper>
              <ModalCancelBtn onClick={props.toggleReport}>취소</ModalCancelBtn>
              <ModalSubmitBtn onClick={onClickSubmit}>제출</ModalSubmitBtn>
            </ModalBtnWrapper>
          </ReportModal>
        )}

        {isOpenBlock && (
          <Block name={props.name} id={props.id} toggleBlock={toggleBlock} />
        )}
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

const ReportModal = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.15);
  padding: 2rem 4rem;
  z-index: 101;
`;

const ModalTitle = styled.div`
  width: 420px;
  color: #c8b6ff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const ModalContent = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const ModalSubTitle = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 1rem;
  width: 420px;
`;

const ModalCmbBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 420px;
  padding: 0.5rem 1rem;

  border-radius: 5px;
  border: 0.5px solid #999;
  background: #fff;
  cursor: pointer;
`;

const CmbBoxTxt = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 500;
`;

const CmbBoxWrapper = styled.div`
  width: 420px;
  padding: 0.5rem 0;
  position: absolute;
  background-color: #fff;
  border-radius: 5px;
  border: 0.5px solid #999;
  z-index: 102;
`;

const CmbBoxItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    color: #c8b6ff;
  }
`;

const ModalInput = styled.textarea`
  width: 420px;
  height: 200px;
  border-radius: 5px;
  border: 0.5px solid #999;
  padding: 1rem;
  outline: none;
  resize: none;
  color: #000;
  font-size: 14px;
`;

const ModalBtnWrapper = styled.div`
  width: 420px;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
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
