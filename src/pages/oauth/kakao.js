import axios from "axios";
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
    if (code) {
      console.log(code);
      axios
        .post(
          // `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=a3f0e3e7dc71d97efa34645ffbcfa72d&redirect_uri=http://semtle.catholic.ac.kr:8081/oauth/kakao&code=${router.query.code}`,
          `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=a3f0e3e7dc71d97efa34645ffbcfa72d&redirect_uri=http://localhost:3000/oauth/kakao&code=${router.query.code}`,
          {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
          }
        )
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            axios.get(`http://semtle.catholic.ac.kr:8081/oauth/kakao?code=${router.query.code}`)
              .then((res) => {
                console.log("!");
                console.log(res);
                axios
                  .post(
                    "https://semtle.catholic.ac.kr:8081/user/login/kakao",
                    {
                      accessTokenFromSocial: res.data.id_token,
                    },
                    { "Content-Type": "application/json" }
                  )
                  .then((response2) => {
                    console.log(response2.data);
                    if (response2.status === 200) {
                      setIsLoggedIn(true);
                      setNickname(response2.data.data.nickname);
                      localStorage.setItem(
                        "login-token",
                        response2.data.data.accessToken
                      );
                      if (response2.data.data.needsAdditionalSignUp === true) {
                        router.push("/auth/join/signup");
                      }
                      router.push("/main");
                      setIsLoggedIn(true);
                    }
                  });
              })
              .catch((err) => console.log(err));
          }
        });
    }
  }, [code]);

  return <div></div>;
};

export default OAuthKaKao;
