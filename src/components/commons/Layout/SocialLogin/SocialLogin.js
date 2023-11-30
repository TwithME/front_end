import styled from "@emotion/styled";
import Image from "next/image";


import { KAKAO_REDIRECT_URL } from "@/OAuth/kakao.js";

export default function SocialLogin() {
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=a3f0e3e7dc71d97efa34645ffbcfa72d&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;
  const onKaKaoHandler = async () => {
    try {
      window.location.href = KAKAO_AUTH_URI;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginWrapper>
      <Box>
        <Text>TwithMe 회원가입 / 로그인</Text>
      </Box>
      <Box>
        <SocialImg onClick={onKaKaoHandler}>
          <StyledImage
            src="/img/kakao.png"
            alt="kakao"
            width="600"
            height="90"
          />
        </SocialImg>
      </Box>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  white-space: nowrap;
  font-size: 30px;
`;

const LinkUp = styled.a`
  text-decoration: none;
  color: #c8b6ff;
`;

const Text = styled.span`
  color: #666666;
  margin: 0 20px;
  font-size: 25px;
  font-weight: Bold;
  letter-spacing: -1px;
  line-height: 250%;
`;

const Button = styled.button`
  border: 2.5px solid #c8b6ff;
  border-radius: 5px;
  background-color: white;
  color: #c8b6ff;

  padding: 7px 20px;
  margin: 0 20px;

  font-size: 18px;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    border: 2.5px solid #9d7dff;
  }
`;

const SocialImg = styled.div`
  margin: 0 50px;
  cursor: pointer;
`;

const StyledImage = styled(Image)`
`;
