import * as S from "./contact.styles";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ContactTripyle() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [email, setEmail] = useState("");

    const [checked, setChecked] = useState(false);

    // 이미지
    const [image, setImage] = useState({});
    const [selectedImageList, setSelectedImageList] = useState([]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImageList((prev) => [...prev, file]);

        if (file) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            
            setImage((prev) => 
                ({ url: reader.result, name: file.name }),
            );
        });
        reader.readAsDataURL(file);
        }
    };

    const deleteImg = (event) => {
        setImage({});
        setSelectedImageList([]);
    }

    const sendInfo = (e) => {
        if(title === ""){
            alert("제목을 입력해주세요.");
            return;
        }
        if(content === ""){
            alert("문의 내용을 입력해주세요.");
            return;
        }
        if(email === ""){
            alert("이메일을 입력해주세요.");
            return;
        }
        if(!checked){
            alert("개인정보 이용동의를 해주셔야 합니다.");
            return;
        }
        console.log(title, content, email);
        alert("전송되었습니다.");
        setTitle("");
        setContent("");
        setEmail("");
        setImage({});
        setSelectedImageList([]);
    }

    return(
        <>
        <S.MainWrapper>
            <S.MainContainer>
                <S.TitleWrapper>
                    <S.MainTitle>Contact</S.MainTitle>
                    <S.MainTxtBox>
                        <S.MainTxt>Trip'yle를 방문해주신 Trip'yler 여러분 모두 환영합니다!</S.MainTxt>
                        <S.MainTxt>Trip'yle 이용 중 불편했던 점이 있으시다면 아래 내용을 기입해주세요.</S.MainTxt>
                        <S.MainTxt>구체적인 문의 내용과 문의와 관련된 화면 스크린샷을 보내주시면 문제를 보다 빠르게 확인할 수 있습니다.</S.MainTxt>
                    </S.MainTxtBox>
                    <S.Line></S.Line>
                </S.TitleWrapper>
                <S.ContentWrapper>
                    <S.TitleBox><S.TitleLittleBox>제목</S.TitleLittleBox><S.TitleInput value={title} onChange={(e) => setTitle(e.target.value)}/></S.TitleBox>
                    <S.ContentBox><S.ContentInput placeholder="문의 내용을 입력해주세요" value={content} onChange={(e) => setContent(e.target.value)}/></S.ContentBox>
                    <S.PhotoBox>
                    {
                        selectedImageList.length === 0 ? (
                            <>
                            <S.NoImgWrapper htmlFor="first-upload-input">
                              <S.NoImgIconWrapper>
                                <S.NoImgIcon src="/icon/image.svg" />
                                <S.NoImgTxt> 이미지 첨부</S.NoImgTxt>
                              </S.NoImgIconWrapper>
                            </S.NoImgWrapper>
                            <input
                              id="first-upload-input"
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                              style={{ display: "none" }}
                              multiple
                            />
                            </>
                        ) : (
                            <S.ImgWrapper onClick={deleteImg}>
                                <S.Image src={image.url}/>
                            </S.ImgWrapper>    
                        )
                    }
                    </S.PhotoBox>
                    <S.EmailBox><S.EmailInput placeholder="답변 받을 메일 주소" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/></S.EmailBox>
                    <S.EmailNoti>위의 이메일 주소로 답변을 보내드릴 예정입니다.</S.EmailNoti>
                    <S.TermsBox><S.TermsInput type='checkbox' checked={checked} onClick={() => setChecked(!checked)}/><S.TermsTxt>개인정보 이용동의 (필수)</S.TermsTxt></S.TermsBox>
                </S.ContentWrapper>
                <S.BtnWrapper>
                    <S.Btn onClick={sendInfo}>보내기</S.Btn>
                </S.BtnWrapper>
            </S.MainContainer>
        </S.MainWrapper>
        </>
    );
}