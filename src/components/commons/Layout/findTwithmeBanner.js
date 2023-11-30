import { styled } from "styled-components";

export default function FindTwithmeBanner(props) {
  return (
    <>
      <Banner>
        <BannerContents>
          <BannerTitle>{props.title}</BannerTitle>
          {typeof props.subTitle === "string" ? (
            <BannerSubTitle>{props.subTitle}</BannerSubTitle>
          ) : (
            <>{props.subTitle.map((e, i) => (<BannerSubTitle idx={i} style={{ top : `calc(${i} * 45px + 246px)`}}>{e}</BannerSubTitle>))}</>
          )} 
        </BannerContents>
      </Banner>
    </>
  );
}

const Banner = styled.div`
  min-width: 1960px;
  height: 570px;
  background-image: url("img/bannerImg.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 150px;
`;

const BannerContents = styled.div`
  width: 1400px;
  height: 100%;
  position: relative;
`;

const BannerTitle = styled.div`
  position: absolute;
  top: 150px;
  font-weight: bold;
  font-size: 60px;
  display: flex;
  color: #000000;
`;

const BannerSubTitle = styled.div`
  position: absolute;
  top: 246px;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  color: #666666;
  `;

const BannerImg = styled.img`
  position: absolute;
  left: 720px;
`;
