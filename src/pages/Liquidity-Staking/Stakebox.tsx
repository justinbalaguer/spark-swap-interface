import { Button, Text } from '@sparkpointio/sparkswap-uikit'
import { AutoColumn } from 'components/Column'
import DoubleCurrencyLogo from 'components/DoubleLogo'
import Row, { RowBetween, RowFixed } from 'components/Row'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Divider } from './styled'

const Container = styled.div`
  height: 500px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => (theme.isDark ? theme.colors.modal : '#FFFFFF')};
  padding: 15px;
  display: grid;
  grid-template-rows: 0.3fr 0.1fr 1fr 0.5fr;
`
const Header = styled(AutoColumn)`
  width: 100%;
`
const StyledRow = styled(RowBetween)`
  align-items: flex-start;
`

const Body = styled(AutoColumn)`
  width: 100%;
`

const Footer = styled(AutoColumn)`

  width: 100%;
  text-align: center;
  align-items: center;
`

const mockSRK = {
  decimals: 18,
  symbol: 'SRK',
}

const mockBNB = {
  decimals: 18,
  name: 'Binance',
  symbol: 'BNB',
}

export default function StakeBox(props) {
    const theme = useContext(ThemeContext);
  return (
    <Container>
      <Header>
        <StyledRow>
          <RowFixed>
            <Text fontSize="24px" bold>
              {' '}
              Stake SRK-ETH <br /> UNI-V2 to <br /> earn SRK
            </Text>
          </RowFixed>
          <RowFixed>
            <DoubleCurrencyLogo currency0={mockBNB} currency1={mockSRK} size={50} />
          </RowFixed>
        </StyledRow>
      </Header>
      <Divider />
      <Body>
        <StyledRow>
          <RowFixed>
            <Text bold fontSize="20px">
              {' '}
              Total Deposit{' '}
            </Text>
          </RowFixed>
          <RowFixed>
            <Text color={theme.colors.textSubtle}> 1,000,000.00 UNI-V2 </Text>
          </RowFixed>
        </StyledRow>
        <StyledRow>
          <RowFixed>
            <Text bold fontSize="20px"> Pool Rate </Text>
          </RowFixed>
          <RowFixed>
            <Text color={theme.colors.textSubtle}> 12345 SRK/WEEK </Text>
          </RowFixed>
        </StyledRow>
        <StyledRow>
          <RowFixed>
            <Text bold fontSize="20px"> Your rate </Text>
          </RowFixed>
          <RowFixed>
            <Text color={theme.colors.textSubtle}>  0 SRK/week </Text>
          </RowFixed>
        </StyledRow>
        <StyledRow>
          <RowFixed>
            <Text bold fontSize="20px"> Duration </Text>
          </RowFixed>
          <RowFixed>
            <Text color={theme.colors.success}> Ends in 10 days </Text>
          </RowFixed>
        </StyledRow>
      </Body>
      <Footer>
        <Button fullWidth>Connect Wallet</Button>
        <Text color={theme.colors.textSubtle}>This will only work on Binance Smart Chain</Text>
      </Footer>
    </Container>
  )
}
