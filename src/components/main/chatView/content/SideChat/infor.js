import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { StateContext } from "../../../../../context/globalState"

function Infor(props) {
    const { toggleChatSide } = useContext(StateContext)
    return (
        <div className="d-flex h-100 flex-column">
            <div className="border-bottom py-4 py-lg-4">
                <div className="container-fluid">
                    <ul className="nav justify-content-between align-items-center">
                        <li className="nav-item list-inline-item">
                            <Link className="nav-link text-muted px-0" to="#" onClick={() => toggleChatSide()}>
                                <i className="fas fa-chevron-left"></i>
                            </Link>
                        </li>
                        <li className="text-center d-block d-lg-none">
                            <h6 >Bootstrap Themes</h6>
                            <small className="text-muted">Chat Details</small>
                        </li>
                        <li className="nav-item list-inline-item">
                            <div className="dropdown">
                                <Link className="nav-link text-muted px-0" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-cog"></i>
                                </Link>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        Mute
                                    </Link>
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        Delete
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>

            <div className="hide-scrollbar flex-fill">

                <div className="border-bottom text-center py-4 px-4">
                    <div className="avatar avatar-xl mx-auto mt-5 mb-5">
                        <img className="avatar-img" src="https://marvelvietnam.com/wp-content/uploads/2019/01/3638_a1.jpg" alt="" />
                    </div>
                    <h5>Bootstrap Themes</h5>
                    <p className="text-muted">Bootstrap is an open source toolkit for developing web with HTML, CSS, and JS.</p>
                </div>

                <ul className="nav nav-tabs nav-justified bg-light rounded-0" role="tablist">
                    <li className="nav-item">
                        <a href="#chat-id-1-members" className="nav-link active" data-toggle="tab" role="tab" aria-selected="true">Members</a>
                    </li>
                    <li className="nav-item">
                        <a href="#chat-id-1-files" className="nav-link" data-toggle="tab" role="tab">Files</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="chat-id-1-members" className="tab-pane fade show active">
                        <ul className="list-group list-group-flush list-group-no-border-first">
                            <li className="list-group-item py-4">
                                <div className="media align-items-center">
                                    <div className="avatar avatar-sm avatar-online mr-5">
                                        <img className="avatar-img" src="assets/images/Linkvatars/10.jpg" alt="Anna Bridges" />
                                    </div>


                                    <div className="media-body">
                                        <h6 className="mb-0">
                                            <Link to="#" className="text-reset">Anna Bridges</Link>
                                        </h6>
                                        <small className="text-muted">Online</small>
                                    </div>

                                    <div className="align-self-center ml-5">
                                        <div className="dropdown">
                                            <Link to="#" className="btn btn-sm btn-ico btn-link text-muted w-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-more-vertical"></i>
                                            </Link>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                                    Promote <span className="ml-auto fe-trending-up"></span>
                                                </Link>
                                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                                    Restrict <span className="ml-auto fe-trending-down"></span>
                                                </Link>
                                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                                    Delete <span className="ml-auto fe-user-x"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </li>
                            <li className="list-group-item py-4">
                                <div className="media align-items-center">


                                    <div className="avatar avatar-sm avatar-online mr-5">
                                        <img className="avatar-img" src="assets/images/Linkvatars/7.jpg" alt="Simon Hensley" />
                                    </div>


                                    <div className="media-body">
                                        <h6 className="mb-0">
                                            <Link to="#" className="text-reset">Simon Hensley</Link>
                                        </h6>
                                        <small className="text-muted">Online</small>
                                    </div>

                                    <div className="align-self-center ml-5">
                                        <div className="dropdown">
                                            <Link to="#" className="btn btn-sm btn-ico btn-link text-muted w-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-more-vertical"></i>
                                            </Link>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                                    Promote <span className="ml-auto fe-trending-up"></span>
                                                </Link>
                                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                                    Restrict <span className="ml-auto fe-trending-down"></span>
                                                </Link>
                                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                                    Delete <span className="ml-auto fe-user-x"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="chat-id-1-files" className="tab-pane fade">
                        <ul className="list-group list-group-flush list-group-no-border-first">

                            <li className="list-group-item py-4">
                                <div className="media">

                                    <div className="icon-shape bg-primary text-white mr-5">
                                        <i className="fe-paperclip"></i>
                                    </div>

                                    <div className="media-body align-self-center overflow-hidden">
                                        <h6 className="text-truncate mb-0">
                                            <Link to="#" className="text-reset" title="E5419783-047D-4B4C-B30E-F24DD8247731.JPG">E5419783-047D-4B4C-B30E-F24DD8247731.JPG</Link>
                                        </h6>

                                        <ul className="list-inline small mb-0">
                                            <li className="list-inline-item">
                                                <span className="text-muted">79.2 KB</span>
                                            </li>
                                            <li className="list-inline-item">
                                                <span className="text-muted text-uppercase">txt</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="align-self-center ml-5">
                                        <div className="dropdown">
                                            <Link to="#" className="btn btn-sm btn-ico btn-link text-muted w-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-more-vertical"></i>
                                            </Link>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                                    Download <span className="ml-auto fe-download"></span>
                                                </Link>
                                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                                    Share <span className="ml-auto fe-share-2"></span>
                                                </Link>
                                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                                    Delete <span className="ml-auto fe-trash-2"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </li>
                            <li className="list-group-item py-4">
                                <div className="media">

                                    <div className="icon-shape bg-primary text-white mr-5">
                                        <i className="fe-paperclip"></i>
                                    </div>

                                    <div className="media-body align-self-center overflow-hidden">
                                        <h6 className="text-truncate mb-0">
                                            <Link to="#" className="text-reset" title="E5419783-047D-4B4C-B30E-F24DD8247731.JPG">E5419783-047D-4B4C-B30E-F24DD8247731.JPG</Link>
                                        </h6>

                                        <ul className="list-inline small mb-0">
                                            <li className="list-inline-item">
                                                <span className="text-muted">79.2 KB</span>
                                            </li>
                                            <li className="list-inline-item">
                                                <span className="text-muted text-uppercase">psd</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="align-self-center ml-5">
                                        <div className="dropdown">
                                            <Link to="#" className="btn btn-sm btn-ico btn-link text-muted w-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-more-vertical"></i>
                                            </Link>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                                    Download <span className="ml-auto fe-download"></span>
                                                </Link>
                                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                                    Share <span className="ml-auto fe-share-2"></span>
                                                </Link>
                                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                                    Delete <span className="ml-auto fe-trash-2"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Infor

