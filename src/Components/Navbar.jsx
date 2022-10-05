import React from "react";
import styled from 'styled-components'
import logotop from '../assets/LevelBlack-top.png';


const Container = styled.div`
height: 100px;
background-color: black;
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: start;
`;

const Center = styled.div`
flex: 1;
`;
const Logo = styled.div`
align-items: center;
width: 9rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItemLeft = styled.div`
padding: 5px;
background: rgb(113,112,113);
  background: linear-gradient(0deg, rgba(113,112,113,1) 12%, rgba(99,99,99,1) 38%, rgba(121,121,121,1) 64%, rgba(89,88,87,1) 94%);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
`;
const MenuItemRight = styled.div`
padding: 5px;
background: rgb(113,112,113);
  background: linear-gradient(0deg, rgba(113,112,113,1) 12%, rgba(99,99,99,1) 38%, rgba(121,121,121,1) 64%, rgba(89,88,87,1) 94%);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuItemLeft>Our Cars</MenuItemLeft>
          <MenuItemLeft>Get a Quote</MenuItemLeft>
        </Left>
        <Center>
          <Logo>
          <img src={logotop} alt="Level Black"/>
          </Logo>
          </Center>
        <Right>
          <MenuItemRight>About Us</MenuItemRight>
          <MenuItemRight>Contact Us</MenuItemRight>
        </Right>
      </Wrapper>
      </Container>
  );
};


           export default Navbar;