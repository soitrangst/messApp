import React, { useContext, useEffect } from "react";

import Loading from "../../animation/loading"

import Detail from "./tabs/detail"
import Friends from "./tabs/friends"
import "./create.scss";

import { StateContext } from "../../../context/globalState"

function Creates() {
  const { getListFriend, friend } = useContext(StateContext)
  // const getData = async () => {
  //   await getListFriend().then(res => res.json().then(data => setDoc(data.data))).catch(err => alert(err, 'at create'))
  //   setUpdate(!update)
  // }
  useEffect(() => {
    getListFriend()
  }, [])

  const _onSubmit = (...data) => {
    console.log(...data);

  }
  return (
    (friend.length > 0) ? <ViewChild doc={friend} _on1Submit={_onSubmit} /> : <Loading />
  );
}


export default Creates;

function ViewChild(props) {

  const { doc, _on1Submit } = props
  let data1
  let data2
  const createDetail = (...e) => {
    data1 = e
  }

  const createFriend = (...e) => {
    data2 = e
  }

  const _onSubmit = (e) => {
    e.preventDefault()
    _on1Submit(data1, data2)
  }

  return (
    <div className="h-100">
      <div className="d-flex flex-column h-100">
        <div className="hide-scrollbar1">
          <div className="container-fluid py-4">
            <h2 className="font-bold mb-4">Create group</h2>
            <form className="mb-4" >
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
            <ul className="nav nav-tabs nav-justified mb-4" role="tablist">
              <li className="nav-item">
                <a
                  href="#create-group-details"
                  className="nav-link active"
                  data-toggle="tab"
                  role="tab"
                  aria-selected="true"
                >
                  Details
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#create-group-members"
                  className="nav-link"
                  data-toggle="tab"
                  role="tab"
                  aria-selected="false"
                >
                  Members
                </a>
              </li>
            </ul>
            <div className="tab-content" role="tablist">
              {/* <!-- detail --> */}
              <Detail createData={createDetail} />
              <Friends data={doc} createFriend={createFriend} />
              {/* <!-- detail --> */}

            </div>
          </div>
        </div>
        <div className="pb-4">
          <div className="container-fluid">
            <button
              className="btn btn-lg btn-primary btn-block"
              type="button"
              onClick={_onSubmit}
            >
              Create group
              </button>
          </div>
        </div>

      </div>

    </div>


  )
}