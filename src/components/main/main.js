import React, { useContext } from 'react';

import Setting from "./setting/setting";
import ChatView from "./chatView/chatView";

import { StateContext } from "../../context/globalState"

import "./main.scss"

function Main(props) {
    const { mainView, toggleMain, chatside, toggleChatSide } = useContext(StateContext)
    const newMess = []
    const updateMess = (e) => [
        newMess.push(e)
    ]
    return (
        mainView.screen === "Setting" ?
            <Setting toggleMain={toggleMain} /> :
            <ChatView key={mainView.data._id}
                toggleMain={toggleMain}
                chatside={chatside}
                toggleChatSide={toggleChatSide}
                mainView={mainView}
                newMess={newMess}
                updateMess={updateMess}
            />
    )
}


export default Main;
