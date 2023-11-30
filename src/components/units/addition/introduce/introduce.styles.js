import styled, { css, keyframes } from "styled-components";
import { NoneSelectedImg } from "../../auth/profile/Messenger/Messengser.styles";

export const IntroduceWrapper = styled.div`

`;

export const IntroduceContainer = styled.div`
    margin: 100px auto;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
`;

export const TitleWrapper = styled.div`
`;

export const PurpleBubbleWrapper = styled.div`

`;

export const TitleBox = styled.div`
    text-align: center;
    align-items: center;
    
    display: flex;
    flex-direction: column;
`;

export const SearchWrapper = styled.div`
    margin-top: 60px;
    margin-left: 50px;
`;

export const TitleFirstTxt = styled.div`
    display: flex;
    margin: 30px 0;
`;

export const LittleTxt = styled.div`
    font-size: 25px;
    color: #A7A7A7;

    margin: 15px 0;
`;

export const ContentWrapper = styled.div`
    background-color: #ECF9FD;
    width: 100%;
    height: 3000px;

    margin: 100px auto;
    padding: 100px 0;
    display: flex;
    flex-direction: column;

    align-items: center;
    // text-align: center;
    // // justify-content: center;
`;

export const ContentTitleWrapper = styled.div`
    margin: 30px 0;
    width: 1600px;
`;

export const WhiteBubbleWrapper = styled.div`
    width: 100%;
    justify-content: flex-end
`;

export const ContentTxtWrapper = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    text-align: center;
`;


const move = keyframes`
    0%{
        // top: 3000px;
        margin-top: 1000px;
    } 
    100%{
        margin-top: 0;
    }
`;

export const ContentMainWrapper = styled.div`
    width: 1600px;
    height: 2000px;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.5);

    align-items: center;
    text-align: center;
    justify-content: center;

    
`;

export const ContentTable = styled.table`
    width: 100%;
    height: 2000px;
    padding: 50px;

`;

export const FirstMethodBox = styled.div`
    display: flex;
`;

export const FirstMethodImgWrapper = styled.div`

`;

// export const 

export const FirstMethodTxt = styled.div`
    text-align: center;
    display: flex;
    color: #A7A7A7;
    font-size: 35px;
    font-weight: bold;
`;

export const SecondMethodTxt = styled(FirstMethodBox)`
text-align: center;
display: flex;
color: #A7A7A7;
font-size: 35px;
font-weight: bold;
white-space: nowrap;
`;

export const SecondMethodSpan = styled.span`
    white-space: nowrap;
`;

export const FirstTr = styled.tr`

`;

export const moveTable = keyframes`
    0%{padding-top: 400px;}
    25%{padding-top: 300px;}
    50%{padding-top: 200px;}
    75%{padding-top: 100px;}
    100%{padding-top: 0;}
`;

export const ContentTd = styled.td`
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 700px;
    padding-left: 10px;
    white-space: wrap;

    animation: ${(props) => (
        props.sc ? css`${moveTable} 1s` : 'none'
    )}
    
`;

