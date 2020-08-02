import React, { useState } from 'react'

function Social(props) {
    const [toggleShow, setToggleShow] = useState(true)

    const _show = () => {
        setToggleShow(!toggleShow)
    }

    const classCollapse = toggleShow ? 'collapse' : 'collapse show'

    return (
        <div className="card mb-2 mb-lg-2">
            <div className="card-header position-relative" onClick={() => _show()}>
                <span className="text-reset d-block stretched-link collapsed ">
                    <div className="row no-gutters align-items-center">
                        <div className="col">
                            <h5>Social</h5>
                            <p>Update your profile details.</p>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-share-alt"></i>
                        </div>
                    </div>
                </span>
            </div>
            <div className={classCollapse} >
                <div className="card-body">

                    <form action="#">
                        <div className="form-group">
                            <label className="small" htmlFor="profile-twitter">Twitter</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="btn btn-ico btn-link border btn-minimal">
                                        <i className="fab fa-twitter"></i>
                                    </div>
                                </div>
                                <input id="profile-twitter" type="text" className="form-control form-control-lg" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="small" htmlFor="profile-facebook">Facebook</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="btn btn-ico btn-link border btn-minimal">
                                        <i className="fab fa-facebook-f"></i>
                                    </div>
                                </div>
                                <input id="profile-facebook" type="text" className="form-control form-control-lg" placeholder="Username" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="small" htmlFor="profile-instagram">Instagram</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="btn btn-ico btn-link border btn-minimal">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </div>
                                <input id="profile-instagram" type="text" className="form-control form-control-lg" placeholder="Username" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="small" htmlFor="profile-github">Github</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="btn btn-ico btn-link border btn-minimal">
                                        <i className="fab fa-github"></i>
                                    </div>
                                </div>
                                <input id="profile-github" type="text" className="form-control form-control-lg" placeholder="Username" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="small" htmlFor="profile-slack">Slack</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="btn btn-ico btn-link border btn-minimal">
                                        <i className="fab fa-slack-hash"></i>
                                    </div>
                                </div>
                                <input id="profile-slack" type="text" className="form-control form-control-lg" placeholder="Username" />
                            </div>
                        </div>

                        <button className="btn btn-lg btn-primary btn-block" type="submit">Save
                                    Preferences</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Social

