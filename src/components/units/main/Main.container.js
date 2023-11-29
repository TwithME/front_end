import { FindCardFilter, FindCardList, JwtTokenState, LoginState, logout } from '@/States/LoginState';
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import * as S from "./Main.styles";

import PreviewCard from "@/components/commons/Card/Preview/Preview";
import FindCard from '../../commons/Card/Main/FindCard/FindCard';
import ReviewComponent from '../../commons/Card/Main/ReviewCard/Review';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 992 })
  return isNotMobile ? children : null
}

export default function Main() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const [findCardList, setFindCardList] = useRecoilState(FindCardList);
  const [findCardFilter, setFindCardFilter] = useRecoilState(FindCardFilter);
  const setJwtToken = useSetRecoilState(JwtTokenState);
  const jwtInfo = useRecoilValue(JwtTokenState);
  const apipath = 'http://semtle.catholic.ac.kr:8081';

  const [response, setResponse] = useState([]);

  // 반응형
  // const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 }, { deviceWidth: 1600 });
  // const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });
  // const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  // const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  // const isPortrait = useMediaQuery({ orientation: 'portrait' })
  // const isRetina = useMediaQuery({ minResolution: '2dppx' })

  // 토큰이 만료되었을 경우
  function checkToken () {
    if(jwtInfo.expiryTime < new Date().getTime()){
      alert("토큰이 만료되었습니다. 로그인을 다시 진행하여 주세요.");
      router.push("/auth/signIn");
      logout({setJwtToken});
      setIsLoggedIn(false);
      return true;
    } else {return false;}
  }

  const checkLogin = async () => {
    if(!isLoggedIn){
      alert('로그인이 필요한 서비스입니다');
      router.push("/auth/signIn");
    }
  };

  useEffect(() => {if(isLoggedIn) {checkToken()}}, []);


  // 초기값 불러오기
  useEffect(() => {
    const fetchData = async () => {
      if (response.length === 0) {
        const requestData = {
          "continentId": 0,
          "endDate": null,
          "keyWord": "",
          "nationId": 0,
          "regionId": 0,
          "startDate": null,
          "totalPeopleNum": 0,
        };
  
        try {
          const res = await axios.post(`${apipath}/twithme/list?isRecruiting=1&option=1`, requestData);
          setResponse(res.data.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
  
    fetchData();
  }, []);

  // TwithMe 찾기 필터링
  const router = useRouter();
  const onClcickFilterFind = async () => {
    if(checkToken()) {
      return;
    } 
    const requestData = {
      "continentId": parseInt(selectedDestination.continent.id),
      "endDate": tripDate[1],
      "keyWord": keyword,
      "nationId": parseInt(selectedDestination.country.id),
      "regionId": parseInt(selectedDestination.city.id),
      "startDate": tripDate[0],
      "totalPeopleNum": parseInt(selectedNum),
    }

    await axios
      .post(`${apipath}/twithme/list?isRecruiting=1&option=1`, requestData)
      .then((res) => {
        const arr = res.data.data;
        setFindCardList(res.data.data);        
      })
      .catch((error) => console.log(error));

      const query = {
        continent: JSON.stringify(selectedDestination.continent.name),
        continentId: selectedDestination.continent.id,
        country: JSON.stringify(selectedDestination.country.name),
        countryId: selectedDestination.country.id,
        city: JSON.stringify(selectedDestination.city.name),
        cityId: selectedDestination.city.id,
        startDate: JSON.stringify(tripDate[0] || ""),
        endDate: JSON.stringify(tripDate[1] || ""),
        num: selectedNum,
        keyword: JSON.stringify(keyword)
      }

    router.push("/findTwithme");
    setFindCardFilter(query);
    
  };

  // 여행 후기 필터링
  const [reviewList, setReviewList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
    const requestData = {
      "continentId": 0,
      "endMonth": 12,
      "keyWord": "",
      "nationId": 0,
      "regionId": 0,
      "startMonth": 1,
      "totalPeopleNum": 0,
    }

    await axios
      .post(`${apipath}/review/list?option=4`, requestData)
      .then((res) => {
        setReviewList(res.data.data);
      })
      .catch((error) => console.log(error));

    }
    fetchData();
  }, []);
  
  // 여행지 선택
  const [isCountry, setIsCountry] = useState(false);
  const [destination, setDestination] = useState({
    continent: [],
    country: [],
    city: []
  })
  const [selectedDestination, setSelectedDestination] = useState({
    continent: {id: 0, name: ""},
    country: {id: 0, name: ""},
    city: {id: 0, name: ""}
  });
  const [showDestination, setShowDestination] = useState({
    country: "",
    city: "",
  })

  useEffect(() => {}, [showDestination]);

  const onOpenDestination = async () => {
    if(isCountry === true){
      setIsCountry(false);
    } else {
      setIsCountry(true);
      if(selectedDestination.city.name !== ""){
        return;
      }
      axios
        .get(apipath + '/destination/continent')
        .then((res) => {
          setDestination(prevDestination => ({
            continent: res.data.data,
            country: [],
            city: []
          }))
      });
    }
  }

  const onOpenCountry = (e) => {
    setSelectedDestination(prev => ({
      ...prev,
      continent: {id: e.target.id ,name: e.target.innerText}
    }))

    axios
      .get(`${apipath}/destination/nation?continentId=${e.target.id}`)
      .then((res) => {
        setDestination(prevDestination => ({
          ...prevDestination,
          country: res.data.data,
          city: []
        }))
    });
  }

  const onOpenCity = (e) => {
    setSelectedDestination(prev => ({
      ...prev,
      country: {id: e.target.id ,name: e.target.innerText}
    }))

    axios
      .get(`${apipath}/destination/region?nationId=${e.target.id}`)
      .then((res) => {
        setDestination(prevDestination => ({
          ...prevDestination,
          city: res.data.data,
        }))
    });
  }

  // 달력
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [tripDate, setTripDate] = useState([])

  
  // 인원수 선택
  const [selectedNum, setSelectedNum] = useState(0);

  // 검색어
  const [keyword, setKeyword] = useState("");

  // 광고 배너
  const [adverIdx, setAdverIdx] = useState(0);
  // let adverIdx = 0;
  const advertiseArr = [
    {img: "/img/adver1.png", title: ["오사카 2박 3일 하나투어 패키지", "30% 할인"]},
    {img: "/img/adver2.png", title: ["뉴욕 4박 5일 모두투어 패키지", "50% 할인"]},
    {img: "/img/adver3.png", title: ["가을 맞이 밴쿠버 5박 6일 하나투어 패키지", "30% 할인"]},
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdverIdx((prevIdx) => (prevIdx === 2 ? 0 : prevIdx + 1));
    }, 5000);

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 클리어
  }, [adverIdx]);
  return (
    <>
      <S.Banner>
        <S.BannerImgWrapper>
          <S.BannerTitle>
          <S.BannerTxt>
            함께 하고 싶은 여행자를 TwithMe에서 바로 찾아보세요
          </S.BannerTxt>
          </S.BannerTitle>
        </S.BannerImgWrapper>
      </S.Banner>

      <S.ContentWrapper>
        <S.ReviewTitleWrapper onClick={onClcickFilterFind}>
          <S.FindBoardTitleWrapper>함께 동행할 TwithMe를 만나보세요</S.FindBoardTitleWrapper>
          <S.BtnBigArrow src="icon/move.png"></S.BtnBigArrow>
        </S.ReviewTitleWrapper>
        <S.Review>
          <S.SubTitleWrapper>
            <S.SubTitle><img src="/icon/location.png" width="25px" height="25px" /> 인기 여행지</S.SubTitle>
          </S.SubTitleWrapper>
          <S.FindBoardContent>
            {response.map((res, idx) => {
            if(idx >= 0 && idx < 6)
            { return (
              <FindCard 
                key={res.boardId} 
                id={res.boardId} 
                idx={idx}
                info={res}
                onClick={() => {
                  if(!isLoggedIn) {
                    checkLogin();
                  } else {
                    if(!checkToken()){
                      router.push(`/findTwithme/${res.boardId}`);
                    }
                  }
                }}
              />
            )}})}
          </S.FindBoardContent>
        </S.Review>
      </S.ContentWrapper>
      
      <S.ReviewBannerWrapper>
        <S.ReviewBannerImgOneWrapper>
          <S.ReviewBannerImgOne src="/img/city1.avif"/>
        </S.ReviewBannerImgOneWrapper>
        <S.ReviewBannerImgTwoWrapper>
          <S.ReviewBannerImgTwo src="/img/city2.jpg"/>
        </S.ReviewBannerImgTwoWrapper>
        <S.PreviewWrapper>
          <PreviewCard/>
        </S.PreviewWrapper>
      </S.ReviewBannerWrapper>

      <S.ContentWrapper>
        <S.ReviewTitleWrapper onClick={(e) => {
          if(isLoggedIn) {
            if(!checkToken()) {
              router.push("/review")
            } 
          }
        }}>
          <S.FindBoardTitle>TwithMe들의 여행 후기를 만나보세요</S.FindBoardTitle>
          <S.BtnBigArrow src="icon/move.png"></S.BtnBigArrow>
        </S.ReviewTitleWrapper>
        <S.Review>
          <S.SubTitleWrapper>
            <S.SubTitle><img src="/icon/location.png" width="25px" height="25px" /> 인기 여행 후기</S.SubTitle>
          </S.SubTitleWrapper> 
        <S.FindBoardContent>
          {reviewList.map((e, i) => {
            if(i >= 0 && i < 6)
            { return (
              <ReviewComponent 
                key={i} 
                idx={i} 
                info={e}
                onClick={() => {
                  if(!isLoggedIn) {
                    checkLogin();
                  } else {
                    if(!checkToken()){
                      router.push(`/review/${e.reviewId}`);
                    }
                  }
                }}
              />
          )}})}
          </S.FindBoardContent>
          
        </S.Review>
      </S.ContentWrapper>

      <S.AdWrapper style={{'cursor': 'pointer'}}>
        {advertiseArr.map((e, i) => {
          if(i === adverIdx){
            return (
              <S.AdBannerWrapper>
                <S.AdImg src={e.img} key={i}/>
                <S.AdTitleWrapper>
                  {e.title.map((title, j) => (
                    <S.AdTitle idx={j} style={{ top : `calc(${j} * 100px + 300px)`}}>{title}</S.AdTitle>
                  ))}
                </S.AdTitleWrapper>
              </S.AdBannerWrapper>
            )}
        })}
      </S.AdWrapper>
    </>
  );
}
