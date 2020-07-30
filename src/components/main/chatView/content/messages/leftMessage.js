import React from 'react'

import { Link } from "react-router-dom"

function LeftMessages(props) {
    const { orthermess } = props

    const time = () => {
        let from = Date.parse(orthermess.createdAt)
        let timeMess = Date.now() - from
        return Math.floor(timeMess % 60)
    }

    function createMarkup() {
        return { __html: orthermess.content };
    }
    return (
        <div className="message">
            <Link className="avatar avatar-sm mr-4 mr-lg-5" to="#" data-chat-sidebar-toggle="#chat-1-user-profile">
                <img className="avatar-img" src="https://image.thanhnien.vn/1080/uploaded/minhnguyet/2019_09_18/sao-joker_qcyw.jpg" alt="" />
            </Link>

            <div className="message-body">

                <div className="message-row">
                    <div className="d-flex align-items-center ">

                        <div className="message-content rounded mt-3 bg-light">
                            <h6 className="mb-2">William Wright</h6>
                            <div dangerouslySetInnerHTML={createMarkup()} />

                            <div className="mt-1">
                                <small className="opacity-65">{time()} days before </small>
                            </div>
                        </div>
                        <div className="dropdown">
                            <Link className="text-muted opacity-60 ml-3" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v"></i>
                            </Link>

                            <div className="dropdown-menu">
                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                    Edit
                                        </Link>
                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                    Share
                                        </Link>
                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                    Delete
                                        </Link>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default LeftMessages

