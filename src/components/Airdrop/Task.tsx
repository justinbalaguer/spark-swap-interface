import React from 'react'
import { Text, Button } from '@sparkpointio/sparkswap-uikit'
import { AutoColumn } from '../Column'
import { AutoRow, RowBetween, RowFixed } from '../Row'
import { TaskItem, TaskDetailSection, TaskButtonSection, TaskTitle, TaskDetails, TaskButton} from './Styleds'

export default function TaskItemContainer({
    title,
    details,
    status
}){

    let btnVariant

    if(status === "ONGOING"){
        btnVariant = "success"
    }else if(status === "CONNECT"){
        btnVariant = "secondary"
    }


    return(
        <TaskItem>
            <RowBetween>
                <TaskDetailSection>
                    <AutoColumn>
                            <TaskTitle fontSize="25px" className="task-title">
                                {title}
                            </TaskTitle>
                            <TaskDetails fontSize="18px">
                                {details}
                            </TaskDetails>
                    </AutoColumn>
                </TaskDetailSection>
                <TaskButtonSection>
                    <AutoColumn>
                        <TaskButton
                            variant={btnVariant}
                        >
                            {status}
                        </TaskButton>
                    </AutoColumn>
                </TaskButtonSection>
            </RowBetween>
        </TaskItem>
    )
}