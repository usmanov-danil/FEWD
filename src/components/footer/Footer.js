import React from 'react';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <h1 style={{ color: "green",
                textAlign: "center",
                marginTop: "-50px" }}>
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>About</Heading>
                        <FooterLink href="https://ru.reactjs.org">React webpage</FooterLink>
                        <FooterLink href="https://css-tricks.com">CSS tricks</FooterLink>
                        <FooterLink href="https://jshint.com">JS hints</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Top 3 serials</Heading>
                        <FooterLink href="https://www.imdb.com/title/tt0475784/">WestWorld</FooterLink>
                        <FooterLink href="https://www.imdb.com/title/tt1190634/">Boys</FooterLink>
                        <FooterLink href="https://www.imdb.com/title/tt2560140/">Attack on Titans</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Funny videos</Heading>
                        <FooterLink href="https://www.youtube.com/watch?v=7yLxxyzGiko">Kitties</FooterLink>
                        <FooterLink href="https://www.youtube.com/watch?v=p1GIdRQj5Vo">Simpsons</FooterLink>
                        <FooterLink href="https://www.youtube.com/watch?v=XKctlwiQCF0">Rick & Morty</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Email</Heading>
                        <FooterLink href="mailto:d.usmanov@innopolis.university?subject=You got A grade!">Danil Usmanov d.usmanov@innopolis.university</FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;

