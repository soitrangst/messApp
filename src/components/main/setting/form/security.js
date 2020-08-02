import React, { useContext, useState } from 'react'

import { StateContext } from "../../../../context/globalState"

function Security(props) {
    const { security } = useContext(StateContext)
    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [verify, setVerify] = useState('')
    const [toggleShow, setToggleShow] = useState(true)

    const _show = () => {
        setToggleShow(!toggleShow)
    }

    const _onSubmit = (event) => {
        event.preventDefault()
        if (oldPass !== newPass) {
            if (newPass === verify) {
                _change(oldPass, newPass)
            } else {
                alert('password fail cause two new pass wasn t match')
            }
        } else {
            alert('please change new password')
        }
    }

    const _change = (oldPass, newPass) => {
        security({ currentPassword: oldPass, newPassword: newPass })
    }

    const classCollapse = toggleShow ? 'collapse' : 'collapse show'

    return (
        <div className="card mb-2 mb-lg-2">
            <div className="card-header position-relative" onClick={() => _show()} >
                <span className="text-reset d-block stretched-link collapsed" >
                    <div className="row no-gutters align-items-center">
                        <div className="col">
                            <h5>Security</h5>
                            <p>Update your profile details.</p>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                    </div>
                </span>
            </div>
            <div className={classCollapse} >
                <div className="card-body">
                    <form onSubmit={_onSubmit}>
                        <div className="form-group">
                            <label className="small" htmlFor="current-password">Current
                                        password</label>
                            <input name="current-password" autoComplete="on" type="password" className="form-control form-control-lg" value={oldPass} onChange={(e) => setOldPass(e.target.value)} placeholder="Current password" />
                        </div>

                        <div className="form-group">
                            <label className="small" htmlFor="new-password">New password</label>
                            <input name="new-password" autoComplete="on" type="password" className="form-control form-control-lg" value={newPass} onChange={(e) => setNewPass(e.target.value)} placeholder="New password" />
                        </div>

                        <div className="form-group">
                            <label className="small" htmlFor="verify-password">Verify
                                        password</label>
                            <input name="verify-password" autoComplete="on" type="password" className="form-control form-control-lg" value={verify} onChange={(e) => setVerify(e.target.value)} placeholder="Verify password" />
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">
                            Change Password
                                </button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Security

