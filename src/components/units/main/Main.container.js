import { FindCardFilter, FindCardList, JwtTokenState, LoginState, logout } from '@/States/LoginState';
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import * as S from "./Main.styles";

import PreviewCard from "@/components/commons/Card/Preview/Preview";
import Calendar from "@/components/commons/Tools/Calendar";
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
          const res = await axios.post(`${apipath}/tripyler/list?isRecruiting=1&option=1`, requestData);
          setResponse(res.data.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
  
    fetchData();
  }, []);

  // Trip'yler 찾기 필터링
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
      .post(`${apipath}/tripyler/list?isRecruiting=1&option=1`, requestData)
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

    router.push("/findTripyler");
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
    <Desktop>
      <S.Banner>
        <S.BannerImgWrapper>
          <S.BannerTitle>
            <S.TitleTxt>여행</S.TitleTxt>에
            <S.TitleTxt> 스타일</S.TitleTxt>을
            더하다
          </S.BannerTitle>
          <S.BannerTxt>
            함께 하고 싶은 여행자를 Trip’yle에서 바로 찾아보세요
          </S.BannerTxt>
        </S.BannerImgWrapper>
        <S.FindFilter>
          <S.FilterMainWrapper>
            <S.FilterMiddleWrapper>
            <S.FilterFrontWrapper>
              <S.FilterWrapper>
                <S.FilterTitleWrapper>
                  <S.FilterTitleImg src="icon/location.png"></S.FilterTitleImg>
                  <S.FilterTitleTxt>여행지</S.FilterTitleTxt>
                  {isCountry && (
                  <S.CountrySelectWrapper>
                    <S.ContinentSelect>
                      {destination.continent.map((des) => (
                        <S.ContinentContent id={des.id} onClick={onOpenCountry} selected={selectedDestination.continent.name === des.name}>{des.name}</S.ContinentContent>
                      ))}
                    </S.ContinentSelect>
                    <S.CountrySelect>
                      {destination.country.map((des) => (
                        <S.ContinentContent id={des.id} onClick={onOpenCity} selected={selectedDestination.country.name === des.name}>{des.name}</S.ContinentContent>
                      ))}
                    </S.CountrySelect>
                    <S.CitySelect>
                      {destination.city.map((des) => (
                        <S.ContinentContent 
                        id={des.id} 
                        onClick={(e) => {
                          setIsCountry(false); 
                          setSelectedDestination(prev => ({
                            ...prev,
                            city: {id: e.target.id ,name: e.target.innerText}
                          }));
                          setShowDestination(prev => ({
                            country: selectedDestination.country,
                            city: e.target.innerText
                          }))
                        }}
                        selected={selectedDestination.city.name === des.name}
                        >{des.name}</S.ContinentContent>
                      ))}
                    </S.CitySelect>
                  </S.CountrySelectWrapper>
                )}
                </S.FilterTitleWrapper>
                <S.Filter style={{ width: "280px" }} onClick={onOpenDestination}>
                  <S.FilterInput>{selectedDestination.city.name === "" ? "선택" : `${showDestination.country.name}, ${showDestination.city}`}</S.FilterInput>
                  <S.FilterBtn></S.FilterBtn>
                </S.Filter>
                
              </S.FilterWrapper>

            <S.FilterWrapper style={{position: "relative"}}>
              <S.FilterTitleWrapper>
                <S.FilterTitleImg src="icon/calendar.png"></S.FilterTitleImg>
                <S.FilterTitleTxt>일정</S.FilterTitleTxt>
              </S.FilterTitleWrapper>
              <S.DateFilterWrapper onClick={(e) => {isOpenCalendar ? setIsOpenCalendar(false) : setIsOpenCalendar(true)}}>
                <S.Filter style={{ width: "200px" }}>
                  <S.FilterInput>{tripDate.length === 0 ? `가는 날`: tripDate[0]}</S.FilterInput>
                  <S.FilterBtn></S.FilterBtn>
                </S.Filter>
                <S.DateLine></S.DateLine>
                <S.Filter style={{ width: "200px" }}>
                  <S.FilterInput>{tripDate.length === 0 ? `오는 날`: tripDate[1]}</S.FilterInput>
                  <S.FilterBtn></S.FilterBtn>
                </S.Filter>
              </S.DateFilterWrapper>
              {isOpenCalendar &&(
                <S.CalendarWrapper>
                  <Calendar
                    setIsOpenCalendar={setIsOpenCalendar}
                    setTripDate={setTripDate}
                    restrict={false}
                  />
                  
                </S.CalendarWrapper>
              )}
            </S.FilterWrapper>

            <S.FilterWrapper>
              <S.FilterTitleWrapper>
                <S.FilterTitleImg src="icon/user.png"></S.FilterTitleImg>
                <S.FilterTitleTxt>인원</S.FilterTitleTxt>
              </S.FilterTitleWrapper>
              <S.FilterSelect>
                <S.FilterMinusImg src="/icon/minus.png" onClick={(e) => setSelectedNum((prev) => prev <= 0 ? 0 : prev - 1)}></S.FilterMinusImg>
                <S.FilterNum>{selectedNum <= 0 ? "선택" : `${selectedNum}명`}</S.FilterNum>
                <S.FilterPlusImg src="/icon/plus.png" onClick={(e) => setSelectedNum((prev) => prev + 1)}></S.FilterPlusImg>
              </S.FilterSelect>
            </S.FilterWrapper>
          </S.FilterFrontWrapper>

            <S.FilterBackWrapper>
              <S.FilterWrapper>
                <S.FilterTitleWrapper>
                  <S.FilterTitleImg src="icon/searchBlack.png"></S.FilterTitleImg>
                  <S.FilterTitleTxt>검색</S.FilterTitleTxt>
                </S.FilterTitleWrapper>
                <S.Input 
                  style={{ width: "925px" }} 
                  placeholder="직접 입력"
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </S.FilterWrapper>
            </S.FilterBackWrapper>
            </S.FilterMiddleWrapper>
            <S.FilterFindBtn onClick={onClcickFilterFind}>
              <S.FilterFindBtnTxt>여행자 찾기</S.FilterFindBtnTxt>
              <S.BtnArrow src="icon/arrow.png"></S.BtnArrow>
            </S.FilterFindBtn>
          </S.FilterMainWrapper>
        </S.FindFilter>
      </S.Banner>

      <S.ContentWrapper>
        <S.ReviewTitleWrapper onClick={onClcickFilterFind}>
          <S.FindTripylerTitle>함께 동행할 Trip’yler를 만나보세요</S.FindTripylerTitle>
          <S.BtnBigArrow src="icon/move.png"></S.BtnBigArrow>
        </S.ReviewTitleWrapper>
        <S.Review>
          <S.SubTitleWrapper>
            <S.SubTitle><img src="/icon/location.png" width="25px" height="25px" /> 인기 여행지</S.SubTitle>
          </S.SubTitleWrapper>
          <S.FindTripylerContent>
            {response.map((res, idx) => {
            if(idx >= 0 && idx < 6)
            { return (
              <FindCard 
                key={res.tripylerId} 
                id={res.tripylerId} 
                idx={idx}
                info={res}
                onClick={() => {
                  if(!isLoggedIn) {
                    checkLogin();
                  } else {
                    if(!checkToken()){
                      router.push(`/findTripyler/${res.tripylerId}`);
                    }
                  }
                }}
              />
            )}})}
          </S.FindTripylerContent>
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
          <S.FindTripylerTitle>Trip'yler들의 여행 후기를 만나보세요</S.FindTripylerTitle>
          <S.BtnBigArrow src="icon/move.png"></S.BtnBigArrow>
        </S.ReviewTitleWrapper>
        <S.Review>
          <S.SubTitleWrapper>
            <S.SubTitle><img src="/icon/location.png" width="25px" height="25px" /> 인기 여행 후기</S.SubTitle>
          </S.SubTitleWrapper> 
        <S.FindTripylerContent>
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
          </S.FindTripylerContent>
          
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
      </Desktop>

      {/* 모바일 */}
      <>
        <S.Banner>
        <S.BannerImgWrapper>
          <S.BannerTitle>
            <S.TitleTxt>여행</S.TitleTxt>에
            <S.TitleTxt> 스타일</S.TitleTxt>을
            더하다
          </S.BannerTitle>
          <S.BannerTxt>
            함께 하고 싶은 여행자를 Trip’yle에서 바로 찾아보세요
          </S.BannerTxt>
        </S.BannerImgWrapper>
        <S.FindFilter>
          <S.FilterMainWrapper>
            <S.FilterMiddleWrapper>
            <S.FilterFrontWrapper>
              <S.FilterWrapper>
                <S.FilterTitleWrapper>
                  <S.FilterTitleImg src="icon/location.png"></S.FilterTitleImg>
                  <S.FilterTitleTxt>여행지</S.FilterTitleTxt>
                  {isCountry && (
                  <S.CountrySelectWrapper>
                    <S.ContinentSelect>
                      {destination.continent.map((des) => (
                        <S.ContinentContent id={des.id} onClick={onOpenCountry} selected={selectedDestination.continent.name === des.name}>{des.name}</S.ContinentContent>
                      ))}
                    </S.ContinentSelect>
                    <S.CountrySelect>
                      {destination.country.map((des) => (
                        <S.ContinentContent id={des.id} onClick={onOpenCity} selected={selectedDestination.country.name === des.name}>{des.name}</S.ContinentContent>
                      ))}
                    </S.CountrySelect>
                    <S.CitySelect>
                      {destination.city.map((des) => (
                        <S.ContinentContent 
                        id={des.id} 
                        onClick={(e) => {
                          setIsCountry(false); 
                          setSelectedDestination(prev => ({
                            ...prev,
                            city: {id: e.target.id ,name: e.target.innerText}
                          }));
                          setShowDestination(prev => ({
                            country: selectedDestination.country,
                            city: e.target.innerText
                          }))
                        }}
                        selected={selectedDestination.city.name === des.name}
                        >{des.name}</S.ContinentContent>
                      ))}
                    </S.CitySelect>
                  </S.CountrySelectWrapper>
                )}
                </S.FilterTitleWrapper>
                <S.Filter style={{ width: "280px" }} onClick={onOpenDestination}>
                  <S.FilterInput>{selectedDestination.city.name === "" ? "선택" : `${showDestination.country.name}, ${showDestination.city}`}</S.FilterInput>
                  <S.FilterBtn></S.FilterBtn>
                </S.Filter>
                
              </S.FilterWrapper>

            <S.FilterWrapper style={{position: "relative"}}>
              <S.FilterTitleWrapper>
                <S.FilterTitleImg src="icon/calendar.png"></S.FilterTitleImg>
                <S.FilterTitleTxt>일정</S.FilterTitleTxt>
              </S.FilterTitleWrapper>
              <S.DateFilterWrapper onClick={(e) => {isOpenCalendar ? setIsOpenCalendar(false) : setIsOpenCalendar(true)}}>
                <S.Filter style={{ width: "200px" }}>
                  <S.FilterInput>{tripDate.length === 0 ? `가는 날`: tripDate[0]}</S.FilterInput>
                  <S.FilterBtn></S.FilterBtn>
                </S.Filter>
                <S.DateLine></S.DateLine>
                <S.Filter style={{ width: "200px" }}>
                  <S.FilterInput>{tripDate.length === 0 ? `오는 날`: tripDate[1]}</S.FilterInput>
                  <S.FilterBtn></S.FilterBtn>
                </S.Filter>
              </S.DateFilterWrapper>
              {isOpenCalendar &&(
                <S.CalendarWrapper>
                  <Calendar
                    setIsOpenCalendar={setIsOpenCalendar}
                    setTripDate={setTripDate}
                    restrict={false}
                  />
                  
                </S.CalendarWrapper>
              )}
            </S.FilterWrapper>

            <S.FilterWrapper>
              <S.FilterTitleWrapper>
                <S.FilterTitleImg src="icon/user.png"></S.FilterTitleImg>
                <S.FilterTitleTxt>인원</S.FilterTitleTxt>
              </S.FilterTitleWrapper>
              <S.FilterSelect>
                <S.FilterMinusImg src="/icon/minus.png" onClick={(e) => setSelectedNum((prev) => prev <= 0 ? 0 : prev - 1)}></S.FilterMinusImg>
                <S.FilterNum>{selectedNum <= 0 ? "선택" : `${selectedNum}명`}</S.FilterNum>
                <S.FilterPlusImg src="/icon/plus.png" onClick={(e) => setSelectedNum((prev) => prev + 1)}></S.FilterPlusImg>
              </S.FilterSelect>
            </S.FilterWrapper>
          </S.FilterFrontWrapper>

            <S.FilterBackWrapper>
              <S.FilterWrapper>
                <S.FilterTitleWrapper>
                  <S.FilterTitleImg src="icon/searchBlack.png"></S.FilterTitleImg>
                  <S.FilterTitleTxt>검색</S.FilterTitleTxt>
                </S.FilterTitleWrapper>
                <S.Input 
                  style={{ width: "925px" }} 
                  placeholder="직접 입력"
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </S.FilterWrapper>
            </S.FilterBackWrapper>
            </S.FilterMiddleWrapper>
            <S.FilterFindBtn onClick={onClcickFilterFind}>
              <S.FilterFindBtnTxt>여행자 찾기</S.FilterFindBtnTxt>
              <S.BtnArrow src="icon/arrow.png"></S.BtnArrow>
            </S.FilterFindBtn>
          </S.FilterMainWrapper>
        </S.FindFilter>
      </S.Banner>

      <S.ContentWrapper>
        <S.ReviewTitleWrapper onClick={onClcickFilterFind}>
          <S.FindTripylerTitle>함께 동행할 Trip’yler를 만나보세요</S.FindTripylerTitle>
          <S.BtnBigArrow src="icon/move.png"></S.BtnBigArrow>
        </S.ReviewTitleWrapper>
        <S.Review>
          <S.SubTitleWrapper>
            <S.SubTitle><img src="/icon/location.png" width="25px" height="25px" /> 인기 여행지</S.SubTitle>
          </S.SubTitleWrapper>
          <S.FindTripylerContent>
            {response.map((res, idx) => {
            if(idx >= 0 && idx < 6)
            { return (
              <FindCard 
                key={res.tripylerId} 
                id={res.tripylerId} 
                idx={idx}
                info={res}
                onClick={() => {
                  if(!isLoggedIn) {
                    checkLogin();
                  } else {
                    if(!checkToken()){
                      router.push(`/findTripyler/${res.tripylerId}`);
                    }
                  }
                }}
              />
            )}})}
          </S.FindTripylerContent>
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
          <S.FindTripylerTitle>Trip'yler들의 여행 후기를 만나보세요</S.FindTripylerTitle>
          <S.BtnBigArrow src="icon/move.png"></S.BtnBigArrow>
        </S.ReviewTitleWrapper>
        <S.Review>
          <S.SubTitleWrapper>
            <S.SubTitle><img src="/icon/location.png" width="25px" height="25px" /> 인기 여행 후기</S.SubTitle>
          </S.SubTitleWrapper> 
        <S.FindTripylerContent>
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
          </S.FindTripylerContent>
          
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
    </>
  );
}
