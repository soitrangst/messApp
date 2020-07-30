import React, { createContext, useState, useEffect } from 'react'

import apiURL from "./api"

export const StateContext = createContext();
//haven't alert error when fetch fail
const GlobalStateProvider = (props) => {

    const [mainView, setMainView] = useState({ screen: 'Setting', data: '' })
    // const [checkMainView, setCheckMainView] = useState({ screen: 'Setting' })
    const [hide, setHide] = useState(false)
    const [chatside, setChatSide] = useState(false)
    const [updateAccessToken, setUpdateAccessToken] = useState(true)
    const [friend, setFriend] = useState([])
    const [chatRoom, setChatRoom] = useState([])
    const [infor, setInfor] = useState([])
    //  const [chatBox, setChatBox] = useState()
    //     description: "",
    //     list_id_member: [],
    //     message: [],
    //     name: "",
    //     photoUrl: "",
    //     topic: "",
    //     _id: "",
    //     __v: ""

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setTimeout(
                () => {
                    setUpdateAccessToken(!updateAccessToken)
                    updateToken()
                }
                , 3000000)
        }
        //getListChatRoom()
    }, [updateAccessToken])

    function updateToken() {

        const requestOption = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token: localStorage.getItem('refreshToken') })
        }
        fetch(apiURL.refeshToken, requestOption)
            .then(res => res.json().then(token => localStorage.setItem('acessToken', token.accessToken)).catch(err => { throw err }))
            .catch(err => alert('update token failed'))

    }

    function changMainView(e) {
        setMainView(e)
        toggleMain()
        // if (e.screen !== mainView.screen) {
        //     setCheckMainView({ screen: e.screen })
        // }
    }

    function toggleMain() {
        setHide(!hide)
    }

    function toggleChatSide() {
        setChatSide(!chatside)
    }

    function authenticate(data, cb) {
        const requestOption = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
        fetch(apiURL.login, requestOption)
            .then(res => {
                if (res.status === 200) {
                    (async function () {
                        await res.json().then(data => {
                            localStorage.setItem('auth', true)
                            localStorage.setItem('acessToken', data.accessToken)
                            localStorage.setItem('refreshToken', data.refreshToken)
                            getInfor()
                            setUpdateAccessToken(!updateAccessToken)
                        })
                        cb()
                    })()
                } else {
                    throw Error
                }
            })
            .catch(err => {
                alert('Authnetication fail')
            })
    }

    function logOut(cb) {
        localStorage.clear()
        setTimeout(cb, 100);
    }

    async function getInfor() {
        const requestOption = {
            method: 'GET',
            headers: { "Authorization": `Bearer ${localStorage.getItem('acessToken')}` },
        }
        const res = await (await fetch(apiURL.inforUser, requestOption)).json()
        localStorage.setItem('userID', res._id)
        setInfor(res)
    }

    function updateInfor(infor) {
        // for (var pair of infor.entries()) {
        //     console.log(pair[0] + ', ' + pair[1]);
        // };

        const requestOption = {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('acessToken')}`,
            },
            body: infor
        }
        return fetch(apiURL.updateAcount, requestOption)
    }

    function security(password) {
        const requestOption = {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('acessToken')}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify(password)
        }
        fetch(apiURL.security, requestOption)
            .then(res => res.json().then(response => console.log(response)))
            .catch(err => console.log(err)
            )
    }

    async function getListFriend() {
        const requestOption = {
            method: 'GET',
            headers: { "Authorization": `Bearer ${localStorage.getItem('acessToken')}` },
        }
        const res = await (await fetch(apiURL.listFriend, requestOption)).json()
        setFriend(res.data)
    }

    async function getListChatRoom() {
        const requestOption = {
            method: 'GET',
            headers: { "Authorization": `Bearer ${localStorage.getItem('acessToken')}` },
        }
        const res = await (await fetch(apiURL.listChatRoom, requestOption)).json()
        setChatRoom(res)
    }

    function createRoomChat() {
        const requestOption = {
            method: 'POST',
            headers: { "Authorization": `Bearer ${localStorage.getItem('acessToken')}` },
        }
        return fetch(apiURL.createRoomChat, requestOption)
    }

    return (
        <StateContext.Provider value={{
            mainView, hide, chatside, friend, chatRoom, infor,
            changMainView, toggleMain, toggleChatSide,
            authenticate, logOut, updateInfor, getInfor,
            security, getListFriend, getListChatRoom,
        }}>
            {props.children}
        </StateContext.Provider>
    )

}

export default GlobalStateProvider