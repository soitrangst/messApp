import React, { useState } from 'react'

function Notification(props) {

    const [toggleShow, setToggleShow] = useState(true)

    const _show = () => {
        setToggleShow(!toggleShow)
    }

    const classCollapse = toggleShow ? 'collapse' : 'collapse show'
    return (
        <div className="card mb-2 mb-lg-2">
            <div className="card-header position-relative" onClick={() => _show()}>
                <span className="text-reset d-block stretched-link collapsed" >
                    <div className="row no-gutters align-items-center">
                        <div className="col">
                            <h5>Notifications</h5>
                            <p>Update your profile details.</p>
                        </div>

                        <div className="col-auto">
                            <i className="far fa-bell"></i>
                        </div>
                    </div>
                </span>
            </div>
            <div className={classCollapse} >
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item pt-0 px-0">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <h6 className="mb-0">Sound</h6>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="custom-switch-1" />
                                    <label className="custom-control-label" htmlFor="custom-switch-1"></label>
                                </div>
                            </div>
                            <p>Update your profile details.</p>
                        </li>

                        <li className="list-group-item px-0">
                            <div className="d-flex justify-content-between mb-2">
                                <h6 className="mb-0">Exceptions</h6>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="custom-switch-2" />
                                    <label className="custom-control-label" htmlFor="custom-switch-2"></label>
                                </div>
                            </div>
                            <p>Update your profile details.</p>
                        </li>

                        <li className="list-group-item px-0">
                            <div className="d-flex justify-content-between mb-2">
                                <h6 className="mb-0">Message preview</h6>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="custom-switch-3" />
                                    <label className="custom-control-label" htmlFor="custom-switch-3"></label>
                                </div>
                            </div>
                            <p>Update your profile details.</p>
                        </li>

                        <li className="list-group-item pb-0 px-0">
                            <div className="d-flex justify-content-between mb-2">
                                <h6 className="mb-0">Show notifications</h6>


                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="custom-switch-4" />
                                    <label className="custom-control-label" htmlFor="custom-switch-4"></label>
                                </div>
                            </div>
                            <p>Update your profile details.</p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}



export default Notification

