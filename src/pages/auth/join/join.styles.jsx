import StyleModal from "@/components/commons/Modal/StyleModal";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./join.styles";

export default function Join() {
  // 라이브러리 변수
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  // 체크박스 state
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  // 기타 state
  const apiPath = "https://api.tripyle.xyz";
  const [isSendCheckNum, setIsSendCheckNum] = useState(false);
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [inputCheckNum, setInputCheckNum] = useState("");
  const [authCheckNum, setAuthCheckNum] = useState("");
  const [isUsernameAuth, setIsUsernameAuth] = useState(false);
  const [isPhoneAuth, setIsPhoneAuth] = useState(false);

  // 에러 메세지 state
  const [errorID, setErrorID] = useState(" ");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordCheck, setErrorPasswordCheck] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorPhoneCheck, setErrorPhoneCheck] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorGender, setErrorGender] = useState("");
  const [errorbirthDate, setErrorBirthDate] = useState("");
  const [errorCheckBox, setErrorCheckBox] = useState("");
  const [errorStyle, setErrorStyle] = useState("");

  // 중복확인 버튼
  const onClickUsernameCheckBtn = () => {
    if (!username) {
      setErrorID("6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합해서 생성");
      return;
    } else {
      setErrorID("");
      axios
        .get(apiPath + "/user/username/check/" + username)
        .then((response) => {
          if (response.data.data == true) {
            alert("중복되는 ID입니다. 다른 ID를 입력해주세요.");
            setIsUsernameAuth(false);
          } else {
            alert("사용가능한 ID입니다.");
            setIsUsernameAuth(true);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // 인증번호 발송 버튼
  const onClcickAuthNumBtn = () => {
    if (phone?.length !== 11 || !/^[0-9]+$/.test(phone)) {
      setErrorPhone("휴대폰 번호를 확인해주세요");
      return;
    } else {
      // 문자 전송 api
      axios
        .post(apiPath + "/user/authentication-code/send", {
          phone,
        })
        .then((response) => {
          setAuthCheckNum(response.data.data);
          setErrorPhone("");
          setIsSendCheckNum(true);
          setSeconds(180);
          setIsRunning(true);
          alert("인증번호가 전송되었습니다.");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // 인증확인 버튼
  const onClickAuthNumCheckBtn = () => {
    if (!isRunning) {
      setErrorPhoneCheck("시간이 초과되었습니다.");
    } else if (inputCheckNum !== String(authCheckNum)) {
      setErrorPhoneCheck("인증번호가 잘못되었습니다.");
    } else {
      setIsRunning(false);
      alert("인증번호가 확인되었습니다.");
      setErrorPhoneCheck("");
      setIsPhoneAuth(true);
    }
  };

  // 회원가입 등록 버튼
  const onClickEnrollBtn = async (data) => {
    const {
      name,
      password,
      passwordCheck,
      phone,
      username,
      email,
      year,
      month,
      day,
    } = data;
    const birthDate = `${year}-${month}-${day}`;

    // 입력값 검증
    if (!isUsernameAuth) {
      setErrorID("아이디 중복확인을 해주세요");
      return;
    } else setErrorID("");

    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,16}$/;
    const isValidPassword = passwordRegex.test(password);

    if (!isValidPassword) {
      setErrorPassword(
        "영문과 숫자, 특수문자를 포함하여 6자 이상 16자 이하로 생성"
      );
      return;
    } else setErrorPassword("");

    if (password !== passwordCheck) {
      setErrorPasswordCheck("비밀번호를 확인해주세요");
      return;
    } else setErrorPasswordCheck("");

    if (!name) {
      setErrorName("이름을 입력해주세요");
      return;
    } else setErrorName("");

    if (!isPhoneAuth) {
      if (!isSendCheckNum) {
        setErrorPhone("휴대폰 인증을 해주세요");
        return;
      } else {
        setErrorPhoneCheck("휴대폰 인증을 해주세요");
        return;
      }
    } else {
      setErrorPhone("");
      setErrorPhoneCheck("");
    }

    if (!email.includes("@") || !email.includes(".com")) {
      setErrorEmail("이메일을 입력해주세요");
      return;
    } else setErrorEmail("");

    if (!gender) {
      setErrorGender("성별을 체크해주세요");
      return;
    } else setErrorGender("");

    if (!year || !month || !day) {
      setErrorBirthDate("생년월일을 입력해주세요");
      return;
    } else setErrorBirthDate("");

    if (shownMyHashtag.length == 0) {
      setErrorStyle("여행스타일을 최소 한개 이상 선택해주세요");
      return;
    } else setErrorStyle("");

    if (!isChecked1 || !isChecked2 || !isChecked3) {
      setErrorCheckBox("필수항목을 체크해주세요");
      return;
    } else setErrorCheckBox("");

    // signup api 요청
    await axios
      .post(apiPath + "/user/signup", {
        birthDate,
        email,
        firstTripStyleId: shownMyHashtag[0]?.id || 0,
        gender,
        name,
        password,
        phone,
        secondTripStyleId: shownMyHashtag[1]?.id || 0,
        thirdTripStyleId: shownMyHashtag[2]?.id || 0,
        username,
      })
      .then((response) => {
        alert("회원가입을 축하드립니다");
        router.push("/auth/signIn");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // 아이디 변수 저장
  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  // 휴대폰 번호 변수 저장
  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };

  // 휴대폰 인증번호 변수 저장
  const onChangePhoneCheckNum = (event) => {
    setInputCheckNum(event.target.value);
  };

  // 성별 선택된 값 변수 저장
  const onChangeGender = (event) => {
    setGender(event.target.value);
  };

  // 체크박스 설정
  const onChangeCheckbox1 = (event) => {
    const { checked } = event.target;
    setIsChecked1(checked);
    if (!checked) setIsCheckedAll(false);
    if (checked && isChecked2 && isChecked3 && isChecked4 && isChecked5)
      setIsCheckedAll(true);
  };

  const onChangeCheckbox2 = (event) => {
    const { checked } = event.target;
    setIsChecked2(checked);
    if (!checked) setIsCheckedAll(false);
    if (checked && isChecked1 && isChecked3 && isChecked4 && isChecked5)
      setIsCheckedAll(true);
  };

  const onChangeCheckbox3 = (event) => {
    const { checked } = event.target;
    setIsChecked3(checked);
    if (!checked) setIsCheckedAll(false);
    if (checked && isChecked1 && isChecked2 && isChecked4 && isChecked5)
      setIsCheckedAll(true);
  };

  const onChangeCheckbox4 = (event) => {
    const { checked } = event.target;
    setIsChecked4(checked);
    if (!checked) setIsCheckedAll(false);
    if (checked && isChecked1 && isChecked2 && isChecked3 && isChecked5)
      setIsCheckedAll(true);
  };

  const onChangeCheckbox5 = (event) => {
    const { checked } = event.target;
    setIsChecked5(checked);
    if (!checked) setIsCheckedAll(false);
    if (checked && isChecked1 && isChecked2 && isChecked3 && isChecked4)
      setIsCheckedAll(true);
  };

  const onChangeCheckboxAll = (event) => {
    const { checked } = event.target;
    setIsCheckedAll(checked);
    if (checked) {
      setIsChecked1(true);
      setIsChecked2(true);
      setIsChecked3(true);
      setIsChecked4(true);
      setIsChecked5(true);
    } else {
      setIsChecked1(false);
      setIsChecked2(false);
      setIsChecked3(false);
      setIsChecked4(false);
      setIsChecked5(false);
    }
  };

  // 모달 창
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shownMyHashtag, setShownMyHashtag] = useState([]);

  const onClickOpenModal = () => {
    setIsModalOpen(true);
  };

  // 타이머 기능
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsRunning(false);
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, seconds]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickEnrollBtn)}>
        <S.Page>
          <S.Title>회원가입</S.Title>
          <S.TitleLine></S.TitleLine>

          <S.InputWrapper>
            <S.Label>
              <S.LabelTxt>아이디</S.LabelTxt>
              <S.LabelStar>*</S.LabelStar>
            </S.Label>
            <S.Input
              placeholder={"ID"}
              {...register("username")}
              onChange={onChangeUsername}
            ></S.Input>
            <S.CheckBtn type="button" onClick={onClickUsernameCheckBtn}>
              중복확인
            </S.CheckBtn>
          </S.InputWrapper>
          <S.Error>{errorID}</S.Error>

          <S.InputWrapper>
            <S.Label>
              <S.LabelTxt>비밀번호</S.LabelTxt>
              <S.LabelStar>*</S.LabelStar>
            </S.Label>
            <S.Input
              type="password"
              placeholder={"Password"}
              {...register("password")}
            ></S.Input>
            <S.BlankBtn></S.BlankBtn>
          </S.InputWrapper>
          <S.Error>{errorPassword}</S.Error>

          <S.InputWrapper>
            <S.Label>
              <S.LabelTxt>비밀번호 확인</S.LabelTxt>
              <S.LabelStar>*</S.LabelStar>
            </S.Label>
            <S.Input
              type="password"
              placeholder={"Password"}
              {...register("passwordCheck")}
            ></S.Input>
            <S.BlankBtn></S.BlankBtn>
          </S.InputWrapper>
          <S.Error>{errorPasswordCheck}</S.Error>

          <S.InputWrapper>
            <S.Label>
              <S.LabelTxt>이름</S.LabelTxt>
              <S.LabelStar>*</S.LabelStar>
            </S.Label>
            <S.Input placeholder={"Name"} {...register("name")}></S.Input>
            <S.BlankBtn></S.BlankBtn>
          </S.InputWrapper>
          <S.Error>{errorName}</S.Error>

          <S.InputWrapper>
            <S.Label>
              <S.LabelTxt
                onClick={() => {
                  setSeconds(10);
                  setIsRunning(true);
                }}
              >
                휴대폰
              </S.LabelTxt>
              <S.LabelStar>*</S.LabelStar>
            </S.Label>
            <S.Input
              placeholder={"Phone"}
              {...register("phone")}
              onChange={onChangePhone}
            ></S.Input>
            <S.CheckBtn
              type="button"
              onClick={onClcickAuthNumBtn}
              style={{
                borderColor: !isRunning && !isPhoneAuth ? "" : "#D6D5D5",
                color: !isRunning && !isPhoneAuth ? "" : "#D6D5D5",
                cursor: !isRunning && !isPhoneAuth ? "" : "default",
              }}
              disabled={isRunning || isPhoneAuth}
            >
              인증받기
            </S.CheckBtn>
          </S.InputWrapper>
          <S.Error>{errorPhone}</S.Error>

          {isSendCheckNum && (
            <>
              <S.InputWrapper>
                <S.BlankLabel></S.BlankLabel>
                <S.PhoneCheckInputWrapper>
                  <S.PhoneCheckInput onChange={onChangePhoneCheckNum} />
                  <S.Timer>{formatTime(seconds)}</S.Timer>
                </S.PhoneCheckInputWrapper>
                <S.CheckBtn
                  type="button"
                  onClick={onClickAuthNumCheckBtn}
                  style={{
                    borderColor: isPhoneAuth ? "#D6D5D5" : "",
                    color: isPhoneAuth ? "#D6D5D5" : "",
                    cursor: isPhoneAuth ? "default" : "",
                  }}
                  disabled={isPhoneAuth}
                >
                  확인
                </S.CheckBtn>
              </S.InputWrapper>
              <S.Error>{errorPhoneCheck}</S.Error>
            </>
          )}

          <S.InputWrapper>
            <S.Label>
              <S.LabelTxt>이메일</S.LabelTxt>
              <S.LabelStar>*</S.LabelStar>
            </S.Label>
            <S.Input placeholder={"Email"} {...register("email")}></S.Input>
            <S.BlankBtn></S.BlankBtn>
          </S.InputWrapper>
          <S.Error>{errorEmail}</S.Error>

          <S.InputWrapper>
            <S.Label>
              <S.LabelTxt>성별</S.LabelTxt>
              <S.LabelStar>*</S.LabelStar>
            </S.Label>
            <S.GenderWrapper>
              <S.RadioBtn
                type="radio"
                name="gender"
                value={"M"}
                onChange={onChangeGender}
              ></S.RadioBtn>
              <S.SpanLabel style={{ marginRight: "137px" }}>남자</S.SpanLabel>
              <S.RadioBtn
                type="radio"
                name="gender"
                value={"F"}
                onChange={onChangeGender}
              ></S.RadioBtn>
              <S.SpanLabel>여자</S.SpanLabel>
            </S.GenderWrapper>
            <S.BlankBtn></S.BlankBtn>
          </S.InputWrapper>
          <S.Error>{errorGender}</S.Error>

          <S.InputWrapper>
            <S.Label>
              <S.LabelTxt>생년월일</S.LabelTxt>
              <S.LabelStar>*</S.LabelStar>
            </S.Label>
            <S.BirthDateWrapper>
              <S.BirthDateInput
                placeholder={"YYYY"}
                maxLength={4}
                inputmode="numeric"
                pattern="[0-9]*"
                {...register("year")}
              ></S.BirthDateInput>
              <S.BirthDateSlash>/</S.BirthDateSlash>
              <S.BirthDateInput
                placeholder={"MM"}
                maxLength={2}
                inputmode="numeric"
                {...register("month")}
              ></S.BirthDateInput>
              <S.BirthDateSlash>/</S.BirthDateSlash>
              <S.BirthDateInput
                placeholder={"DD"}
                maxLength={2}
                inputmode="numeric"
                {...register("day")}
              ></S.BirthDateInput>
            </S.BirthDateWrapper>
            <S.BlankBtn></S.BlankBtn>
          </S.InputWrapper>
          <S.Error>{errorbirthDate}</S.Error>

          <S.InputWrapper>
            <S.Label>
              <S.LabelTxt>여행스타일</S.LabelTxt>
              <S.LabelStar>*</S.LabelStar>
            </S.Label>
            <S.GenderWrapper style={{ gap: "20px" }}>
              {shownMyHashtag.length === 0 ? (
                <S.Input
                  placeholder={"여행 스타일을 입력하세요"}
                  readOnly
                  style={{ cursor: "default" }}
                ></S.Input>
              ) : (
                shownMyHashtag.map((e) => (
                  <S.Hashtag key={e.id}>#{e.name}</S.Hashtag>
                ))
              )}
            </S.GenderWrapper>
            <S.CheckBtn type="button" onClick={onClickOpenModal}>
              입력하기
            </S.CheckBtn>
          </S.InputWrapper>
          <S.Error>{errorStyle}</S.Error>

          <S.AcceptTitleWrapper>
            <S.Line></S.Line>
            <S.AcceptTitle>이용약관 동의</S.AcceptTitle>
            <S.Line></S.Line>
          </S.AcceptTitleWrapper>

          <S.Error>{errorCheckBox}</S.Error>
          <S.AcceptWrapper>
            <S.CheckBox
              type="checkbox"
              checked={isCheckedAll}
              onChange={onChangeCheckboxAll}
            ></S.CheckBox>
            <S.AcceptLabel style={{ fontWeight: "800", fontSize: "20px" }}>
              전체 동의
            </S.AcceptLabel>
          </S.AcceptWrapper>
          <S.AcceptWrapper>
            <S.CheckBox
              type="checkbox"
              checked={isChecked1}
              onChange={onChangeCheckbox1}
            ></S.CheckBox>
            <S.AcceptLabel>트리플리 이용약관 동의 (필수)</S.AcceptLabel>
          </S.AcceptWrapper>
          <S.AcceptWrapper>
            <S.CheckBox
              type="checkbox"
              checked={isChecked2}
              onChange={onChangeCheckbox2}
            ></S.CheckBox>
            <S.AcceptLabel>전자 금융거래 이용약관 동의 (필수)</S.AcceptLabel>
          </S.AcceptWrapper>
          <S.AcceptWrapper>
            <S.CheckBox
              type="checkbox"
              checked={isChecked3}
              onChange={onChangeCheckbox3}
            ></S.CheckBox>
            <S.AcceptLabel>개인정보 수집이용 동의 (필수)</S.AcceptLabel>
          </S.AcceptWrapper>
          <S.AcceptWrapper>
            <S.CheckBox
              type="checkbox"
              checked={isChecked4}
              onChange={onChangeCheckbox4}
            ></S.CheckBox>
            <S.AcceptLabel>개인정보 제3자 제공 동의 (선택)</S.AcceptLabel>
          </S.AcceptWrapper>
          <S.AcceptWrapper>
            <S.CheckBox
              type="checkbox"
              checked={isChecked5}
              onChange={onChangeCheckbox5}
            ></S.CheckBox>
            <S.AcceptLabel>마케팅 정보메일, SMS 수신 동의 (선택)</S.AcceptLabel>
          </S.AcceptWrapper>

          <S.EnrollBtn onClick={onClickEnrollBtn}>회원가입</S.EnrollBtn>
        </S.Page>
      </form>

      {/* =================== 모달창  ==================== */}

      {isModalOpen && (
        <StyleModal
          data={shownMyHashtag}
          setData={setShownMyHashtag}
          setIsOpenModal={setIsModalOpen}
          limitLen="3"
        />
      )}
    </>
  );
}
