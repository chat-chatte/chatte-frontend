import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";





export default function TopNavbar({bg}) {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);



  return (
    <>
        <Sidebar bg ={bg} sidebarOpen={sidebarOpen} theme={{variant: "black" }} toggleSidebar={toggleSidebar} />
        {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
        <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
          <NavInner className="container flexSpaceCenter">
            <Link className="pointer flexNullCenter" to="home" smooth={true}>

              <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
                CHATTE
              </h1>
            </Link>
            <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
              <BurgerIcon />
            </BurderWrapper>
            <UlWrapper className="flexNullCenter">
              <li className="semiBold font15 pointer">
                <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                  Services
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link activeClass="active" style={{ padding: "10px 15px" }} to="blog" spy={true} smooth={true} offset={-80}>
                  Feedbacks
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link activeClass="active" style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
                  Planos
                </Link>
              </li>
            </UlWrapper>
            <UlWrapperRight className="flexNullCenter">
              <li className="semiBold font15 pointer flexCenter">
                <a href="/" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                  Cadastrar
                </a>
              </li>
            </UlWrapperRight>
          </NavInner>
        </Wrapper>
    </>
  );
}


const Wrapper = styled.nav`
  background-color: #000000;
  width: 100%;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


