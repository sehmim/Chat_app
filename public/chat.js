// MAKE CONNECTION

// Client socket
const socket = io.connect('http://localhost:4000');

// Query DOM
let message =  document.getElementById('message');
let handle =  document.getElementById('handle');
let btn =  document.getElementById('send');
let output =  document.getElementById('output');
let feedback =  document.getElementById('feedback');

// LISTEN FOR EVENTS
btn.addEventListener('click', ()=>{
    // emiit chat with an object as message
    socket.emit('chat', {
       message: message.value,
       handle: handle.value
   })
});

// Listen for keypress so they know if your tying
message.addEventListener('keypress,', ()=>{
    socket.emit('typing', handle.value);
})

// Listen and output message
socket.on('chat', (data)=>{
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong> ' + data.handle +
    ': </strong> ' + data.message + '</p>'
})

 
// Listen and output message
socket.on('typing', (data)=>{
    feedback.innerHTML = '<p><em> ' + data +
    ' is tying a message.. </em></p>'
})