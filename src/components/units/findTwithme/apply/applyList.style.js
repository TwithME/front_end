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

export const PageInfo = styled.div`
  width: 1400px;
  margin: auto;
  margin-bottom: 90px;
  padding: 40px 45px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: #fff;
  box-shadow: 0px 5px 20px 3px rgba(153, 153, 153, 0.25);
`;

export const PageInfoTxt = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: 24px;
  font-weight: 500;
`;

export const ApplyListSection = styled.div`
  width: 1400px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const ListInfo = styled.div`
  color: #666;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 35px;
`;

export const ApplyListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ApplyList = styled.div`
  width: 680px;
  height: 170px;
  border-radius: 10px;
  background: #f5f3f3;
  display: flex;
  align-items: center;
  padding: 30px 20px;
  margin-bottom: 40px;
  cursor: pointer;
`;

export const UserImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 30px;
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
  display: flex;
  flex-direction: column;
  margin-right: 30px;
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
