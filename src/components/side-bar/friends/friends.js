import React, { useContext, useEffect } from "react";

import ListFriends from "./ListFriends/listFriends"

import { StateContext } from "../../../context/globalState"

import Loading from "../../animation/loading"
import "./friends.scss"

function compare_item(a, b) {
  if (a.name < b.name) {
    return 1;
  } else if (a.name > b.name) {
    return -1;
  } else {
    return 0;
  }
}

function Friends() {
  const { getListFriend, friend } = useContext(StateContext)
  // const [doc, setDoc] = useState([])
  // const getData = async () => {
  //    await getListFriend().then(res => res.json().then(data => setDoc((data.data.sort(compare_item))))).catch(err => alert(err, 'at Friend tab'))
  //   setUpdate(!update)
  // }
  useEffect(() => {
    getListFriend()
  }, [])

  return (
    (friend.length === 0) ? <Loading /> :
      <div className="h-100 ">
        <div className="d-flex flex-column h-100">
          <div className="hide-scrollbar">
            <div className="container-fluid py-4">
              <h2 className="font-bold mb-4">Friends</h2>
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
              <button type="button"
                className="btn btn-lg btn-block btn-secondary d-flex align-items-center justify-content-between mb-6"
                data-toggle="modal" data-target="#invite-friends">
                Invite friends
                <i className="fas fa-users"></i>
              </button>
              <nav className="mb-n6">
                {(friend.sort(compare_item)).map((e) => <ListFriends key={e._id} data={e} />)}
              </nav>
            </div>
          </div>
        </div>
      </div>
  );

}

export default Friends;
