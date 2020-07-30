import React, { useContext, useEffect } from "react";

import { StateContext } from "../../../context/globalState"

import Favorites from "./Favourite/favorites"
import ChatBox from "./Favourite/chatBox"
import Loading from "../../animation/loading"
import "./chats.scss";

function Chats() {
  const { getListChatRoom, chatRoom, changMainView } = useContext(StateContext)
  useEffect(() => {
    getListChatRoom()
  }, [])
  // const Fetch = async () => {
  //   const response = await getListChatRoom().then(res => res)
  //   const data = await response.json()
  //   await setMesList(data)
  //   console.log(data)
  //   setIsLoading(false)
  // }
  const favList = [1, 2, 34, 4, 5, 6, 7, 8, 9, 0]
  return (
    (chatRoom.length === 0) ? <Loading /> :
      <div className="h-100 ">
        <div className="d-flex flex-column h-100">
          <div className="hide-scrollbar">
            <div className="container-fluid py-4">
              <h2 className="font-bold mb-4">Chats</h2>
              <form className="mb-4">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search for messages or users..."
                    aria-label="Search for messages or users..."
                  ></input>
                  <div className="input-group-append">
                    <button
                      className="btn btn-lg btn-ico btn-secondary btn-minimal"
                      type="submit"
                    >
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
              <div className="text-center data-horizontal-scroll hide-scrollbar d-flex my-7 mb-2">
                {favList.map(e => <Favorites key={e} data={e} />)}
              </div>
              <nav className="nav d-block list-discussions-js mb-n4 ">
                {chatRoom.map(e => <ChatBox key={e._id} data={e} changMainView={changMainView} />)}
              </nav>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Chats;
