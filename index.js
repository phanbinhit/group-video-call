const { Socket } = require('dgram')
const express = require('express')
const app = express()
const server  = require('http').Server(app)
const io = require('socket.io')(server)
const PORT = 3000

const indexRouter = require('./routers/index.router')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', indexRouter)

io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId)
        socket.to(roomId).broadcast.emit('user-connected', userId)
    })
})

server.listen(process.env.PORT | PORT, () => {
    console.log('Server is listening')
})