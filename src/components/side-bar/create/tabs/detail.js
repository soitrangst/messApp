import React, { useState, useEffect } from "react";

function Detail(props) {
    const { createData } = props
    const [name, setName] = useState('')
    const [topic, setTopic] = useState('')
    const [des, setDes] = useState('')
    const [file, setFile] = useState()
    const [mount, setMount] = useState(true)

    const _onChange = (e) => {
        setFile(e.target.files[0])
    }
    const _onSubmit = () => {
        setMount(!mount)
    }
    useEffect(() => {
        if (name) {
            createData(name, topic, des, file)
        }
    }, [mount])

    return (
        <React.Fragment>
            <div
                id="create-group-details"
                className="tab-pane fade show active"
                role="tabpanel"
            >
                <form onChange={_onSubmit}>
                    <div className="form-group">
                        <label className="small">Photo</label>
                        <div className="position-relative text-center rounded border p-4">
                            <div className="avatar bg-primary text-white mx-auto mb-2 mt-3">
                                <i className="fas fa-arrow-circle-up"></i>
                            </div>
                            <p className="small text-muted mb-0">
                                You can upload jpg, gif or png files. <br></br> Max
                          file size 3mb.
                        </p>
                            <input
                                id="upload-chat-photo"
                                className="d-none"
                                type="file"
                                onChange={_onChange}
                            ></input>
                            <label
                                className="stretched-label mb-0"
                                htmlFor="upload-chat-photo"
                            ></label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="small" htmlFor="new-chat-title">Name</label>
                        <input className="form-control form-control-lg"
                            name="new-chat-title"
                            id="new-chat-title"
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            placeholder="Group Name"></input>
                    </div>

                    <div className="form-group">
                        <label className="small" htmlFor="new-chat-topic">Topic (optional)</label>
                        <input className="form-control form-control-lg"
                            name="new-chat-topic"
                            id="new-chat-topic"
                            value={topic}
                            onChange={(e) => { setTopic(e.target.value) }}
                            type="text"
                            placeholder="Group Topic"></input>
                    </div>

                    <div className="form-group mb-0">
                        <label className="small" htmlFor="new-chat-description">Description</label>
                        <textarea className="form-control form-control-lg"
                            name="new-chat-description"
                            id="new-chat-description"
                            value={des}
                            onChange={(e) => { setDes(e.target.value) }}
                            rows="6"
                            placeholder="Group Description"></textarea>
                    </div>
                </form>
            </div>

        </React.Fragment>
    );
}

export default Detail;
