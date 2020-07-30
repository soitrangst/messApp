import React from "react";
import { useRouteMatch } from "react-router-dom"
import { Link } from "react-router-dom"

const defaultAvarta = "https://1.bp.blogspot.com/-m3UYn4_PEms/Xnch6mOTHJI/AAAAAAAAZkE/GuepXW9p7MA6l81zSCnmNaFFhfQASQhowCLcBGAsYHQ/s1600/Cach-Lam-Avatar-Dang-Hot%2B%25281%2529.jpg"


export default function ChatBox(props) {
    const { data, changMainView } = props
    const lastMessage = () => {
        let time
        if (data.message.length) {
            time = data.message[data.message.length - 1].createdAt
            return data.message[data.message.length - 1].content
        } else {
            time = ""
            return ""
        }
    }
    function createMarkup() {
        let data = lastMessage()
        if (data) {
            return { __html: lastMessage().replace(/<br[^>]*>/gi, "").slice(0, 11) + `  ...` };
        }
    }

    const isGroup = () => {
        if (data.list_id_member.length > 1) {
            return true
        } else {
            return false
        }
    }
    let { url } = useRouteMatch()

    return (
        <React.Fragment>
            <Link
                to={`${url}?id=${data.list_id_member[0]}&room=${data._id}`}
                onClick={() =>
                    changMainView({ screen: 'ChatView', data })
                }
                className="text-reset nav-link p-0 mb-4 "  >
                <div className="card card-active-listener " >
                    <div className="card-body">
                        <div className="media d-flex align-items-center">
                            <div className="avatar mr-5">
                                <img className="avatar-img"
                                    src={(data.photoUrl) ? (data.photoUrl) : defaultAvarta} alt=" Avatar" />
                            </div>
                            <div className="media-body overflow-hidden">
                                <div className="d-flex align-items-center mb-3">
                                    <h6 className="text-truncate mb-0 mr-auto">{isGroup ? data.topic : data.name}</h6>
                                    <p className="small text-muted text-nowrap ml-4">10:42 am</p>
                                </div>
                                <div className="text-truncate h-10" dangerouslySetInnerHTML={createMarkup()} />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </React.Fragment >

    )
}
