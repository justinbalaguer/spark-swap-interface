import React from 'react'
import { CardBody, ArrowDownIcon, Button, IconButton, Text, useModal } from '@sparkpointio/sparkswap-uikit'
import { ArrowWrapper, BottomGrouping, SwapCallbackError, Wrapper, StyledCardBody, StyledAutoColumn, StyledSwapDetails, StyledSwapButtonGroup, StyledConnectButtonGroup, CustomStyleCard} from 'components/swap/styleds'
import { AutoColumn } from 'components/Column'
import { AutoRow } from 'components/Row'
import { useExpertModeManager, useUserDeadline, useUserSlippageTolerance } from 'state/user/hooks'
import {AirdropBody, TaskContainer, TaskReward, TaskItem} from 'components/Airdrop/Styleds'
import TaskItemContainer from 'components/Airdrop/Task'
import Modal from 'components/Modal'

import AppBody from '../AppBody'





const Airdrop = () => {
    const [isExpertMode] = useExpertModeManager()

    const handleTwitter = () => {
        return(
            console.log("Twitter")
        )
    }

    const handleTelegram = () => {
        return(
            console.log("Telegram")
        )
    }

    const handleWallet = () => {
        return(
            console.log("Wallet")
        )
    }

    const handleGoogle = () => {
        return(
            console.log("Google")
        )
    }
    
    return(
        

            <AirdropBody>
                <Text fontSize="40px">
                    SparkSwap DEX Airdrop
                </Text>
                <TaskContainer>
                    <Text fontSize="30px">
                        Task/Requirements
                    </Text>
                    <TaskReward>
                        <Text fontSize="20px" color='#fff'>
                            Complete the following tasks and earn $10 worth of SRK or SFUEL
                        </Text>
                    </TaskReward>
                    <TaskItemContainer
                        title = "Twitter"
                        details = "Follow, retweet, tag 3 people, change your profile photo to SparkSwap logo with caption"
                        status = "ONGOING"
                        onClick = {handleTwitter}
                    />
                    <TaskItemContainer
                        title = "Telegram"
                        details = "Join SparkDeFi &amp; SparkPoint Community"
                        status = "ONGOING"
                        onClick = {handleTelegram}
                    />
                    <TaskItemContainer
                        title = "Wallet address Whitelist"
                        details = "Be part of SparkSwap Whitelist"
                        status = "ONGOING"
                        onClick = {handleWallet}
                    />
                    <TaskItemContainer
                        title = "Fill out Google form"
                        details = "Fill out Google form when you finish the tasks/requirements"
                        status = "CONNECT"
                        onClick = {handleGoogle}
                    />
                </TaskContainer>
            </AirdropBody>
        
    )

}

export default Airdrop