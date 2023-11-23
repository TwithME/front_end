import { useRouter } from "next/router";
import { useEffect } from "react";

import { useSetRecoilState } from "recoil";

import { LoginState, NicknameState } from "@/States/LoginState";

const OAuthKaKao = () => {
  // 로그인 상태 설정
  const setIsLoggedIn = useSetRecoilState(LoginState);
  const setNickname = useSetRecoilState(NicknameState);

  const router = useRouter();
  console.log(router);
  const code = router.query.code;

  useEffect(() => {
    
  }, [code]);

  return <div></div>;
};

export default OAuthKaKao;
