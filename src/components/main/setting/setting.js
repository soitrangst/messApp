import React from "react";

import { Link } from "react-router-dom"

import Account from "./form/account"
import Notification from "./form/notification"
import Security from "./form/security"
import Social from "./form/social"


function Setting(props) {
  //const { toggleMain } = useContext(StateContext)
  const { toggleMain } = props
  return (
    <div className="chat" >
      <div className="chat-body">
        <div className="chat-header border-bottom py-4 py-lg-4 px-lg-5">
          <div className="container-xxl">
            <div className="row align-items-center">
              <div className="col-3 d-xl-none">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <Link className="text-muted px-0" to="#" onClick={toggleMain}>
                      <i className="fas fa-chevron-left ml-2"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-xl-6">
                <div className="media text-center text-xl-left">
                  <div className="media-body align-self-center text-truncate">
                    <h6 className="text-truncate mb-n1">Settings</h6>
                    <small className="text-muted">Update your profile details</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-content px-lg-4">
          <div className="container-xxl py-4 py-lg-4">
            <div className="mb-n4 mb-lg-5">
              <div className="card-columns">
                <Account />
                <Notification />
                <Security />
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Setting;
