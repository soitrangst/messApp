import React, { useState, useEffect } from "react";


function compare_item(a, b) {
    if (a.name < b.name) {
        return 1;
    } else if (a.name > b.name) {
        return -1;
    } else {
        return 0;
    }
}

function Friends(props) {
    const { data, createFriend } = props
    const [listCheck, setListCheck] = useState([])
    const docx = ((data).sort(compare_item)).map(e => {
        return {
            ...e,
            checked: false
        }
    })
    useEffect(() => {
        setListCheck(docx)
    }, [])
    const _handleCheck = (e) => {
        const newCheck = listCheck.map(i => {
            if (i._id === e) {
                return { ...i, checked: !i.checked }
            } else { return i }
        })
        setListCheck(newCheck)
        createFriend(...newCheck)
    }

    const List = listCheck.map((e) =>
        <ListFriends key={e._id} data={e} _handleCheck={_handleCheck} />
    )

    return (
        <React.Fragment>
            <div id="create-group-members" className="tab-pane fade show" role="tabpanel">
                <nav className="list-group list-group-flush mb-n6">
                    {List}
                </nav>
            </div>
        </React.Fragment>
    );
}


export default Friends;

function ListFriends(props) {
    const { data, _handleCheck } = props
    const _toggle = (e) => {
        _handleCheck(e.target.name)
    }

    return (
        <div >
            {/* <!-- friends --> */}
            <div className="mb-4">
                <small className="text-uppercase">{(data.name).charAt(0)}</small>
            </div>
            {/* <!-- name --> */}
            <div className="card mb-4">
                <div className="card-body">
                    <div className="media">
                        <div className="avatar avatar-online mr-5">
                            <img className="avatar-img" src="https://brasol.vn/public/ckeditor/uploads/tin-tuc/brasol.vn-logo-instargram-logo-instagram-vector.png" alt="Anna Nguyen" />
                        </div>
                        <div className="media-body align-self-center mr-4">
                            <h6 className="mb-0"> {data.name} </h6>
                            <small className="text-muted">Online</small>
                        </div>
                        <div className="align-self-center ml-auto">
                            <div className="custom-control custom-checkbox d-flex">
                                <input
                                    className="custom-control-input "
                                    checked={data.checked}
                                    onChange={_toggle}
                                    name={data._id}
                                    id={data._id}
                                    type="checkbox" />
                                <label className="custom-control-label">
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <label className="stretched-label" htmlFor={data._id}></label>
            </div>
        </div>
    )
}

