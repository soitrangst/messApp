import React from "react";
import { Link } from "react-router-dom"

// function compare_item(a, b) {
//     if (a.name < b.name) {
//         return 1;
//     } else if (a.name > b.name) {
//         return -1;
//     } else {
//         return 0;
//     }
// }

function ListFriend(props) {
    const { data } = props
    return (
        <React.Fragment>
            <div>
                <div className="mb-6">
                    <small className="text-uppercase">{(data.name).charAt(0)}</small>
                </div>
                <div className="card mb-6">
                    <div className="card-body">
                        <div className="media">
                            <div className="avatar avatar-online mr-5">
                                <img className="avatar-img"
                                    src="https://brasol.vn/public/ckeditor/uploads/tin-tuc/brasol.vn-logo-instargram-logo-instagram-vector.png"
                                    alt="Anna Nguyen"></img>
                            </div>
                            <div className="media-body align-self-center mr-6">
                                <Link to="dialogs" >
                                    <h6 className="mb-0">{data.name}</h6>
                                    <small className="text-muted">Online</small>
                                </Link>
                            </div>
                            <div className="align-self-center ml-5">
                                <div className="dropdown z-index-max">
                                    <Link to='#'
                                        className="btn btn-sm btn-ico btn-link text-muted w-auto"
                                        data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </Link>
                                    <div className="dropdown-menu">
                                        <Link to='dialogs' className="dropdown-item d-flex align-items-center" >
                                            New chat <i className="fas fa-pen ml-auto"></i>
                                        </Link>
                                        <Link to='#' className="dropdown-item d-flex align-items-center" >
                                            Delete <i className="fas fa-trash ml-auto"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default ListFriend;
