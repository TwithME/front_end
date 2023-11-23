import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const JWT_EXPIRY_TIME = 604800000; // 만료 시간 (24시간 밀리 초로 표현)

// JWT 토큰을 저장할 atom
export const JwtTokenState = atom({
  key: "JwtTokenState",
  default: { token: null, expiryTime: null },
  effects_UNSTABLE: [persistAtom],
});

// JWT 토큰이 유효한지 여부를 확인하는 selector
export const IsJwtValidSelector = selector({
  key: "IsJwtValidSelector",
  get: ({ get }) => {
    const jwtToken = get(JwtTokenState);
    console.log(jwtToken.expiryTime);
    if (!jwtToken || !jwtToken.expiryTime) return false; // JWT 토큰이 없으면 유효하지 않음

    const currentTime = new Date().getTime();
    console.log(currentTime, jwtToken.expiryTime);
    return currentTime < jwtToken.expiryTime; // 현재 시간이 만료 시간보다 작으면 유효
  },
});

export const LoginState = atom({
  key: "LoginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

// 로그인을 수행하는 함수
export const login = ({ jwtToken, setJwtToken }) => {
  // JWT 토큰을 저장
  setJwtToken({
    token: jwtToken,
    expiryTime: new Date().getTime() + JWT_EXPIRY_TIME,
  });

};

// 로그아웃을 수행하는 함수
export const logout = ({ setJwtToken }) => {
  // JWT 토큰을 제거
  setJwtToken({token: null, expiryTime: null});

  window.localStorage.clear();
  // 로그인 상태를 false로 설정
  // LoginState.set(false);
};


export const NicknameState = atom({
  key: "NicknameState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const IsFirstLogin = atom({
  key: "IsFirstLogin",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const IsAdmin = atom({
  key: "IsAdmin",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const FindCardList = atom({
  key: "FindCardList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const FindCardFilter = atom({
  key: "FindCardFilter",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
