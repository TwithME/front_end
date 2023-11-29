import { useEffect, useState } from "react";

import * as S from "./MyCollections.styles";
import Modal from "../../../../commons/Modal/Modal";
import axios from "axios";
import FindCard from "@/components/commons/Card/MyCollections/FindCard";
import FindListCard from "@/components/commons/Card/MyCollections/FindListCard";
import ReviewCard from "@/components/commons/Card/MyCollections/ReviewCard";
import ApplyCard from "@/components/commons/Card/MyCollections/ApplyCard";

export default function MyCollections(props) {

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [sortCategory, setSortCategory] = useState(0);

  useEffect( () => {
    props.onOpenMyCollection();
  }, [])

  useEffect(() => {
    if(props.likeData){
    }
    if(props.reviewData){
    }
    if(props.applyData){
    }
  }, [props])
  return (
  <>
    <S.MyCollectionsWrapper>
      <S.CollectionTitleWrapper>
        <S.CollectionTitle>My Collections</S.CollectionTitle>
      </S.CollectionTitleWrapper>

      <S.CollectionWrapper>
        <S.CollectionContentTitleWrapper>
          <S.CollectionContentTitleLeftWrapper>
            <S.CollectionContentIcon src="/icon/purpleSearch.png"></S.CollectionContentIcon>
            <S.CollectionContentTitle selected={selectedCategory === 2} onClick={(e) => setSelectedCategory(2)}>내가 신청한 Trip'yler</S.CollectionContentTitle>
            <S.CollectionContentLine></S.CollectionContentLine>
            <S.CollectionContentTitle selected={selectedCategory === 0} onClick={(e) => setSelectedCategory(0)}>찜한 Trip'yler 게시물</S.CollectionContentTitle>
            <S.CollectionContentLine></S.CollectionContentLine>
            <S.CollectionContentTitle selected={selectedCategory === 1} onClick={(e) => setSelectedCategory(1)}>찜한 여행 후기</S.CollectionContentTitle>
          </S.CollectionContentTitleLeftWrapper>
          {selectedCategory === 0 && (
          <S.CollectionContentTitleRightWrapper>
            <S.CollectionContentCategoryIcon src="/icon/sortingComponent.png" onClick={(e) => setSortCategory(0)}></S.CollectionContentCategoryIcon>
            <S.CollectionContentCategoryIcon src="/icon/sortingList.png" onClick={(e) => setSortCategory(1)}></S.CollectionContentCategoryIcon>
          </S.CollectionContentTitleRightWrapper>
          )}
        </S.CollectionContentTitleWrapper>
          
        {selectedCategory === 0 ? (
          sortCategory === 0 ? (
            <S.CollectionContent>
              {props.likeData.map((element, idx) => (<S.CollectionFindCard key={idx} data={element}/>))}
            </S.CollectionContent>
          ) : (
            <S.CollectionContent>
              {props.likeData.map((element, idx) => (<FindListCard key={idx} data={element}/>))}
            </S.CollectionContent>
          )
        ) : selectedCategory === 1 ? (
          <S.CollectionContent>
            {props.reviewData.map((element, idx) => (<ReviewCard key={idx} data={element}/>))}
          </S.CollectionContent>
        ) : (
          <S.CollectionContent>
            {props.applyData.map((element, idx) => (<ApplyCard key={idx} data={element}/>))}
          </S.CollectionContent>
        )}
      </S.CollectionWrapper>
    </S.MyCollectionsWrapper>
  </>
  );
}
