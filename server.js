const express = require('express');
const app = express();

const http = require('http')
const server = http.Server(app);

const socketIO = require('socket.io');
const io = socketIO(server);


io.on('connection', (socket) => {
    socket.on('draw', (data) => {
        console.log(data);
        io.emit('draw', data);
    })
})

app.use(express.static(__dirname + '/public'));

server.listen(9876, () => {
    console.log("Server Started at http://localhost:9876");
})