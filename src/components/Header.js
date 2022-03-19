import React, { useState } from "react";
import Styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Style, Translate } from "@material-ui/icons";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  // console.log(cars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWraper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWraper>
        {cars &&
          cars.map((car, index) => (
            <li key={index} href="#">
              {car}
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}
const Container = Styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;  
  left: 0;
  right: 0;
`;
const Menu = Styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media screen and (max-width: 780px){
    display: none;
  }
`;
const RightMenu = Styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomMenu = Styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = Styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width:300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0%)" : "translateX(100%)")};
  transition: transform 0.2s ;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    a{
      font-weight: 500;
    }
  }
`;
const CloseWraper = Styled.div`
  display: flex;
  justify-content: flex-end;

`;
const CustomClose = Styled(CloseIcon)`
  cursor: pointer;
`;
export default Header;
