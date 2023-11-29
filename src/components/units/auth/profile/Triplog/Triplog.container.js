import { useEffect, useState } from "react";

import * as S from "./Triplog.styles";
import Modal from "../../../../commons/Modal/Modal";
import axios from "axios";
import FindCard from "@/components/commons/Card/Triplog/FindCard";
import ReviewCard from "@/components/commons/Card/Triplog/ReviewCard"

export default function Triplog(props) {

  const [year, setYear] = useState(2023);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect( () => {
    props.onOpenTriplog(year);
  }, [year]);

  
  return (<>
  <S.MyCollectionsWrapper>
  <S.CollectionTitleWrapper>
    <S.CollectionTitle>Triplog</S.CollectionTitle>
  </S.CollectionTitleWrapper>

  <S.CollectionWrapper>
    <S.CollectionContentTitleWrapper>
      <S.CollectionContentTitleLeftWrapper>
        <S.CollectionContentIcon src="/icon/purpleSearch.png"></S.CollectionContentIcon>
        <S.CollectionContentTitle selected={selectedCategory === 0} onClick={(e) => {setSelectedCategory(0); setYear(2023);}}>My Trip'yler들</S.CollectionContentTitle>
        <S.CollectionContentLine></S.CollectionContentLine>
        <S.CollectionContentTitle selected={selectedCategory === 1} onClick={(e) => {setSelectedCategory(1); setYear(2023);}}>My 여행 후기</S.CollectionContentTitle>
      </S.CollectionContentTitleLeftWrapper>
      <S.CollectionContentTitleRightWrapper>
        <S.CollectionContentYearIcon src="/icon/triplogLeftArrow.png" onClick={(e) => setYear((prev) => prev - 1)}></S.CollectionContentYearIcon>
        <S.CollectionContentYear>{year}</S.CollectionContentYear>
        <S.CollectionContentYearIcon src="/icon/triplogRightArrow.png" onClick={(prev) => setYear((prev) => prev + 1)}></S.CollectionContentYearIcon>
      </S.CollectionContentTitleRightWrapper>
    </S.CollectionContentTitleWrapper>
    {selectedCategory === 0 ? (
      <S.CollectionContent>
        {props.TripylersData.map((e, i) => (<FindCard id={e.tripylerId} info={e}/>))}
      </S.CollectionContent>
    ) : (
      <S.CollectionContent>
        {props.reviewData.map((e, i) => (<ReviewCard id={e.tripylerId} info={e}/>))}
        
      </S.CollectionContent>
    )}
  </S.CollectionWrapper>
</S.MyCollectionsWrapper>
</>);
}
