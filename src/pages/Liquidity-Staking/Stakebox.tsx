import React from 'react'
import styled from 'styled-components';
import { Divider } from './styled';

const Container = styled.div`
    height: 500px;
    border: 2px solid ${({theme}) => theme.colors.primary};
    background-color: ${({ theme }) => (theme.isDark ? theme.colors.modal : '#FFFFFF')};
    padding: 15px;
`
const Header = styled.div`
    border: 1px solid red;
    width: 100%;
    
`

const Body = styled.div`
    border: 1px solid orange;
    width: 100%;
`

const Footer = styled.div`
    border: 1px solid yellow;
    width: 100%;
`


export default function StakeBox(props) {
    return (
        <Container>
            <Header> Heading </Header>
            <Divider />
            <Body> Body </Body>
            <Footer>Footer </Footer>
        </Container>
    )
}