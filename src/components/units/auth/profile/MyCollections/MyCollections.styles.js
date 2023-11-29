import FindCard from "@/components/commons/Card/MyCollections/FindCard";
import styled from "@emotion/styled";

export const MyCollectionsWrapper = styled.div`
  width: 1105px;
  min-height: 960px;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
`;

export const CollectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 1000px;
  margin-top: 40px;
  margin-bottom: 15px;
`;

export const CollectionTitle = styled.h1`
  font-size: 36px;
  color: #c8b6ff;
  margin-bottom: 30px;
  margin-right: 30px;
`;


export const CollectionWrapper = styled.div`
    display: flex;
    flex-direction: column;

    border: 2.5px solid #c8b6ff;
    border-radius: 15px;
    background-color: white;

    height: 800px;
    width: 1000px;

    font-size: 20px;s
`;

export const CollectionContentTitleWrapper = styled.div`
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid #C8B6FF;
`;

export const CollectionContentTitleLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;


  height: 80px;
`;

export const CollectionContentTitleRightWrapper = styled.div`

`;

export const CollectionContentIcon = styled.img`
  width: 26px;
  height: 26px;
  margin-left: 20px;
`;

export const CollectionContentCategoryIcon = styled(CollectionContentIcon)`
  width: 36px;
  height: 25px;
  margin-top: 0;
  margin-right: 30px;
  margin-left: 0;
  cursor: pointer;
`;

export const CollectionContentTitle = styled.div`
  height: 100%;
  width: 255px;
  color: #C8B6FF;
  justify-content: center;
  margin-top: 18px;

  padding: 12px;
  cursor: pointer;
  font-weight: bold;

  font-size: ${(props) => 
    props.selected === true ? "24px" : "20px"
  };

  color: ${(props) => 
    props.selected === true ? "#C8B6FF" : "#D9D9D9"
  };
`;

export const CollectionContentLine = styled.div`
  height: 30px;
  width: 2px;
  background-color: #C8B6FF;
`;

export const CollectionContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;

  justify-content: center;
  padding: 20px;

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

export const CollectionFindCard = styled(FindCard)`
  width: 266px;
  height: 280px;
`;

export const CollectionContentListWrapper = styled.div`
  width: 880px;
  height: 80px;
  box-shadow: 0px 10px 30px 10px rgba(102, 102, 102, 0.12);

  margin-top: 30px;
`;