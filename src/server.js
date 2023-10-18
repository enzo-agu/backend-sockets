import http from 'http'
import { Server } from 'socket.io'
import app from './app.js'

const serverHttp = http.createServer(app)
const serverSocket = new Server(serverHttp)
const PORT = 8080

serverHttp.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})

serverSocket.on('connection', (socketClient) => {
    console.log(`Client conected ${socketClient.id}`)
    
    socketClient.on('products', (message)=>{
        console.log(message)
    } )

    socketClient.on('message-realTime', (message)=>{
        console.log(message)
    })

    serverSocket.emit('mensaje a todosssss', 'todosssss')

})

