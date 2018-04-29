const express = require('express');
const socket = require('socket.io');
// INIT Express
const app = express();

// Start server

const server = app.listen(4000, ()=>{
    console.log('LISTENING TO PORT 4000')
})

// STAIC FILES 
app.use(express.static('public'));

// Socket Setup
const io = socket(server);
// Connect socket with the server
io.on('connection', (socket)=>{
    console.log("made socket connection");


    // Handle Chat event
    socket.on('chat', (data)=>{
        io.sockets.emit('chat', data);
    });

    // Feedback Typing event
    socket.on('typing', (data)=>{
        socket.broadcast.emit('typing', data)
    });
});