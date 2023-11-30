import { use, useEffect, useState } from "react";

import * as S from "./NotMyProfile.styles";
import Modal from "../../../../commons/Modal/Modal";
import axios from "axios";

export default function NotMyProfile(props) {
    const lock = "비공개";
  const formatPhone = (phoneNum) => {
    const regex = /^(\d{3})(\d{4})(\d{4})$/;
    return phoneNum?.replace(regex, "$1-$2-$3");
  };

    // const [myHashtag, setMyHashtag] = useState([props.data.firstTripStyle, props.data.secondTripStyle, props.data.thirdTripStyle])
    const myHashtag = [props.data.firstTripStyle, props.data.secondTripStyle, props.data.thirdTripStyle]
    useEffect(() => {console.log(myHashtag)}, [myHashtag]);
  return (
    <>
    
      <S.MyProfileWrapper>
        <S.StyleTitleWrapper>
          <S.StyleTitle>Style</S.StyleTitle>
          {myHashtag.map((e) => (
          e && 
          (<S.StyleHashTag>#{e}</S.StyleHashTag>))
        )}
        </S.StyleTitleWrapper>
        

        <S.StyleWrapper>
        <S.StyleContent>
          {(!props.data.firstBio && !props.data.secondBio && !props.data.thirdBio) 
            &&
          (
            <S.BioNoneWrapper>
              <S.StyleNoneBioImg src="/icon/text.png"/>
              <S.StyleBio>소개를 입력하지 않았습니다</S.StyleBio>
            </S.BioNoneWrapper>
          )}

          {props.data.firstBio &&
          (<S.BioWrapper>
            <S.StyleBioImg src="/icon/check.png"/>
            <S.StyleBio>
              함께 <S.BioBold>{props.data.firstBio}</S.BioBold> 여행을 떠나려고 해요.
            </S.StyleBio>
          </S.BioWrapper>)}

          {props.data.secondBio &&
          (<S.BioWrapper>
            <S.StyleBioImg src="/icon/check.png"/>
            <S.StyleBio>
              저는 <S.BioBold>{props.data.secondBio}</S.BioBold> 여행자에요.
            </S.StyleBio>
          </S.BioWrapper>)}

          {props.data.thirdBio &&
          (<S.BioWrapper>
            <S.StyleBioImg src="/icon/check.png"/>
            <S.StyleBio>{props.data.thirdBio}</S.StyleBio>
          </S.BioWrapper>)}
        </S.StyleContent> 
        </S.StyleWrapper>
  
        <S.Title>Profile</S.Title>
        <S.TableWrapper>
          <S.Table>
            <tr>
              <S.Tc>이름</S.Tc>
              <S.Td>
                <S.TdWrapper>
                  <S.TdTxt>{props.data.name === null ? "비공개" : props.data.name}</S.TdTxt>
                </S.TdWrapper>
              </S.Td>
              <S.Tc>MBTI</S.Tc>
              <S.Td>
                <S.TdWrapper>
                  <S.TdTxt>{props.data.mbti === null ? "비공개" : props.data.mbti}</S.TdTxt>
                  
                </S.TdWrapper>
              </S.Td>
            </tr>
            <tr>
              <S.Tc>나이</S.Tc>
              <S.Td>
                <S.TdWrapper>
                  <S.TdTxt>{props.data.age}</S.TdTxt>
                </S.TdWrapper>
              </S.Td>
              <S.Tc>Insta</S.Tc>
              <S.Td>
                <S.TdWrapper>
                  <S.TdTxt>
                    <a href="https://www.instagram.com/" style={{'font-weight': 'bold'}}>
                        {props.data.instagram === null ? "비공개" : `${props.data.instagram}`}
                    </a>
                  </S.TdTxt>
                  
                </S.TdWrapper>
              </S.Td>
            </tr>
            <tr>
              
              <S.Tc>성별</S.Tc>
              {props.data.gender === 'M'
              ?
              <S.Td>
                <S.TdWrapper>
                  <S.TdTxt>남</S.TdTxt>
                </S.TdWrapper>
              </S.Td>
              :
              <S.Td>
                <S.TdWrapper>
                  <S.TdTxt>여</S.TdTxt>
                </S.TdWrapper>
              </S.Td>
              }
              <S.Tc>연락처</S.Tc>
              <S.Td>
                <S.TdWrapper>
                  <S.TdTxt>{props.data.phone === null ? "비공개" : formatPhone(props.data.phone)}</S.TdTxt>
                </S.TdWrapper>
              </S.Td>
            </tr>
  
          </S.Table>
        </S.TableWrapper>
      </S.MyProfileWrapper>
      
    </>
  );
}