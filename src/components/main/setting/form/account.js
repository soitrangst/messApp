import React, { useState, useContext } from 'react'

import { StateContext } from "../../../../context/globalState"

function Account(props) {
    const { updateInfor } = useContext(StateContext)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [bio, setBio] = useState('')
    const [file, setFile] = useState('')

    const _onChange = (e) => {
        setFile(e.target.files[0])
    }

    const _onSubmit = (e) => {
        console.log(file);

        e.preventDefault()
        if (name || phone || email || bio || file) {
            let formData = new FormData()
            formData.append('name', name)
            formData.append('phone', phone)
            formData.append('email', email)
            formData.append('bio', bio)
            formData.append('file', file)
            updateInfor(formData).then(res => {
                if (res.status === 200) {
                    alert("update thanh cong")
                    res.json().then(data => console.log(data))
                }
            }).catch(
                err => alert('Error at update account', err)
            )
        }
    }


    return (
        <div className="card mb-2 mb-lg-2">
            {/* account */}
            <div className="card-header position-relative">
                <span className="text-reset d-block stretched-link collapsed" >
                    <div className="row no-gutters align-items-center">

                        <div className="col">
                            <h5>Account</h5>
                            <p>Update your profile details.</p>
                        </div>

                        <div className="col-auto">
                            <i className="fas fa-user-circle" aria-hidden="true"></i>
                        </div>
                    </div>
                </span>
            </div>
            {/* account */}

            <div className="collapse show" >
                <div className="card-body">
                    <form >
                        <div className="form-group">
                            <label className="small">Avatar</label>
                            <div className="form-group">
                                <div className="position-relative text-center rounded border p-6">
                                    <div className="avatar bg-primary text-white mx-auto mb-2 mt-3">
                                        <i className="fas fa-arrow-circle-up" aria-hidden="true"></i>
                                    </div>
                                    <p className="small text-muted mb-0">You can upload jpg, gif
                                    or png
                                        files. <br /> Max file size 3mb.</p>
                                    <input id="upload-chat-photo" className="d-none" type="file" onChange={_onChange} />
                                    <label className="stretched-label mb-0" htmlFor="upload-chat-photo"></label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="small" htmlFor="profile-name">Name</label>
                            <input className="form-control form-control-lg"
                                value={name}
                                onChange={e => {
                                    setName(e.target.value)
                                }}
                                type="text" placeholder="Type your name" />
                        </div>

                        <div className="form-group">
                            <label className="small" htmlFor="profile-phone">Phone</label>
                            <input className="form-control form-control-lg"
                                value={phone}
                                onChange={e => {
                                    setPhone(e.target.value)
                                }}
                                type="number" placeholder="(123) 456-7890" />
                        </div>

                        <div className="form-group">
                            <label className="small" htmlFor="profile-email">Email</label>
                            <input className="form-control form-control-lg"
                                value={email}
                                onChange={e => {
                                    setEmail(e.target.value)
                                }}
                                type="email" placeholder="you@yoursite.com" />
                        </div>

                        <div className="form-group">
                            <label className="small" htmlFor="profile-about">Bio</label>
                            <textarea className="form-control form-control-lg"
                                value={bio}
                                onChange={e => {
                                    setBio(e.target.value)
                                }}
                                rows="3"
                                placeholder="Express yourself">

                            </textarea>
                        </div>

                        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={_onSubmit}>Save
                            Preferences</button>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default Account

