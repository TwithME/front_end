import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../src/pages/auth/login/login.container";
import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
        {/* 메인페이지 */}
        <Route path="/login" element={<LoginPage />} />
        {/* 없는 경로로 갈 경우 로그인 페이지로 강제 이동 */}
        <Route path="/*" element={<Navigate to="/login"></Navigate>}></Route>
      </Routes>
    </div>
  );
}

export default App;
