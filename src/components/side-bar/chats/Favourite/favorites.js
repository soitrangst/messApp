import React, { useContext } from "react";

import { StateContext } from "../../../../context/globalState"
import { Link } from "react-router-dom"
import Logo from "../../../../logo.svg"

export default function Favorites(props) {
    const { changMainView } = useContext(StateContext)
    return (
        <React.Fragment>
            <Link to="#" onClick={() => changMainView()} className="d-block text-reset mr-2 mr-lg-4">
                <div className="avatar avatar-sm avatar-online mb-3">
                    <img className="avatar-img"
                        src={Logo}
                        alt="Description" />
                </div>
                <div className="small">{props.data}</div>
            </Link>
        </React.Fragment>


    )
}