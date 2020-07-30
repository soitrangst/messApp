import React, { useState } from 'react'


function Footer(props) {
    const [message, setMessage] = useState('')
    const { sendMessage } = props

    // const enter = (e) => {
    //     if (e.keyCode == 13 && e.shiftKey == false) { onSubmit(e) }
    // }

    const onSubmit = (e) => {
        e.preventDefault()
        if (message) {
            sendMessage(message)
            setMessage('')
        }
    }
    return (
        <div className="chat-footer border-top py-4 py-lg-6 px-lg-8">
            <div className="container-xxl">

                <form onSubmit={onSubmit}>
                    <div className="form-row align-items-center">
                        <div className="col">
                            <div className="input-group">
                                <textarea
                                    value={message}
                                    // onKeyUp={enter}
                                    onChange={(e) => { setMessage(e.target.value) }}
                                    className="form-control bg-transparent border-0" placeholder="Type your message..." rows="1" data-emoji-input="" data-autosize="true" ></textarea>
                                <div className="input-group-append">
                                    <button className="btn btn-ico btn-secondary btn-minimal bg-white text-primary border-0" type="button" data-emoji-btn="">
                                        <i className="far fa-grin-alt"></i>
                                    </button>
                                </div>
                                <div className="input-group-append">
                                    <button id="chat-upload-btn-1" className="btn btn-ico btn-secondary btn-minimal bg-white text-primary border-0 dropzone-button-js dz-clickable" type="button">
                                        <i className="fas fa-paperclip"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-auto">
                            <button className="btn btn-ico btn-primary rounded-circle" type="submit">
                                <i className="far fa-paper-plane"></i>
                            </button>
                        </div>

                    </div>

                </form>

            </div>
        </div>
    )
}


export default Footer

