import React, { useContext, useEffect } from "react";

import "./user.scss"
import { Link, useHistory } from "react-router-dom";
import { StateContext } from "../../../context/globalState"

import Loading from "../../animation/loading"

const defaultAvarta = "https://1.bp.blogspot.com/-m3UYn4_PEms/Xnch6mOTHJI/AAAAAAAAZkE/GuepXW9p7MA6l81zSCnmNaFFhfQASQhowCLcBGAsYHQ/s1600/Cach-Lam-Avatar-Dang-Hot%2B%25281%2529.jpg"

function User() {
  const { logOut, changMainView, mainView, toggleMain, getInfor, infor } = useContext(StateContext)
  let history = useHistory();
  let x
  const buttonLogout = () => {
    logOut(
      () => history.push("login")
    )
    window.location.reload()
  }
  useEffect(() => {
    getInfor()
  }, [x])

  // const loadingData = async () => {
  //   await getInfor()
  //     .then(res => res.json().then(data => setInfor(data)))
  //     .catch(err => alert(err, "at user"))
  //   setIsLoading(false)
  // }

  return (
    !infor ?
      <Loading /> :
      <ViewData
        user={infor}
        buttonLogout={buttonLogout}
        mainView={mainView}
        changMainView={changMainView}
        toggleMain={toggleMain}
      />
  );
}


export default User;

function ViewData(props) {
  const { user, buttonLogout, changMainView, mainView, toggleMain } = props
  return (
    <div className="h-100">
      <div className="d-flex flex-column h-100">
        <div className="hide-scrollbar-user">
          <div className="container-fluid py-4">
            <h2 className="font-bold mb-4">Profile</h2>
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
            <div className="card mb-4">
              <div className="card-body">
                <div className="text-center py-4">
                  <div className="avatar avatar-xl mx-auto mb-5">
                    <img className="avatar-img"
                      src={(user.urlavatar) ? (user.urlavatar) : defaultAvarta}
                      alt="AvUser" />
                  </div>
                  <h5> {user.name} </h5>
                  <p className="text-muted"> {user.bio}</p>
                </div>
              </div>
            </div>
            {/* contact */}
            <div className="card mb-4">
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-0 py-4">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <p className="small text-muted mb-0">Address</p>
                        <p>HCM,D1 </p>
                      </div>
                    </div>
                  </li>

                  <li className="list-group-item px-0 py-4">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <p className="small text-muted mb-0">Phone</p>
                        <p> {user.phone} </p>
                      </div>
                    </div>
                  </li>

                  <li className="list-group-item px-0 py-4">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <p className="small text-muted mb-0">Email</p>
                        <p> {user.email} </p>
                      </div>
                    </div>
                  </li>

                  <li className="list-group-item px-0 py-4">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <p className="small text-muted mb-0">Time</p>
                        <p>10:03 am</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* contact */}
            {/* social */}
            <div className="card mb-4">
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-0 py-4">
                    <Link to="" className="media text-muted">
                      <div className="media-body align-self-center">
                        Twitter
                      <p> {user.twitter} </p>
                      </div>
                      <i className="fab fa-twitter text-primary"></i>
                    </Link>
                  </li>

                  <li className="list-group-item px-0 py-4">
                    <Link to="" className="media text-muted">
                      <div className="media-body align-self-center">
                        Facebook
                      <p> {user.facebook} </p>
                      </div>
                      <i className="fab fa-facebook-f text-primary"></i>
                    </Link>
                  </li>

                  <li className="list-group-item px-0 py-4">
                    <Link to="" className="media text-muted">
                      <div className="media-body align-self-center">
                        Github
                      <p> {user.github} </p>
                      </div>
                      <i className="fab fa-github"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* social */}
            {/* setting */}
            <div className="form-row">
              <div className="col">

                <Link to="#" style={{ 'textDecoration': 'none' }}>
                  <button type="button"
                    onClick={() => {
                      changMainView({ ...mainView, screen: 'Setting' })
                      toggleMain()
                    }}
                    className="btn btn-lg btn-block btn-basic d-flex justify-content-between align-items-center">
                    Settings
                  <i className="fas fa-cog text-right"></i>
                  </button>
                </Link>
              </div>

              <div className="col">

                <button type="button" onClick={buttonLogout}
                  className="btn btn-lg btn-block btn-basic d-flex justify-content-between align-items-center">
                  Logout
                  <i className="fas fa-sign-out-alt text-right"></i>
                </button>
              </div>
            </div>
            {/* setting */}
          </div>
        </div>
      </div>
    </div>

  )
}