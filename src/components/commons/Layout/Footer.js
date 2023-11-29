import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function Footer() {
  const router = useRouter();

  return (
    <>
      <FooterTop />
      <Foot>
        <Container>
          <Section>
            <Title>About Us</Title>
            <Content>
              Trip’yle는 여행자들에게 좀 더 색다른 여행 스타일을 <br />
              제공해주는 ‘여행 동행자 매칭 플랫폼’입니다. <br />
              Trip’yle에서 본인과 잘 맞는 여행 동행자들을 찾아 보고 <br />
              각자의 여행 후기를 공유하며 소통해보세요.
            </Content>
          </Section>
          <Section>
            <Title>Menu</Title>
            <MenuWrapper>
              <Menu onClick={() => router.push("/main")}>Trip’yle 소개</Menu>
              <Menu onClick={() => router.push("/findTripyler")}>
                Trip’yler 찾기
              </Menu>
              <Menu onClick={() => router.push("/review")}>여행 후기</Menu>
              <Menu onClick={() => router.push("/main")}>Contact</Menu>
            </MenuWrapper>
          </Section>
          <Section>
            <Title>Information</Title>
            <ItemWrapper>
              <Item>
                <ItemImg src="/icon/phone.svg" />
                <ItemTxt>02-1234-1234</ItemTxt>
              </Item>
              <Item>
                <ItemImg src="/icon/email.svg" />
                <ItemTxt>Tripyler@naver.com</ItemTxt>
              </Item>
              <Item>
                <SnsImg src="/icon/insta.svg" />
                <SnsImg src="/icon/youtube.svg" />
                <SnsImg src="/icon/blog.svg" />
              </Item>
            </ItemWrapper>
          </Section>
        </Container>
      </Foot>
    </>
  );
}

const FooterTop = styled.div`
  height: 200px;
`;

const Foot = styled.div`
  width: 100%;
  height: 500px;
  background-color: rgba(167, 167, 167, 0.6);
  padding-top: 110px;
`;

const Container = styled.div`
  width: 1400px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  color: #fff;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 70px;
`;

const Content = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 35px;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Menu = styled(Content)`
  line-height: 0;
  cursor: pointer;
`;

const ItemWrapper = styled(MenuWrapper)`
  gap: 30px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

const ItemTxt = styled.div`
  width: 180px;
  font-size: 18px;
  font-weight: 500;
`;

const SnsImg = styled.img`
  cursor: pointer;
`;
