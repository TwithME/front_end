import axios from "axios";
import { useState } from "react";
import Alert from "./Alert";
import Confirm from "./Confirm";

// 필수 props: name(제목에 나올 이름), id(차단유저 아이디), toggleBlock
export default function Block(props) {
  const [isOpneBlock, setIsOpenBlock] = useState(true);
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const confirmTitle = `${props.name}님을 차단하시겠습니까?`;
  const alertTitle = `${props.name}님이 차단되었습니다.`;

  const onClickSubmit = async () => {
    await axios
      .post(`http://semtle.catholic.ac.kr:8081/block`, {
        blockeeId: props.id,
      })
      .then((res) => {
        console.log(res);
        setIsOpenBlock((prev) => !prev);
        setIsOpenAlert((prev) => !prev);
      })
      .catch((err) => console.error(err));
  };

  const onClickCancel = () => {
    setIsOpenBlock((prev) => !prev);
    props.toggleBlock();
  };

  const toggleAlert = () => {
    setIsOpenAlert((prev) => !prev);
    props.toggleBlock();
  };

  return (
    <>
      {isOpneBlock && (
        <Confirm
          title={confirmTitle}
          onClickSubmit={onClickSubmit}
          onClickCancel={onClickCancel}
        />
      )}
      {isOpenAlert && <Alert title={alertTitle} toggleAlert={toggleAlert} />}
    </>
  );
}
