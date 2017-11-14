var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/app/index.html');
});

//
io.on('connection', function (socket) {
  console.log('Un cliente se ha conectado');

  //
  socket.emit('news', 'Soy un bot');

  //
  socket.on('my other event', function (data) {
    console.log(data);
    if (data === 'hello' || data === 'hi') {
      socket.emit('news', 'hello world');
    }else if(data === 'Whats your name?'){
      socket.emit('news', 'Real time chat');
    }else{
      console.log('Not');
    }
  });

});
