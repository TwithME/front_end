import styled from "@emotion/styled";

export const Title = styled.div`
  width: 1400px;
  height: 65px;
  margin: auto;
  margin-bottom: 50px;
  background-color: rgba(255, 82, 81, 0.6);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0px 25px;

  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
`;

export const Contents = styled.div`
  width: 1400px;
  margin: auto;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 5px 20px 3px rgba(153, 153, 153, 0.25);
`;

export const ContentsImgWrapper = styled.div`
  width: 100%;
  height: 380px;
  overflow: hidden;
  margin-bottom: 70px;
`;

export const ContentsImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ContentsTitle = styled.div`
  width: 1200px;
  color: #FF5251;
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const UserWrapper = styled.div`
  width: 1200px;
  margin: auto;
  margin-bottom: 70px;
  padding: 30px 0px;
  display: flex;
  align-items: flex-end;
  gap: 30px;
  border-top: 1px solid rgba(214, 214, 214, 0.6);
  border-bottom: 1px solid rgba(214, 214, 214, 0.6);
`;

export const UserImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: aliceblue;
  overflow: hidden;
`;

export const UserImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const UserTxtWrapper = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
`;

export const UserID = styled.div`
  margin-bottom: 20px;
  color: #c8b6ff;
  font-size: 30px;
  font-weight: 600;
`;

export const UserInfo = styled.div`
  color: #666;
  font-size: 25px;
  font-weight: 500;
`;

export const UserStyleWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const UserStyle = styled.div`
  border-radius: 30px;
  background-color: #FF5251;
  padding: 8px 18px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
`;

export const ContentsSubTitle = styled.div`
  width: 1200px;
  color: #FF5251;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 35px;
`;

export const IntroduceBox = styled.div`
  width: 1200px;
  min-height: 300px;
  margin: auto;
  margin-bottom: 50px;
  padding: 50px 40px;
  border-radius: 20px;
  background: rgba(167, 167, 167, 0.15);

  color: rgba(0, 0, 0, 0.8);
  font-size: 20px;
  font-weight: 500;
`;

export const SendMsgForm = styled.form`
  width: 1400px;
  height: 100px;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  /* box-shadow: 0px 5px 20px 3px rgba(153, 153, 153, 0.25); */
  border-top: 1px solid rgba(214, 214, 214, 0.6);
`;

export const SendMsgInput = styled.input`
  width: 1200px;
  height: 70px;
  color: #666666;
  font-size: 20px;
  font-weight: 500;
  border: none;
`;

export const SendMsgBtn = styled.button`
  color: #000;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const BtnWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
`;

export const RejectBtn = styled.button`
  padding: 15px 30px;
  border-radius: 50px;
  background: #ffffff;
  border: 1px solid #FF5251;

  color: #FF5251;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const AcceptBtn = styled(RejectBtn)`
  background: #FF5251;
  color: #fff;
`;

export const AfterBtn = styled(RejectBtn)`
  padding: 20px 40px;
  border: none;
  background: #999;
  opacity: 0.8;
  color: #fff;
  cursor: default;
`;
