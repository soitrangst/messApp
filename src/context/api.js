const env = 'localhost:5000'

const api = {
    login: `http://${env}/api/user/login`,
    logOut: `http://${env}/api/user/logout`,
    refeshToken: `http://${env}/api/user/token`,
    inforUser: `http://${env}/api/user/getinfo`,
    updateAcount: `http://${env}/api/user/update/account`,
    security: `http://${env}/api/user/update/password`,
    accessToken: `http://${env}/api/user/token`,
    listFriend: `http://${env}/api/user/getlistfriend`,
    listChatRoom: `http://${env}/api/room/getlistroom`,
    createRoomChat: `http://${env}/api/room/create`,
}

export default api;