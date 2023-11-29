import styled from "@emotion/styled";
// import FindCard from "../../commons/FindCard/FindCard;"

export const Banner = styled.div`
  background-color: #ffffff;
  margin: auto;
  margin-bottom: 30px;
  /* background-image: url("img/bannerImg.png"); */

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerImgWrapper = styled.div`
  height: 500px;
  width: 1920px;
  background-image: url("img/bannerImg.png");

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BannerTitle = styled.div`
  margin-bottom: 25px;
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 1;
  color: white;
`;

export const TitleTxt = styled.span``;

export const BannerTxt = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 1;
  color: #ffffff;
`;

export const FindFilter = styled.div`
  width: 1400px;
  height: 286px;

  padding-left: 95px;
  padding-right: 20px;
  background: #ffffff;
  box-shadow: 0px 10px 30px 10px rgba(102, 102, 102, 0.12);
  position: absolute;
  top: 430px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FindFilterClose = styled.div`
  width: 1400px;
  height: 160px;

  padding-left: 95px;
  padding-right: 20px;
  padding-top: 20px;
  background: #ffffff;
  box-shadow: 0px 10px 30px 10px rgba(102, 102, 102, 0.12);
  position: absolute;
  top: 430px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FilterWrapper = styled.div`
  margin: 0 20px;
`;

export const FilterMainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1220px;
`;

export const FilterMiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterFrontWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FilterBackWrapper = styled.div`
  margin-bottom: 35px;
`;

export const FilterTitleWrapper = styled.div`
  display: flex;
  margin-bottom: 13px;
`;

export const Filter = styled.div`
  height: 50px;
  padding: 15px 20px;
  background: #f2efef;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const FilterSelect = styled.div`
  width: 140px;
  height: 50px;
  padding: 15px 20px;
  background: #f2efef;
  border-radius: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  border: none;
  color: #666666;
`;

export const FilterMinusImg = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const FilterNum = styled.div``;

export const FilterPlusImg = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
export const FilterTitleImg = styled.img`
  margin-right: 5px;
`;

export const FilterTitleTxt = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  color: #333333;
`;

export const Input = styled.input`
  height: 50px;
  width: 925px;
  padding: 15px 20px;
  background: #f2efef;
  border-radius: 20px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

export const FilterInput = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #666666;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const FilterBtn = styled.div`
  width: 12px;
  height: 9px;
  background-image: url("icon/listArrow.png");
`;

export const DateFilterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DateLine = styled.div`
  width: 12px;
  height: 2px;
  background-color: #666666;
  margin: 0px 7px;
`;

export const FilterFindBtn = styled.button`
  width: 160px;
  height: 60px;
  background: #b388eb;
  border-radius: 50px;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterFindBtnTxt = styled.div`
  margin-right: 4px;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
`;

export const FilterCloseIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 200px;
  cursor: pointer;
`;

export const FilterOpenIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 80px;
  cursor: pointer;
`;

// 여행지 선택
export const CountrySelectWrapper = styled.div`
  width: 300px;
  height: 280px;
  background-color: #ffffff;
  box-shadow: 0px 5px 20px 3px rgba(153, 153, 153, 0.25);

  display: flex;
  flex-direction: row;
  justify-content: center;

  position: absolute;
  top: 245px;
  left: 100px;
`;

export const ContinentSelect = styled.div`
  width: 100px;
  border-right: 0.5px solid rgba(214, 214, 214, 0.5);
`;

export const ContinentContent = styled.div`
  width: 100%;
  height: 40px;
  cursor: pointer;
  font-size: 15px;
  padding: 8px;

  &:hover {
    background-color: #f2efef;
  }

  background-color: ${(props) => (props.selected ? "#D4D4D4" : "ffffff")};
`;

