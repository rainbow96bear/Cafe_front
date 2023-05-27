import { Routes, Route } from "react-router-dom";

import HeaderContainer from "./components/header/HeaderContainer";
import MainContainer from "./components/main/MainContainer";
import AdminContainer from "./components/admin/AdminContainer";

function App() {
  return (
    <div>
      <HeaderContainer></HeaderContainer>
      <Routes>
        <Route path="/" element={<MainContainer></MainContainer>}></Route>
        <Route
          path="/admin"
          element={<AdminContainer></AdminContainer>}></Route>
      </Routes>
    </div>
  );
}

export default App;
