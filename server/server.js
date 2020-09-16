const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const PORT = 3000;
const cors = require('cors');

const socketio = require('socket.io');
const http = require('http'); 
const server = http.createServer(app); 
const io = socketio(server); 


//initialize sockets 
// const http = require('http');
// const socket = require('socket.io');
// const server = http.createServer(app);
// const io = socket(server);

app.use(cors());

io.on('connection', socket => {

   socket.on('textcode', (textdata) => {
        io.sockets.emit('textcode', textdata)
    })

});

//body parser
app.use(bodyParser.json());

//defining route handler to apiRouter
app.use('/api', apiRouter);


//Start server
server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;


