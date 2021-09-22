import React from 'react';
import logo from '../../static/white.png'
import {
    Box,
    Container,
    Row,
    Column,
    HeaderLink, Logo, Title,
} from "./HeaderStyles";


const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Logo src={logo} />
                    </Column>
                    <Column>
                        <Title href="/">FEWD HW2</Title>
                    </Column>
                    <Column>
                        <HeaderLink href="/login">Login</HeaderLink>
                    </Column>
                    <Column>
                        <HeaderLink href="/register">Register</HeaderLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;

