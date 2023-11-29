import { useEffect, useState, useRef } from "react";
import * as S from "./Messengser.styles";
import Report from "@/components/commons/Modal/Report";
import Block from "@/components/commons/Modal/Block";

export default function Messenger(props) {
  const [input, setInput] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [nowChatRoomId, setNowChatRoomId] = useState(0);
  const [nowRecipientId, setNowRecipientId] = useState(0);
  const scrollRef = useRef(null);

  
  useEffect(() => {
    // scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
    
    if (nowChatRoomId !== 0 && scrollRef.current?.scrollHeight) {
      // scrollRef.current?.scrollTo(0, scrollRef.current?.scrollHeight);
      scrollRef.current.scrollTop = scrollRef.current?.scrollHeight;
      // scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [nowChatRoomId]);
  
  // 차단기능
  const [isOpenBlock, setIsOpenBlock] = useState(false);
  const toggleBlock = () => {
    setIsOpenBlock((prev) => !prev);
  };
  
  // 신고기능
  const [isOpenReport, setIsOpenReport] = useState(false);
  const toggleReport = () => {
    setIsOpenReport((prev) => !prev);
  };

  return (
    <>
      <S.MsgForm>
        <S.MsgListSection>
          <S.ListTitle onClick={toggleBlock}>쪽지 목록</S.ListTitle>
          {props.msgListData.map((e) => (
            <S.MsgList
              id={e.chatRoomId}
              type="button"
              onClick={() => {
                props.onClickMsgList(
                  e.chatRoomId,
                  e.name,
                  e.profileUrl,
                  e.recipientId
                );
                setNowChatRoomId(e.chatRoomId);
                setNowRecipientId(e.recipientId);
              }}
              selectedId={props.msgData.chatRoomId}
            >
              <S.Profile
                src={e.profileUrl || "/icon/defaultProfile.png"}
              ></S.Profile>
              <S.ID>{e.name}</S.ID>
            </S.MsgList>
          ))}
        </S.MsgListSection>

        {props.msgData.chatRoomId ? (
          <S.MsgSection>
            <S.TopWrapper>
              <S.UserWrapper>
                <S.Profile
                  src={props.msgData.profileUrl || "/icon/defaultProfile.png"}
                ></S.Profile>
                <S.ID>{props.msgData.name}</S.ID>
              </S.UserWrapper>
              <S.BlockWrapper>
                <S.BlockTxt onClick={toggleReport}>신고</S.BlockTxt>
                <S.BlockHypen />
                <S.BlockTxt onClick={toggleBlock}>차단</S.BlockTxt>
              </S.BlockWrapper>
            </S.TopWrapper>
            <S.ChatWrapper ref={scrollRef}>
              {props.msgData.chatContents.map((e, index) => {
                // 이전 메시지의 날짜와 현재 메시지의 날짜 비교
                const currentDate = e.sendTime.split("T")[0];
                const previousDate =
                  index > 0
                    ? props.msgData.chatContents[index - 1].sendTime.split(
                        "T"
                      )[0]
                    : "";

                // 날짜가 변경되었을 때에만 ChatDate 표시
                const showDate = currentDate !== previousDate;

                return (
                  <>
                    {showDate && (
                      <S.ChatDate>{e.sendTime.split("T")[0]}</S.ChatDate>
                    )}
                    <S.ChatBubbleWrapper isSend={e.sender}>
                      {e.sender ? (
                        <>
                          <S.ChatTime
                            show={isHovered && hoverIndex === index}
                          >{`${e.sendTime.split("T")[1].split(":")[0]}:${
                            e.sendTime.split("T")[1].split(":")[1]
                          }`}</S.ChatTime>
                          <S.ChatBubble
                            onMouseEnter={() => {
                              setIsHovered(true);
                              setHoverIndex(index);
                            }}
                            onMouseLeave={() => {
                              setIsHovered(false);
                              setHoverIndex(null);
                            }}
                          >
                            {e.content}
                          </S.ChatBubble>
                        </>
                      ) : (
                        <>
                          <S.ChatBubble
                            onMouseEnter={() => {
                              setIsHovered(true);
                              setHoverIndex(index);
                            }}
                            onMouseLeave={() => {
                              setIsHovered(false);
                              setHoverIndex(null);
                            }}
                          >
                            {e.content}
                          </S.ChatBubble>
                          <S.ChatTime
                            show={isHovered && hoverIndex === index}
                          >{`${e.sendTime.split("T")[1].split(":")[0]}:${
                            e.sendTime.split("T")[1].split(":")[1]
                          }`}</S.ChatTime>
                        </>
                      )}
                    </S.ChatBubbleWrapper>
                  </>
                );
              })}
            </S.ChatWrapper>
            <S.SendWrapper onSubmit={props.onSubmitSendMsg}>
              <S.SendInput
                name="message"
                autocomplete="off"
                onChange={(e) => setInput(e.target.value)}
              ></S.SendInput>
              <S.SendBtn sendOn={input.length > 0}>Send</S.SendBtn>
            </S.SendWrapper>
          </S.MsgSection>
        ) : (
          <S.MsgSection style={{ alignItems: "center" }}>
            <S.NoneSelectedImg src="/icon/dialogue.png" />
            <S.NoneSelectedTxt>쪽지 목록을 선택해주세요</S.NoneSelectedTxt>
          </S.MsgSection>
        )}
      </S.MsgForm>

      {/* ========== 모달 ========== */}
      {isOpenBlock && (
        <Block
          name={props.msgData.name}
          id={nowRecipientId}
          toggleBlock={toggleBlock}
        />
      )}
      {isOpenReport && (
        <Report
          name={props.msgData.name}
          id={nowRecipientId}
          toggleReport={toggleReport}
        />
      )}
    </>
  );
}
