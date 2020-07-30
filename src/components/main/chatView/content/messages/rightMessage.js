import React from 'react'

import { Link } from "react-router-dom"

import "./rightMessage.scss"

function RightMessages(props) {
    const { mess } = props
    const time = () => {
        let from = Date.parse(mess.createdAt)
        let timeMess = Date.now() - from
        return Math.floor(timeMess % 60)
    }

    function createMarkup() {
        return { __html: mess.content };
    }

    return (<div className="message mt-5 message-right">
        <div className="avatar avatar-sm ml-4 ml-lg-5 d-none d-lg-block">
            <img className="avatar-img" src="https://cf.shopee.vn/file/d16c8472783472736ed20dc815f23d9a" alt="" />
        </div>

        <div className="message-body">

            <div className="message-row">
                <div className="d-flex align-items-center justify-content-end">

                    <div className="dropdown">
                        <Link className="text-muted opacity-60 mr-3" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                Delete <span className="ml-auto fe-trash-2"></span>
                            </Link>
                        </div>
                    </div>
                    <div className="message-content rounded bg-primary text-white">
                        <div dangerouslySetInnerHTML={createMarkup()} />
                        <div className="mt-1">
                            <small className="opacity-65"> {time()} days before </small>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className="message-row">
                <div className="d-flex align-items-center justify-content-end">

                    <div className="dropdown">
                        <Link className="text-muted opacity-60 mr-3" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

                    <div className="message-content rounded bg-primary text-white">
                        <div className="media">
                            <Link to="#" className="d-flex align-items-center icon-shape mr-5">
                                <i className="fas fa-paperclip mx-auto"></i>
                            </Link>
                            <div className="media-body overflow-hidden flex-fill">
                                <Link to="#" className="d-block text-truncate font-medium text-reset">bootstrap.min.js</Link>
                                <ul className="list-inline small mb-0">
                                    <li className="list-inline-item">
                                        <span className="t">79.2 KB</span>
                                    </li>
                                    <li className="list-inline-item">
                                        <span className="text-uppercase">js</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}

        </div>
    </div>
    )
}

export default RightMessages

