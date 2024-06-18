
const express=require('express')
const http=require('http')
const {Server}=require('socket.io')
const cors=require('cors')
const app=express()
const { addUser, findUser, removeUser } = require('./user')

app.use(cors({origin:"*"}))

const server=http.createServer(app)

const io= new Server(server, {
    cors:{
        origin:"*",
        methods:["GET", "POST"],
    }
})

io.on('connection', (socket) =>{
    socket.on('join', (data) =>{
        socket.join(data.room)

        const {user, isSuccess}=addUser(data)

        const userMessage=isSuccess ? `${user.name}, снова здесь!`: `Вошел, ${user.name}!`

        socket.emit('message', {data:{
            user:{name:'Admin'}, message:`Привет, ${user.name}!`
        }})

        socket.broadcast.to(user.room).emit('message', {
            data:{user:{name:'Admin'}, message:userMessage}
        })
    })

    socket.on('sendMessage', ({message, params})=>{
        const user=findUser(params)

        if(user){
            io.to(user.room).emit('message', {data:{user, message}})
        }
    })

    socket.on('leftRoom', ({params})=>{
        const user=removeUser(params)

        if(user){
            const {room, name}=user

            io.to(room).emit('message', {data:{user:{name:'Admin'}, message:`${name} покинул ${room}!`}})
        }
    })

    io.on('disconnect', ()=>{
        console.log("Disconnect")
    })
})

server.listen(8000, () =>{
    console.log('Connect')
})