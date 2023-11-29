import FindTripylerBanner from "@/components/commons/Layout/findTripylerBanner";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as S from "./applyList.style";

export default function FindTripylerApplyList() {
  const router = useRouter();
  const apiPath = "http://semtle.catholic.ac.kr:8081";
  const [applyList, setApplyList] = useState([]);

  const fetchList = async () => {
    await axios
      .get(apiPath + "/tripyler/apply")
      .then((res) => {
        setApplyList([...res.data.data]);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] =
      window.localStorage.getItem("login-token");
    fetchList();
  }, []);

  return (
    <>
      <FindTripylerBanner
        title="Trip'yler 신청내역"
        subTitle="Trip’yle에서 나에게 동행신청을 보낸 Trip’yler들을 만나보세요."
      />
      <S.Title>Trip’yler 신청 확인하기</S.Title>
      <S.PageInfo>
        <S.PageInfoTxt>
          본인이 올린 여행자 찾기 게시물을 보고 신청폼을 작성한 Trip’yler들을
          모아둔 페이지입니다.
        </S.PageInfoTxt>
        <S.PageInfoTxt>
          Trip’yler들이 보낸 신청폼을 읽고 원하는 스타일의 Trip’yler에게 쪽지를
          보내보세요!
        </S.PageInfoTxt>
      </S.PageInfo>
      <S.ApplyListSection>
        <S.ListInfo>
          총 3명의 Trip’yler들이 일타님의 쪽지를 기다리고 있어요!
        </S.ListInfo>
        <S.ApplyListWrapper>
          <S.ApplyList>
            <S.UserImgWrapper>
              <S.UserImg src="/icon/defaultProfile.png" />
            </S.UserImgWrapper>
            <S.UserTxtWrapper>
              <S.UserID>ilta0101</S.UserID>
              <S.UserInfo>20대 초반 여성</S.UserInfo>
            </S.UserTxtWrapper>
          </S.ApplyList>
          <S.ApplyList>
            <S.UserImgWrapper>
              <S.UserImg src="/icon/defaultProfile.png" />
            </S.UserImgWrapper>
            <S.UserTxtWrapper>
              <S.UserID>ilta0101</S.UserID>
              <S.UserInfo>20대 초반 여성</S.UserInfo>
            </S.UserTxtWrapper>
          </S.ApplyList>
          <S.ApplyList>
            <S.UserImgWrapper>
              <S.UserImg src="/icon/defaultProfile.png" />
            </S.UserImgWrapper>
            <S.UserTxtWrapper>
              <S.UserID>ilta0101</S.UserID>
              <S.UserInfo>20대 초반 여성</S.UserInfo>
            </S.UserTxtWrapper>
          </S.ApplyList>
        </S.ApplyListWrapper>
      </S.ApplyListSection>
    </>
  );
}
