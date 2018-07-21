var socket = io.connect('http://localhost:4000')

//Qyery DOM
var output = document.getElementById('output'),
    handle = document.getElementById('handle'),
    message = document.getElementById('message'),
    btn = document.getElementById('send'),
    feedback = document.getElementById('feedback');

//Emit envents
btn.addEventListener('click', function(){
    socket.emit('chat', {
        handle: handle.value,
        message: message.value
    });
});

message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
});

//Listen events
socket.on('chat', function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + '</em> ' + ' is typing...</p>';
});
