import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";

// 필수 props: data, setData, setIsOpenModal, limitLen(최대 제한 개수)
// 선택 props: placeholder
export default function StyleModal(props) {
  const apiPath = "http://semtle.catholic.ac.kr:8081";
  const [errorHashtag, setErrorHashtag] = useState("");
  const [myHashtag, setMyHashtag] = useState([]);
  const [hashtagList, setHashtagList] = useState([]);

  const limitLen = parseInt(props.limitLen);
  const isDuplicate = (name) => myHashtag.some((tag) => tag.name === name);

  const fetchHashtag = async () => {
    await axios
      .get(apiPath + "/hashtag/list")
      .then((response) => {
        setHashtagList([...response.data.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchHashtag();
    setMyHashtag([...props.data]);
  }, []);

  // 해시태그 검색기능

  const handleSearchHashtag = async (event) => {
    event.preventDefault();

    if (
      myHashtag.length < limitLen &&
      !isDuplicate(event.target.search.value)
    ) {
      await axios
        .get(apiPath + "/hashtag", {
          params: {
            name: event.target.search.value,
          },
        })
        .then((response) => {
          console.log(response);
          console.log(event.target.search.value);
          const data = response.data.data;
          if (data.length !== 0) {
            handleAddHashtag(data[0].id, data[0].name);
            setErrorHashtag("");
          } else {
            setErrorHashtag(
              "해당 키워드는 존재하지 않습니다. 다시 입력해주세요."
            );
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    event.target.reset();
  };

  // 해시태그 버튼관리

  const handleDelHashtag = (event) => {
    setMyHashtag(myHashtag.filter((e) => e.id !== parseInt(event.target.id)));
  };

  const handleAddHashtag = (id, name) => {
    if (myHashtag.length < limitLen && !isDuplicate(name)) {
      setMyHashtag((prev) => [...prev, { id, name }]);
    }
  };

  // 모달창 열고닫기

  const handleCloseModal = () => {
    setMyHashtag([...props.data]);
    props.setIsOpenModal(false);
  };

  const handleSubmitModal = () => {
    props.setData([...myHashtag]);
    props.setIsOpenModal(false);
  };

  return (
    <ModalOverlay>
      <Modal>
        <ModalTitle>여행 스타일</ModalTitle>
        <ModalInputWrapper onSubmit={handleSearchHashtag}>
          <ModalInput
            placeholder={
              `여행스타일 검색 (${props.placeholder || `최대 ${props.limitLen}개`})`
            }
            name="search"
            autocomplete="off"
          ></ModalInput>
          <ModalInputBtn>
            <img src="/icon/search.png" />
          </ModalInputBtn>
        </ModalInputWrapper>
        <ModalHashtagError>{errorHashtag}</ModalHashtagError>
        <ModalMyStyleWrapper>
          {myHashtag.map((e) => (
            <ModalHashtag key={e.id} id={e.id} onClick={handleDelHashtag}>
              #{e.name}
            </ModalHashtag>
          ))}
        </ModalMyStyleWrapper>
        <ModalRecogStyleWrapper>
          <ModalRecogTitle>키워드(50개)</ModalRecogTitle>
          <ModalRecogHashtagWrapper>
            {hashtagList.map((e) =>
              myHashtag.filter((el) => el.id == e.id).length == 0 ? (
                <ModalRecogHahstag
                  key={e.id}
                  id={e.id}
                  onClick={() => handleAddHashtag(e.id, e.name)}
                >
                  #{e.name}
                </ModalRecogHahstag>
              ) : (
                <ModalHashtag key={e.id} id={e.id} onClick={handleDelHashtag}>
                  #{e.name}
                </ModalHashtag>
              )
            )}
          </ModalRecogHashtagWrapper>
        </ModalRecogStyleWrapper>
        <ModalBtnWrapper>
          <ModalCancelBtn onClick={handleCloseModal}>취소</ModalCancelBtn>
          <ModalSubmitBtn onClick={handleSubmitModal}>확인</ModalSubmitBtn>
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

const ModalInputWrapper = styled.form`
  width: 458px;
  height: 36px;
  border: 1px solid #999999;
  border-radius: 10px;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
`;

const ModalInput = styled.input`
  width: 422px;
  height: 100%;
  border: none;
  border-radius: 10px;

  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #999999;
`;

const ModalInputBtn = styled.button`
  width: 36px;
  height: 100%;
  background: #999999;
  border-radius: 8px;

  font-size: 30px;
  line-height: 1;
  color: #ffffff;
`;

const ModalHashtagError = styled.div`
  width: 458px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  font-size: 10px;
  font-weight: 400;
  color: #ff1d1d;
`;

const ModalMyStyleWrapper = styled.div`
  height: 27px;
  display: flex;
  margin-bottom: 43px;
  gap: 10.5px;
`;

const ModalHashtag = styled.button`
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

const ModalRecogHahstag = styled(ModalHashtag)`
  background-color: #ffffff;
  color: #90e0ef;
`;

const ModalRecogStyleWrapper = styled.div`
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

const ModalRecogTitle = styled.div`
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

const ModalRecogHashtagWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 10.5px;
`;

const ModalBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 174px;
`;

const ModalCancelBtn = styled.button`
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

const ModalSubmitBtn = styled(ModalCancelBtn)`
  background-color: #c8b6ff;
  color: #ffffff;
  border: none;
`;

const Hashtag = styled(ModalHashtag)`
  width: 130px;
  height: 40px;
  cursor: default;

  font-size: 16px;
`;
