var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client.html');
  });

io.on('connection', function(socket){
  socket.on('newmessage', (data) => {
      io.emit('newmessage', data)
  })
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});