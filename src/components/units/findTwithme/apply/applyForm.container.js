import FindTwithmeBanner from "@/components/commons/Layout/findTwithmeBanner";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./applyForm.style";

export default function FindBoardApply() {
  const router = useRouter();
  const apiPath = "http://semtle.catholic.ac.kr:8081";
  const { boardId } = router.query;

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [content, setContent] = useState("");

  // 체크박스 설정
  const onChangeCheckbox1 = (event) => {
    const { checked } = event.target;
    setIsChecked1(checked);
    if (!checked) setIsCheckedAll(false);
    if (checked && isChecked2) setIsCheckedAll(true);
  };

  const onChangeCheckbox2 = (event) => {
    const { checked } = event.target;
    setIsChecked2(checked);
    if (!checked) setIsCheckedAll(false);
    if (checked && isChecked1) setIsCheckedAll(true);
  };

  const onChangeCheckboxAll = (event) => {
    const { checked } = event.target;
    setIsCheckedAll(checked);
    if (checked) {
      setIsChecked1(true);
      setIsChecked2(true);
    } else {
      setIsChecked1(false);
      setIsChecked2(false);
    }
  };

  const onClickApplyBtn = async () => {
    if (!isCheckedAll) {
      alert("필수항목에 동의해주세요");
    } else {
      axios.defaults.headers.common["x-auth-token"] =
        window.localStorage.getItem("login-token");

      await axios
        .post(apiPath + "/twithme/apply", {
          content,
          boardId,
        })
        .then((res) => {
          alert("신청이 완료되었습니다.");
          router.push(`/findTwithme/${boardId}`);
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <>
      <FindTwithmeBanner />
      <S.PageTitle>함께 동행할 TwithMe 신청</S.PageTitle>
      <S.Form>
        <S.ContentsItem>
          <S.FormTitle>TwithMe 신청 관련 안내사항</S.FormTitle>
          <S.TitleLine></S.TitleLine>
          <S.AcceptWrapper>
            <S.RadioBtn
              type="checkbox"
              checked={isCheckedAll}
              onChange={onChangeCheckboxAll}
            ></S.RadioBtn>
            <S.RadioTxt>모두 동의</S.RadioTxt>
          </S.AcceptWrapper>
          <S.AcceptItem>
            <S.AcceptInfo>
            TwithMe를 사용하여 여행 동반자를 신청하실 경우, 상대방에게
              사용자의 이름과 연령대, 성별이 필수적으로 공개됩니다. 이는
              신뢰성과 투명성을 제공하기 위한 조치로 이루어집니다. 사용자의
              개인정보는 안전하게 처리되며, 이는 서비스 운영과 상대방과의 원활한
              의사소통을 위한 목적으로 사용됩니다.
            </S.AcceptInfo>
            <S.AcceptWrapper>
              <S.RadioBtn
                type="checkbox"
                checked={isChecked1}
                onChange={onChangeCheckbox1}
              ></S.RadioBtn>
              <S.RadioTxt>확인했습니다.</S.RadioTxt>
            </S.AcceptWrapper>
          </S.AcceptItem>
          <S.AcceptItem>
            <S.AcceptInfo>
            TwithMe는 모든 사용자들이 쾌적하고 안전한 환경에서 서비스를
              이용할 수 있도록 최선을 다하고 있습니다. 욕설, 비방, 성적인 메시지
              등은 다른 사용자에게 불쾌감을 주거나 서비스 이용 규정을 위반하는
              행동으로 간주될 수 있습니다. 이러한 행동은 TwithMe 커뮤니티
              가이드라인을 위반하며, 적절한 조치가 취해질 수 있습니다. 모든
              사용자들이 서로를 존중하고 예의를 갖추며 소통할 수 있는 환경을
              유지하기 위해, TwithMe는 여행 동반자 간의 적절한 상호 작용을
              촉구합니다
            </S.AcceptInfo>
            <S.AcceptWrapper>
              <S.RadioBtn
                type="checkbox"
                checked={isChecked2}
                onChange={onChangeCheckbox2}
              ></S.RadioBtn>
              <S.RadioTxt>확인했습니다.</S.RadioTxt>
            </S.AcceptWrapper>
          </S.AcceptItem>
        </S.ContentsItem>
        <S.ContentsItem>
          <S.FormTitle>TwithMe 신청</S.FormTitle>
          <S.TitleLine></S.TitleLine>
          <S.SubTitle>상대방에게 본인에 대해 간단히 소개해주세요.</S.SubTitle>
          <S.Input
            onChange={(event) => setContent(event.target.value)}
          ></S.Input>
        </S.ContentsItem>
        <S.ApplyBtn onClick={onClickApplyBtn}>신청 완료</S.ApplyBtn>
      </S.Form>
    </>
  );
}
