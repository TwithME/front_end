import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { styled, keyframes } from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  FindCardFilter,
  LoginState,
  IsFirstLogin,
  logout,
  JwtTokenState,
  IsAdmin
} from "@/States/LoginState";
import TopBtn from "./TopBtn";

export default function NavBar(props) {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const setJwtToken = useSetRecoilState(JwtTokenState);
  const jwtInfo = useRecoilValue(JwtTokenState);
  const [findCardFilter, setFindCardFilter] = useRecoilState(FindCardFilter);
  const [isFirstLogin, setIsFirstLogin] = useRecoilState(IsFirstLogin);
  const [isAdmin, setIsAdmin] = useRecoilState(IsAdmin);
  const [infoMsg, setInfoMsg] = useState([]);
  const [infoMsgNum, setInfoMsgNum] = useState(-1);

  // 스크롤 이벤트
  const [isHidden, setIsHidden] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  let prevScrollPos = window.pageYOffset;

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingDown = currentScrollPos > prevScrollPos;

    prevScrollPos = currentScrollPos;
  };

  // 토큰이 만료되었을 경우
  function checkToken () {
    if(jwtInfo.expiryTime < new Date().getTime()){
      alert("토큰이 만료되었습니다. 로그인을 다시 진행하여 주세요.");
      router.push("/auth/signIn");
      logout({setJwtToken});
      setIsLoggedIn(false);
      return true;
    } else { return false; }
  };

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if(window.scrollY > 0){
        setIsHidden(false);
      } else{
        setIsHidden(true);
      }
    })
  }, []);

  const topScroll = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  useEffect(() => {
    if (isFirstLogin) {
      setInfoMsg([
        "여행동행자와 나눈 메세지를\n확인해보세요!",
        "내가 스크랩한 여행 동행자와\n여행 후기를 한눈에!",
        "마이프로필에서 정보 추가 시,\n나와 잘맞는 동행자와 매칭률도 UP!",
      ]);
      setInfoMsgNum(0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoggedIn]);

  const router = useRouter();

  const onLoginBtn = () => {
    router.push("/auth/signIn");
  };

  const onJoinBtn = () => {
    router.push("/auth/join");
  };

  const onMesseageBtn = () => {
    if(!checkToken()){
      router.push({
        pathname: "/auth/profile",
        query: {category: "message"}
      });
    }
  };

  const onLikeBtn = () => {
    if(!checkToken()){
      router.push({
        pathname: "/auth/profile",
        query: {category: "myCollections"}
      });
    }
  };

  const onProfileBtn = () => {
    if(!checkToken()) {
      router.push("/auth/profile");
    }
  };

  const onClickInfoMsgBtn = () => {
    if(!checkToken()){
      if (infoMsgNum < 2) {
        setInfoMsgNum((prev) => prev + 1);
      } else {
        setInfoMsgNum(-1);
        setIsFirstLogin(false);
        router.push("/auth/profile");
      }
    }
  };

  // prettier-ignore
  return (
    <>
      <Nav scrollY={scrollY}>
        <NavContainer>
          <Container>
            <HomeLogo 
                src="/assets/logo.png"
                alt="로고"
                onClick={() => {router.push("/"); setFindCardFilter({});}} />
          </Container>
          <PageList>
            <Item onClick={() => router.push("/addition/introduce")}>TwithMe 소개</Item>
            <Item onClick={() => {
              if(isLoggedIn) {
                if(!checkToken()) {
                  router.push("/findTwithme"); setFindCardFilter({});
                }
              } 
            }}>TwithME 찾기</Item>
            <Item onClick={() => {
              if(isLoggedIn) {
                if(!checkToken()){
                  router.push("/review")}}
                }
              } 
            >여행 후기</Item>
            <Item onClick={() => router.push("/addition/contact")}>Contact</Item>
            {isAdmin && <AdminItem onClick={() => router.push("/admin")}>관리자 페이지</AdminItem>}
          </PageList>

          {!isLoggedIn ? (
            <AuthList>
              <BeforeLoginItem>
                <SignInBtn onClick={onLoginBtn}>로그인</SignInBtn>
              </BeforeLoginItem>
              <BeforeLoginItem>
                <SignUpBtn onClick={onJoinBtn}>회원가입</SignUpBtn>
              </BeforeLoginItem>
            </AuthList>
          ) : (
            <AuthList>
              <AfterLoginItem id="3">
                <NicknameWrapper src="/icon/bell.png" />
              </AfterLoginItem>
              <AfterLoginItem id="0" infoMsgNum={infoMsgNum}>
                <NicknameWrapper
                  src="/icon/messenger.png"
                  onClick={onMesseageBtn}
                />
              </AfterLoginItem>
              <AfterLoginItem id="1" infoMsgNum={infoMsgNum}>
                <NicknameWrapper
                  src="/icon/heart_gray.png"
                  onClick={onLikeBtn}
                />
              </AfterLoginItem>
              <AfterLoginItem id="2" infoMsgNum={infoMsgNum}>
                <NicknameWrapper
                  src="/icon/profile.png"
                  onClick={onProfileBtn}
                />
              </AfterLoginItem>
              {isFirstLogin && (
                <InfoMsg>
                  <InfoMsgTxt>{infoMsg[infoMsgNum]}</InfoMsgTxt>
                  <InfoMsgBtn onClick={onClickInfoMsgBtn}>
                    {infoMsgNum == 2 ? "마이프로필 등록" : "다음"}
                  </InfoMsgBtn>
                </InfoMsg>
              )}
            </AuthList>
          )}
        </NavContainer>
      </Nav>
      <NavBottom />
      {props.children}
      <TopBtn isHidden={isHidden} onClick={() => topScroll()}/>
    </>
  );
}

const HomeLogo = styled.img`
  width: 140px;
  cursor: pointer;
`;

const NavBottom = styled.div`
  width: 100%;
  height: 110px;
`;

const Nav = styled.nav`
  height: 110px;
  background-color: #ffffff;
  padding: 30px 0;
  box-shadow: 0px 1px 10px #999;
  z-index: 100;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: transform 0.3s ease;

  &.hidden {
    transform: translateY(-120px);
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  margin: 0 auto;
`;

const PageList = styled.ul`
  display: flex;
  padding-left: 0;
  gap: 30px;
`;

const AuthList = styled(PageList)`
  gap: 0px;
  position: relative;
`;

const Item = styled.li`
  padding: 15px 20px;
  font-size: 18px;
  white-space: nowrap;
  margin: 0 0.5vw;
  font-weight: 600;
  color: 000;
  cursor: pointer;
  border-radius: 10px;
`;

const AdminItem = styled(Item)`
  background-color: #d3c5ff;
  color: #fff;
`;

const BeforeLoginItem = styled.li`
  margin-right: 1rem;
  white-space: nowrap;
  font-weight: bold;
`;

const AfterLoginItem = styled.li`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background-color: ${(props) =>
    props.id == props.infoMsgNum ? "rgba(255, 82, 81, 30%)" : "transparent"};

  border-radius: 50%;
`;

const Container = styled.div`
  padding-left: 0;
`;

const SignInBtn = styled.button`
  background-color: transparent;
  border-radius: 50px;
  border: 2px solid rgba(255, 82, 81, 0.3);

  color: rgba(255, 82, 81, 0.3);
  letter-spacing: -2px;

  font-size: 18px;

  padding: 0.7rem 1.5rem;
  cursor: pointer;
`;

const SignUpBtn = styled.button`
  background-color: rgba(255, 82, 81, 0.5);
  color: white;
  border-radius: 50px;
  border: 2px solid rgba(255, 82, 81, 0.5);
  color: white;
  letter-spacing: -2px;

  font-size: 18px;
  padding: 0.7rem 1.5rem;
  cursor: pointer;
`;

const NicknameWrapper = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const InfoMsg = styled.div`
  width: 320px;
  height: 120px;
  border: 1px solid #FF5251;
  border-radius: 15px;
  background-color: #ffffff;
  position: absolute;
  top: 60px;
  left: -70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InfoMsgTxt = styled.div`
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
  color: #666666;
  white-space: pre-line;
`;

const InfoMsgBtn = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  background-color: #FF5251;
  color: #ffffff;
  text-align: center;
  border-radius: 10px;
`;
