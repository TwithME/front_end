import { useEffect, useState } from "react";
import * as S from "./introduce.styles";


export default function IntroduceTwithme() {
    const [scr, setScr] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            setScr(window.scrollY);

        });
        return () => {
            window.removeEventListener('scroll', (e) => {})
        }
    }, []);
    
    return(
        <S.IntroduceWrapper>
            <S.IntroduceContainer>
                <S.TitleWrapper>
                    <S.PurpleBubbleWrapper>
                        <img src="/introduce/purpleBubble.png" alt="purpleBubble"/>
                    </S.PurpleBubbleWrapper>
                    <S.TitleBox>
                        <S.TitleFirstTxt><img src="/assets/logo.png" width='163px' height='68px'/><span style={{'color': '#A7A7A7', 'font-size': '32px', 'font-weight': 'bold', 'padding': '23px 5px 0 15px'}}>만의</span> <span style={{'color': '#FF5251', 'font-size': '32px', 'font-weight': 'bold', 'padding': '23px 10px 0 5px'}}>빠르고 간편한</span> <p style={{'color': '#A587FF', 'font-size': '50px', 'font-weight': 'bold'}}>여행 동행자 찾기</p></S.TitleFirstTxt>
                        <S.LittleTxt>여행지, 여행 일정, 같이 가고 싶은 인원 수를 설정하면</S.LittleTxt>
                        <S.LittleTxt><span style={{'color': '#FF5251', 'font-size': '30px', 'font-weight': 'bold'}}>1초</span> 만에 본인의 여행 일정에 맞는 TwithMe들을 만날 수 있습니다.</S.LittleTxt>
                    </S.TitleBox>
                    <S.SearchWrapper>
                        <img src="/introduce/searchBox.png"/>
                    </S.SearchWrapper>
                </S.TitleWrapper>
                <S.ContentWrapper>
                    <S.ContentTitleWrapper>
                        <S.WhiteBubbleWrapper>
                            <img src="/introduce/whiteBubble.png"/> 
                        </S.WhiteBubbleWrapper>
                        <S.ContentTxtWrapper>
                            <S.TitleFirstTxt><img src="/assets/logo.png" width='163px' height='68px'/><p style={{'color': '#A7A7A7', 'font-size': '32px', 'font-weight': 'bold', 'padding': '22px 5px 0 10px'}}>만의 </p> <p style={{'color': '#FF5251', 'font-size': '32px', 'font-weight': 'bold', 'padding': '22px 5px 0 5px'}}>여행스타일 해시태그</p><p style={{'color': '#A7A7A7', 'font-size': '32px', 'font-weight': 'bold', 'padding': '22px 10px 0 5px'}}>로</p></S.TitleFirstTxt>
                            <S.TitleFirstTxt><p style={{'color': '#A587FF', 'font-size': '32px', 'font-weight': 'bold', 'padding': '0 10px 0 5px'}}>나와 잘 맞는 </p> <p style={{'color': '#FF5251', 'font-size': '32px', 'font-weight': 'bold', 'padding': '0 0 0 5px'}}>TwithMe</p><p style={{'color': '#A7A7A7', 'font-size': '32px', 'font-weight': 'bold', 'padding': '0 10px 0 0'}}>와 함께 여행하기</p></S.TitleFirstTxt>
                        </S.ContentTxtWrapper>
                    </S.ContentTitleWrapper>
                    <S.ContentMainWrapper>
                        <S.ContentTable>
                            <tr>
                                <S.ContentTd sc={scr >= 700 && scr < 950}><img src="/introduce/firstMethod.png"/></S.ContentTd>
                                <S.ContentTd sc={scr >= 700 && scr < 950}><S.FirstMethodTxt>1. 나의 여행스타일 <p style={{'color': '#FF5251', 'margin-left': '10px'}}> 해시태그 선택 </p>하기</S.FirstMethodTxt></S.ContentTd>
                            </tr>
                            <tr>
                                <td><img src="/introduce/downArrow.png"/></td>
                            </tr>
                            <S.FirstTr>
                                <S.ContentTd sc={scr >= 950 && scr < 1300}><img src="/introduce/secondMethod.png"/></S.ContentTd>
                                <S.ContentTd sc={scr >= 950 && scr < 1300}>
                                    <S.SecondMethodTxt>2. <S.SecondMethodSpan style={{'color': '#FF5251', 'margin': '0 10px'}}>해시태그 기반</S.SecondMethodSpan> 본인과 잘 맞을 것 같은 </S.SecondMethodTxt>
                                    <S.SecondMethodTxt style={{'margin-left': '27px'}}><S.SecondMethodSpan style={{'color': '#FF5251', 'margin': '0 10px'}}>여행 동행자</S.SecondMethodSpan> 찾기</S.SecondMethodTxt>
                                </S.ContentTd>
                            </S.FirstTr>
                            <tr>
                                <td><img src="/introduce/downArrow.png"/></td>
                            </tr>
                            <S.FirstTr>
                                <S.ContentTd sc={scr >= 1300 && scr < 1800}><img src="/introduce/thirdMethod.png"/></S.ContentTd>
                                <S.ContentTd sc={scr >= 1300 && scr < 1800}><S.FirstMethodTxt>3. <p style={{'color': '#FF5251', 'margin': '0 10px'}}> 동행 신청</p>후 <p style={{'color': '#FF5251', 'margin-left': '10px'}}>쪽지</p>로 연락</S.FirstMethodTxt></S.ContentTd>
                            </S.FirstTr>
                            <tr>
                                <td><img src="/introduce/downArrow.png"/></td>
                            </tr>
                            <S.FirstTr>
                                <S.ContentTd sc={scr >= 1800}><img src="/introduce/fourthMethod.png"/></S.ContentTd>
                                <S.ContentTd sc={scr >= 1800}><S.FirstMethodTxt>4. 함께 여행 후 <p style={{'color': '#FF5251', 'margin-left': '10px'}}> 후기 작성 </p>까지</S.FirstMethodTxt></S.ContentTd>
                            </S.FirstTr>
                        </S.ContentTable>
                    </S.ContentMainWrapper>
                </S.ContentWrapper>
            </S.IntroduceContainer>
            
        </S.IntroduceWrapper>
    );
}