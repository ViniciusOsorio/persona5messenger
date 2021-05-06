import React, { Component } from 'react';
import { ChatBackground,
         Logo,
         ChatArea,
         UserInput } from './ChatStyled.js';


class Chat extends Component {
    render = () => {
        return(
            <ChatBackground>
                <Logo>IM</Logo>
                <ChatArea>
                   <Logo>Teste</Logo>
                   <UserInput/>
                </ChatArea>                
            </ChatBackground>
        )
    }
}

export default Chat;