export const CountrySelect = styled.div`
  width: 100px;
  border-right: 0.5px solid rgba(214, 214, 214, 0.5);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px; /* 스크롤바 너비 설정 */
  }

  &:hover::-webkit-scrollbar {
    opacity: 1;
    transition: opacity 0.7s ease-in-out;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: #999999;
    border-radius: 4px;
    transition: opacity 0.3s ease-in-out;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 4px;
  }
`;

export const CitySelect = styled.div`
  width: 100px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px; /* 스크롤바 너비 설정 */
  }

  &:hover::-webkit-scrollbar {
    opacity: 1;
    transition: opacity 0.7s ease-in-out;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: #999999;
    border-radius: 4px;
    transition: opacity 0.3s ease-in-out;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 4px;
  }
`;

// 달력
export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  position: absolute;
  z-index: 101;
  top: 128px;
  left: 480px;
`;

export const MonthSelectWrapper = styled.div`
  width: 120px;
  height: 280px;
  background-color: #ffffff;
  box-shadow: 0px 5px 20px 3px rgba(153, 153, 153, 0.25);

  display: flex;
  flex-direction: row;
  justify-content: center;

  position: absolute;
  top: 120px;
  left: -8px;
`;

export const EndMonthSelectWrapper = styled(MonthSelectWrapper)`
  left: 215px;
`;

export const MonthSelect = styled.div`
  width: 100%;
  text-align: center;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px; /* 스크롤바 너비 설정 */
  }

  &:hover::-webkit-scrollbar {
    opacity: 1;
    transition: opacity 0.7s ease-in-out;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: #999999;
    border-radius: 4px;
    transition: opacity 0.3s ease-in-out;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 4px;
  }
`;

export const MonthContent = styled.div`
  width: 100%;
  height: 40px;
  cursor: pointer;
  font-size: 15px;
  padding: 8px 0px;

  &:hover {
    background-color: #f2efef;
  }

  /*background-color: ${(props) =>
    props.disabledColor ? "#BFBFBF" : "#ffffff"}*/

  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

// 카드 컴포넌트

export const BtnArrow = styled.img``;

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1440px;
`;

export const FindBoardContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* margin-left: 20px; */
`;

export const FindBoardNoContent = styled(FindBoardContent)`
  height: 200px;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 500px 0;
`;

export const NoContent = styled.div`
  font-size: 40px;
`;

export const ContentWrapper = styled.div`
  align-items: center;
  justify-content: center;
`;

export const FindBoardTitle = styled.div`
  width: 1260px;
  height: 64px;

  display: flex;
  flex-direction: row;

  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #ffffff;
  margin: 60px 0;
  padding: 10px 0 10px 40px;
  border-radius: 10px;
  background-color: rgba(0, 180, 216, 0.6);
  align-items: center;
  justify-content: space-between;
`;

export const FindBoardWriteBtn = styled.div`
  background-color: #ffffff;
  color: #66d2e8;
  margin-right: 15px;
  border-radius: 50px;
  font-size: 18px;
  padding: 8px 20px;
  cursor: pointer;
`;

export const FindBoardTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

export const FindBoardFilterTwo = styled.select`
  border: 2px solid #00b4d8;
  border-radius: 20px;
  width: 111px;
  height: 50px;
  margin-left: 20px;
  text-align: center;
  font-size: 15px;
  color: #00b4d8;
  cursor: pointer;

  &:focus {
    border: 2px solid #00b4d8;
  }
`;

export const PageNationWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;

  margin: 70px 0;
`;

export const PageTxt = styled.div`
  font-size: 25px;
  margin: 0 10px;
  cursor: pointer;

  color: ${(props) => (props.selected ? "#000000" : "rgba(0, 0, 0, 0.3)")};
`;

export const ArrowImg = styled.img`
  height: 25px;
  width: 15px;
  margin: 0 20px;
  margin-top: 7px;
  cursor: pointer;
`;

export const AdWrapper = styled.div`
  text-align: center;
  margin: 150px auto;
`;

export const AdImg = styled.img`
  height: 410px;
  width: 1920px;
`;
