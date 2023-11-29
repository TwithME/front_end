import styled from "@emotion/styled";
import { css } from "styled-components";
// import FindCard from "../../commons/FindCard/FindCard;"

export const Banner = styled.div`
  background-color: #ffffff;
  margin: 0 auto;
  width: 1400px;
  min-width: 1960px;
  margin-bottom: 100px;
  /* background-image: url("img/bannerImg.png"); */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FindFilter = styled.div`
  width: 944px;
  height: 289px;

  // padding: 0px auto;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 10px 30px 10px rgba(102, 102, 102, 0.12);
  position: absolute;
  top: 270px;
  // left: 450px;
  margin: 0 auto;
  margin-left: 450px;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterWrapper = styled.div`
  margin: 0 10px;
`;

export const FilterMainWrapper = styled.div`

  width: 1220px;
  margin: 0 auto;
`;

export const FilterMiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterFrontWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`

export const FilterBackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 35px auto 0 auto;
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

export const FilterNum = styled.div`

`;

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
  width: 725px;
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
  width: 138px;
  height: 50px;
  background: rgba(154, 179, 245, 0.8);
  border-radius: 20px;
  margin: 34px 0 0 10px;

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
  z-index: 101;
  top: 128px;
  left: 100px;
`

export const ContinentSelect = styled.div`
  width: 100px;
  border-right: 0.5px solid rgba(214,214,214,0.5);

`

export const ContinentContent = styled.div`
  width: 100%;
  height: 40px;
  cursor: pointer;
  font-size: 15px;
  padding: 8px;

  &:hover{
    background-color: #f2efef;
  }

  background-color: ${(props) => 
    props.selected ? "#D4D4D4" : "ffffff"
  };
`

export const CountrySelect = styled.div`
  width: 100px;
  border-right: 0.5px solid rgba(214,214,214,0.5);
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

  
  position: relative;
  z-index: 101;
  bottom: 0px;
  right: 0px;
  
  `;

// 카드 컴포넌트 

export const BtnArrow = styled.img``;

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1440px;
`;

export const FindTwithmeContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 20px;
  gap: 70px;
`;

export const FindTwithmeNoContent = styled(FindTwithmeContent)`
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

  margin-bottom: 100px;
`;

export const FindBoardTitle = styled.div`
  min-width: 1400px;
  max-width: 1960px;
  height: 64px;

  display: flex;
  flex-direction: row;

  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color: #9AB3F5;
  margin: 30px 0;
  padding: 10px 0 10px 0;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #9AB3F5;
`;

export const FindBoardWriteBtn = styled.div`
  background-color: #ffffff;
  color: #66D2E8;
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
`

export const FindBoardFilterOne = styled.select`
  border: 2px solid #00B4D8;
  border-radius: 20px;
  width: 111px;
  height: 50px;
  margin-left: 20px;
  text-align: center;
  font-size: 15px;
  color: #00B4D8;
  cursor: pointer;

  &:focus{
    border: 2px solid #00B4D8;
  }
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const FindTripylerOptionOne = styled.option`
  border: 2px solid #00B4D8;
  border-radius: 20px;
  width: 111px;
  height: 50px;
  text-align: center;
  padding: 13px 5px;
  font-size: 16px;
`;

export const FindTripylerFilterTwo = styled.select`
  border: 2px solid #00B4D8;
  border-radius: 20px;
  width: 111px;
  height: 50px;
  margin-left: 20px;
  text-align: center;
  font-size: 15px;
  color: #00B4D8;
  cursor: pointer;

  &:focus{
    border: 2px solid #00B4D8;;
  }

  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1400px;
  max-width: 1960px;
  margin: 10px auto 40px auto;
`;

export const FilterCategoryBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const FilterCategory = styled.div`
  width: 111px;
  height: 39px;
  line-height: 39px;
  text-align: center;
  border-radius: 20px;
  color: #9AB3F5;
  border: 2px solid #9AB3F5;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  ${(props) =>
    props.selected && css`
      background-color: #9AB3F5;
      color: #fff;
    `
  };
`;

export const FilterRecruitBox = styled.div`
`;

export const FilterRecruit = styled.div`
  width: 100px;
  height: 39px;
  line-height: 39px;
  text-align: center;
  color: #9AB3F5;
  border-radius: 5px;
  border: 2px solid #9AB3F5;
  background-color: #fff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  position: relative;
`;

export const FilterRecruitModalBox = styled.div`
  z-index: 100;
  position: absolute;

  border-radius: 5px;
  border: 2px solid #9AB3F5;
  width: 100px;
`;

export const FilterRecruitModal = styled.div`
  text-align: center;
  width: 100%;
  height: 39px;
  line-height: 39px;
  text-align: center;
  color: #9AB3F5;
  background-color: #fff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;

export const FilterRecruitLine = styled.div`
  background-color: #9AB3F5;
  height: 2px;
  // width: 90%;
`;

export const PageNationWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;

  margin: 70px 0 200px 0;
`;

export const PageTxt = styled.div`
  font-size: 25px;
  margin: 0 10px;
  cursor: pointer;

  color: ${(props) => 
    props.selected ? '#000000' : 'rgba(0, 0, 0, 0.3)'
  }

`;

export const ArrowImg = styled.img`
  height: 25px;
  width: 15px;
  margin: 0 20px;
  margin-top: 7px;
  cursor: pointer;
`;

export const DoubleArrowImg = styled(ArrowImg)`
  margin: 0 10px;
  margin-top: 7px;
  width: 25px;
`;

export const AdWrapper = styled.div`
  text-align: center;
  margin: 150px auto;
`;

export const AdImg = styled.img`
  height: 410px;
  width: 1920px;
`;