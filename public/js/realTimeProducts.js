
//FRONTEND 

(function () {
    const socket = io()   

    socket.emit('message-realTime', 'realTime')

})();