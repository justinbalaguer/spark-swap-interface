
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

export const MainContainer = styled.div`
position: relative;
max-width: 1366px;
width: 100%;
z-index: 5;
min-height: 30vh;
padding: 10px;
height: auto; 
margin-top: 2rem;
@media ( max-width: 320px) {
  width: 300px;
}
`
const StyledDiv = styled.div`
    margin: 5px 0 10px 0;
`

export const HeaderContainer = styled(StyledDiv)`
    display: flex;
    flex-direction: column;
    line-height: 20px;
`

const StakeBoxGroup = styled(StyledDiv)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
    @media (max-width: 1024px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 450px) {
        grid-template-columns: repeat(1, 1fr);
    }

`

export const ActiveContainer = styled(StakeBoxGroup)`
    margin-bottom: 30px;
`
export const InactiveContainer = styled(StakeBoxGroup)`
    margin-top: 30px;
`

export function Divider () {
    const theme = useContext(ThemeContext)
    return (
        <hr style={{ borderColor: theme.colors.primary, margin: '15px 0px 15px 0px'}} />
    )
}