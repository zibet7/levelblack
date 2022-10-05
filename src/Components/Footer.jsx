import styled from "styled-components";
import logotop from '../assets/LevelBlack-top.png';

const Container = styled.div`
display: flex;`;

const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
`;
const Center = styled.div`
flex:1`;
const Right = styled.div`
flex:1`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>
                <img src={logotop} alt="Level Black"/>
                </Logo>
            </Left>
            <Center></Center>
            <Right>
            <FooterItemRight>
            <a href="mailto:sales@levelblack.com" className="customgradient2">sales@levelblack.com</a></FooterItemRight>
            <MenuItemLeft>Get a Quote</MenuItemLeft>
            </Right>

        </Container>
    )
}

export default Footer