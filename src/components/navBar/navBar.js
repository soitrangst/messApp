import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { StateContext } from "../../context/globalState"

import logo from "../../logo.svg";
import "./navBar.scss";

function NavBar() {

  const { changMainView, toggleMain, mainView } = useContext(StateContext)

  return (
    <div className="navigation navbar navbar-light justify-content-center py-xl-7">
      {/* Logo */}
      <Link className="d-none d-xl-block mb-6" to="">
        <img src={logo} alt="#" width="100" height="50" />
      </Link>
      {/* Logo */}

      <ul
        role="tablist"
        className="nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between justify-content-xl-center py-3 py-lg-0"
      >
        <li className="nav-item d-none d-xl-block invisible flex-xl-grow-1 ">
          <Link className="nav-link position-relative p-0 py-xl-3" to="#">
            <i className="fas fa-plus-square"></i>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link position-relative p-0 py-xl-3"
            title="Create chat"
            to=""
          >
            <i className="fas fa-plus-square"></i>
          </Link>
        </li>
        <li className="nav-item mt-xl-9">
          <Link
            className="nav-link position-relative p-0 py-xl-3"
            to="friends"
            title="Friends"
          >
            <i className="fas fa-users"></i>
          </Link>
        </li>
        <li className="nav-item mt-xl-9">
          <Link
            className="nav-link position-relative p-0 py-xl-3"
            to="dialogs"
            title="Chats"
          >
            <i className="far fa-comment-dots"></i>
          </Link>
        </li>
        <li className="nav-item mt-xl-9">
          <Link
            className="nav-link position-relative p-0 py-xl-3"
            to="user"
            title="User"
          >
            <i className="fas fa-user-circle"></i>
          </Link>
        </li>
        <li className="nav-item d-none d-xl-block invisible flex-xl-grow-1 ">
          <Link to="#" className="nav-link position-relative p-0 py-xl-3">
            <i className="fas fa-plus-square"></i>
          </Link>
        </li>
        <li className="nav-item mt-xl-9">
          <Link
            className="nav-link position-relative p-0 py-xl-3"
            to="#"
            onClick={() => {
              changMainView({ ...mainView, screen: 'Setting' })
              toggleMain()
            }}
            title="Setting"
          >
            <i className="fas fa-cog"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar 
