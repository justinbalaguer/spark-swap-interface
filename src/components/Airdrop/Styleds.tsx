import styled, { css } from 'styled-components'
import { Text, Button } from '@sparkpointio/sparkswap-uikit'


export const AirdropBody = styled.div`
    position: relative;
    background: transparent;
    max-width: 1300px;
    width: 100%;
`
export const StyledAirdropTitle = styled.div`
    color: #fff;
    font
`

export const TaskContainer = styled.div`
    background: ${({ theme }) => (theme.isDark ? '#00152E' : '#FFFFFF')};
    padding: 2rem;
    @media ( max-width: 420px) {
        padding: 12px;
    }
`

export const TaskReward = styled.div`
    background: ${({ theme }) => (theme.isDark ? '#1B60A3' : '#006BF8')};
    padding: 1rem;
    margin: 1rem 0 1rem 0;
`

export const TaskItem = styled.div`
    background: ${({ theme }) => (theme.isDark ? '#1C304A' : '#EEEAF4')};
    padding: 1rem;
    margin: 1rem 0 1rem 0;
`

export const TaskTitle = styled(Text)`
    font-weight:500;
`

export const TaskDetails = styled(Text)`
    color: #7A8695;
`

export const TaskButton = styled(Button)`
    @media ( max-width: 420px) {
        padding: 5px;
    }
`

export const TaskRewardDetails = styled(Text)`

`

export const TaskDetailSection = styled.div`
    
`

export const TaskButtonSection = styled.div`
    
`