import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { styled, keyframes } from "styled-components";

export default function TopBtn(props){
    return(
        <>
            <Btn className={props.isHidden ? "hidden" : ""} onClick={props.onClick}>TOP</Btn>
        </>
    )
}

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

const Btn = styled.div`
    background-color: #000;
    color: #fff;
    padding: 20px;
    border-radius: 50px;
    font-weight: bold;
    cursor: pointer;

    position: fixed;
    bottom: 30px;
    right: 30px;

    animation-duration: 0.2s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;

    &.hidden{
        animation-duration: 0.2s;
        animation-timing-function: ease-out;
        animation-name: ${fadeOut};
        animation-fill-mode: forwards;
    }
`;