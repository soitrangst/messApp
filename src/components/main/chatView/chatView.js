import React, { useEffect, useState } from "react";
import Loading from "../../animation/loading";
import "./chatView.scss";
import io from "socket.io-client";
import Header from "./content/header"
import Content from "./content/content"
import Footer from "./content/footer"


import InforSide from "./content/SideChat/infor"

function ChatView(props) {
  const { toggleMain, chatside, toggleChatSide, mainView, newMess, updateMess } = props
  let data = mainView.data
  let socket
  const [id, setId] = useState("");
  const [room, setRoom] = useState("");
  //const [users, setUsers] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "http://localhost:5000/";
  socket = io(ENDPOINT);

  useEffect(() => {
    setMessages([...messages, ...data.message])
    console.log("did mount");
  }, [])

  // console.log(messages);
  useEffect(
    () => {
      if (room !== data._id) {
        console.log("new rooom", data._id, room);
        setRoom(data._id)
        io(ENDPOINT).removeAllListeners("Output message")
        io(ENDPOINT).removeAllListeners("roomData")
        io(ENDPOINT).removeAllListeners("message")
        io(ENDPOINT).removeAllListeners("join successful")
      } else {
        // socket.on("Output message", (message) => {
        //   console.log(message);
        //   setMessages([...messages, { ...message, id: new Date().getUTCMilliseconds() }])
        // });
        socket.on("message", (message) => {
          console.log(message);
          updateMess(message)
          setMessages([...messages, ...newMess])
        });

        console.log('did update');
        // socket.on("roomData", ({ users }) => {
        //   if (users) {
        //     console.log(users);
        //     setUsers(users);
        //   }
        // });
        socket.on("join successful", ({ id }) => {
          console.log("join successful", id);
        });
      }
    }, [room])

  useEffect(() => {
    setId(localStorage.getItem('userID'))
    if (room) {
      socket.emit("join", { id, room }, (error) => {
        if (error) {
          alert(error);
        }
      })
      console.log("check room");
    }
  }, [id, room]);

  const sendMessage = (text) => {
    let mess = text.replace(/(\r\n|\n|\r)/gm, "<br />")
    console.log("send", mess);
    if (mess) {
      const data = {
        sender: id,
        roomId: room,
        content: mess,
        type: "text",
        createdAt: new Date()
      };
      socket.emit("sendMessage", data);
    }
  };

  return (
    !mainView.data ? <Loading /> :
      <div className="chat">
        <div className="chat-body">
          <div className="chat-header py-4 py-lg-4 px-lg-5">
            <div className="container-xxl">
              <Header
                hide={toggleMain}
                toggleChat={toggleChatSide}
                description={data.description}
                topic={data.topic}
                list_id_member={data.list_id_member}
                photoUrl={data.photoUrl}
              />
            </div>

          </div>
          {/* Search */}
          <div className=" px-lg-8 collapse" id="chat-1-search">
            <div className="container-xxl py-4 py-lg-6">
              <div className="input-group">
                <input type="text" className="form-control form-control-lg" placeholder="Search this chat" aria-label="Search this chat" />
                <div className="input-group-append">
                  <button className="btn btn-lg btn-ico btn-secondary btn-minimal" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>

            </div>
          </div>
          {/* Search */}

          <Content
            idOwer={id}
            content={messages}
          />

          <Footer
            idRoom={data._id}
            sendMessage={sendMessage}
          />
        </div>
        <div className={`chat-sidebar ${chatside ? 'chat-sidebar-visible' : ''}`}>
          <InforSide />
        </div>
      </div >
  );
}
export default ChatView;



// const ENDPOINT = "http://localhost:5000/";
// let socket = io(ENDPOINT)

// export default class ChatView extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: "",
//       room: "",
//       messages: []
//     }
//   }

//   componentDidMount() {
//     const { mainView } = this.props
//     let data = mainView.data
//     // console.log(data, mainView);   
//     console.log("did mount");
//     // this.setState({ ...this.state, messages: [...data.message] })
//     this.setState({ ...this.state, id: localStorage.getItem('userID'), messages: [...data.message] })
//     console.log(this.state.id);
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     const { mainView } = this.props
//     const { room, messages, id } = this.state
//     let data = mainView.data

//     if (room !== prevState.room) {
//       socket.emit("join", { id, room }, (error) => {
//         if (error) {
//           alert(error);
//         }
//       })
//       console.log("check room");
//     }

//     if (room !== data._id) {
//       console.log("new rooom", data._id, room);
//       this.setState({ ...this.state, room: data._id })
//       io(ENDPOINT).removeAllListeners("Output message")
//       io(ENDPOINT).removeAllListeners("roomData")
//       io(ENDPOINT).removeAllListeners("message")
//       io(ENDPOINT).removeAllListeners("join successful")
//     } else {
//       // socket.on("Output message", (message) => {
//       //   console.log(message);
//       //   setMessages([...messages, { ...message, id: new Date().getUTCMilliseconds() }])
//       // });
//       socket.on("message", (message) => {
//         console.log(message);
//         this.setState({
//           ...this.state, messages: [...messages, message]
//         })
//       });

//       console.log('did update');
//       // socket.on("roomData", ({ users }) => {
//       //   if (users) {
//       //     console.log(users);
//       //     setUsers(users);
//       //   }
//       // });
//       socket.on("join successful", ({ id }) => {
//         console.log("join successful", id);
//       });
//     }
//   }

//   render() {
//     const { toggleMain, chatside, toggleChatSide, mainView } = this.props
//     const { id, room, messages } = this.state
//     let data = mainView.data

//     const sendMessage = (text) => {
//       let mess = text.replace(/(\r\n|\n|\r)/gm, "<br />")
//       console.log("send", mess);
//       if (mess) {
//         const data = {
//           sender: id,
//           roomId: room,
//           content: mess,
//           type: "text",
//           createdAt: new Date()
//         };
//         socket.emit("sendMessage", data);
//       }
//     }

//     return (
//       !mainView.data ? <Loading /> :
//         <div className="chat">
//           <div className="chat-body">
//             <div className="chat-header py-4 py-lg-4 px-lg-5">
//               <div className="container-xxl">
//                 <Header
//                   hide={toggleMain}
//                   toggleChat={toggleChatSide}
//                   description={data.description}
//                   topic={data.topic}
//                   list_id_member={data.list_id_member}
//                   photoUrl={data.photoUrl}
//                 />
//               </div>

//             </div>
//             {/* Search */}
//             <div className=" px-lg-8 collapse" id="chat-1-search">
//               <div className="container-xxl py-4 py-lg-6">
//                 <div className="input-group">
//                   <input type="text" className="form-control form-control-lg" placeholder="Search this chat" aria-label="Search this chat" />
//                   <div className="input-group-append">
//                     <button className="btn btn-lg btn-ico btn-secondary btn-minimal" type="submit">
//                       <i className="fas fa-search"></i>
//                     </button>
//                   </div>
//                 </div>

//               </div>
//             </div>
//             {/* Search */}

//             <Content
//               idOwer={id}
//               content={messages}
//             />

//             <Footer
//               idRoom={data._id}
//               sendMessage={sendMessage}
//             />
//           </div>
//           <div className={`chat-sidebar ${chatside ? 'chat-sidebar-visible' : ''}`}>
//             <InforSide />
//           </div>
//         </div >
//     );
//   }

// }