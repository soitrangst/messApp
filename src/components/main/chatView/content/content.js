import React, { useEffect, useRef } from 'react';

import "./content.scss"

import LeftMessages from "./messages/leftMessage"
import RightMessages from "./messages/rightMessage"

const Content = (props) => {
    const { content, idOwer } = props
    let message = [...content]
    const divRref = useRef(null);

    useEffect(() => {
        divRref.current.scrollIntoView({ behavior: 'smooth' });

    })
    return (
        <div className="chat-content px-lg-2" >
            <div className="container-xxl py-4 py-lg-4" >
                {message.map((e) => {
                    if (e.sender === idOwer) {
                        return <RightMessages key={e._id} mess={e} />
                    } else {
                        return <LeftMessages key={e._id} orthermess={e} />
                    }
                })}
                {/* Break */}
                <div className="message-divider my-9 mx-lg-5">
                    <div className="row align-items-center">

                        <div className="col">
                            <hr />
                        </div>

                        <div className="col-auto">
                            <small className="text-muted">Today</small>
                        </div>

                        <div className="col">
                            <hr />
                        </div>
                    </div>
                </div>
                <div ref={divRref}></div>
                {/* Break */}
            </div>
        </div>
    );
};

export default Content;

