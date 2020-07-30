import React from 'react'

import { Link } from "react-router-dom"

function Header(props) {
    const { description, topic, list_id_member, photoUrl } = props
    return (
        <div className="row align-items-center">

            <div className="col-3 d-xl-none">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                        <Link to="#" className="text-muted px-0" onClick={() => props.hide()} data-chat="open">
                            <i className="fas fa-chevron-left ml-sm-3"></i>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="col-6 col-xl-6">
                <div className="media text-center text-xl-left">
                    <div className="avatar avatar-sm d-none d-xl-inline-block mr-5">
                        <img src={photoUrl} className="avatar-img" alt="" />
                    </div>
                    <div className="media-body align-self-center text-truncate">
                        <h6 className="text-truncate mb-n1"> {topic} </h6>
                        <small className="text-muted">
                            {
                                list_id_member.length > 1 ? `${list_id_member.length} members`
                                    :
                                    `${list_id_member.length} member`
                            }
                        </small>
                        <small className="text-muted mx-2"></small>
                        <small className="text-muted"> {description} </small>
                    </div>
                </div>
            </div>

            <div className="col-3 col-xl-6 text-right">
                <ul className="nav justify-content-end">
                    <li className="nav-item list-inline-item d-none d-xl-block mr-3">
                        <Link className="nav-link text-muted px-3" data-toggle="collapse" data-target="#chat-1-search" to="#" title="Search this chat">
                            <i className="fas fa-search"></i>
                        </Link>
                    </li>

                    <li className="nav-item list-inline-item d-none d-xl-block mr-3">
                        <Link className="nav-link text-muted px-3" to="#" data-chat-sidebar-toggle="#chat-1-members" title="Add People">
                            <i className="fas fa-plus"></i>
                        </Link>
                    </li>

                    <li className="nav-item list-inline-item d-none d-xl-block mr-0">
                        <Link className="nav-link text-muted px-3" to="#" onClick={() => props.toggleChat()} title="Details">
                            <i className="fas fa-ellipsis-v "></i>
                        </Link>
                    </li>

                    <li className="nav-item list-inline-item d-block d-xl-none">
                        <div className="dropdown">
                            <Link className="nav-link text-muted px-0" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v mr-2 "></i>
                            </Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item d-flex align-items-center" data-toggle="collapse" data-target="#chat-1-search" to="#">
                                    Search
                        <i className="fas fa-search"></i>
                                </Link>

                                <Link className="dropdown-item d-flex align-items-center" to="#" onClick={() => props.toggleChat()}>
                                    Chat Info
  </Link>

                                <Link className="dropdown-item d-flex align-items-center" to="#" data-chat-sidebar-toggle="#chat-1-members">
                                    Add Members
  </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}



export default Header

