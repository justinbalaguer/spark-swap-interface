import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Text } from '@sparkpointio/sparkswap-uikit'
import { ActiveContainer, InactiveContainer, MainContainer, HeaderContainer, Divider } from './styled'
import StakeBox from './Stakebox'


export default function LiquidityStaking() {
    const theme = useContext(ThemeContext)
 
  return (
    <MainContainer>
      <HeaderContainer>
        <Text fontSize="24px" bold>
          Active Liquidity Pools
        </Text>
        <Text fontSize="16px">Stake LP tokens to earn</Text>
      </HeaderContainer>
      <ActiveContainer>
        <StakeBox /> <StakeBox />  <StakeBox />
      </ActiveContainer>
      <Divider />
      <InactiveContainer>
        <StakeBox />  <StakeBox /> <StakeBox />
      </InactiveContainer>
    </MainContainer>
  )
}
