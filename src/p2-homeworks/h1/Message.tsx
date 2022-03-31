import React from 'react'
import clMes from './Message.module.css'

type MessageType={
    name:string,
    avatar: string,
    message: string,
    time: string
}

function Message(props: MessageType ) {
    return (
        <div className={clMes.message}>
            <div className={clMes.avatar}><p><img src={props.avatar}/></p> </div>
            <div className={clMes.join}>
                <div className={clMes.name}>{props.name}</div>
           <div className={clMes.text}>{props.message} </div>
            <div className={clMes.time}>{props.time}</div>
            </div>
            </div>
    )
}

export default Message
