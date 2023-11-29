import { useRouter } from "next/router";
import styled from "styled-components";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <Container>
      <Contents>
        <TxtWrapper>
          <Title>404</Title>
          <SubTitle>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</SubTitle>
          <Txt>
            원하시는 결과를 찾을 수 없습니다.
            <br />
            올바른 URL을 입력하였는지 확인하세요
          </Txt>
          <BtnWrapper>
            <Btn onClick={() => router.back()}>이전으로</Btn>
            <Btn
              onClick={() => router.push("/")}
              style={{
                color: "#7CD4FF",
                backgroundColor: "#fff",
                border: "1px solid #7CD4FF",
              }}
            >
              메인으로
            </Btn>
          </BtnWrapper>
        </TxtWrapper>
        <img src="/img/404page.png" style={{ width: "500px" }} />
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;
`;

const TxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #3aaaee;
`;

const SubTitle = styled.div`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Txt = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  margin-bottom: 3.5rem;
  color: #666;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const Btn = styled.button`
  padding: 1rem 3.5rem;
  background-color: #7cd4ff;
  border-radius: 30px;

  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: white;
`;
