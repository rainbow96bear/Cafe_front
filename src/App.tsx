import { Routes, Route } from "react-router-dom";

import HeaderContainer from "./components/header/HeaderContainer";
import MainContainer from "./components/main/MainContainer";
import AdminContainer from "./components/admin/AdminContainer";
import { styled } from "styled-components";
import FooterContainer from "./components/footer/FooterContainer";

function App() {
  return (
    <AppBox>
      <HeaderBox>
        <HeaderContainer></HeaderContainer>
      </HeaderBox>
      <BodyBox>
        <Routes>
          <Route path="/" element={<MainContainer></MainContainer>}></Route>
          <Route
            path="/admin/*"
            element={<AdminContainer></AdminContainer>}></Route>
        </Routes>
      </BodyBox>
      <FooterBox>
        <FooterContainer></FooterContainer>
      </FooterBox>
    </AppBox>
  );
}

export default App;
const AppBox = styled("div")({});
const HeaderBox = styled("div")({
  height: "80px",
});

const BodyBox = styled("div")({});
const FooterBox = styled("div")({});
