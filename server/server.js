const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth-routes');
const WRRouter = require('./routes/waitingRoom-routes');
const passportSetup = require('../config/passport-setup');
const cookieSession = require('cookie-session');
const keys = require('../config/keys');
const passport = require('passport');
const PORT = 3000;
const cors = require('cors');

const socketio = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketio(server);

console.log('in da server');

// serving index.html upon every GET request
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

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

// body parser
app.use(bodyParser.json());

// cookie-session set-up
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey],
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// defining route handler to authRouter for OAuth
app.use('/auth', authRouter);

// defining route handler to WRRouter for OAuth
app.use('/waiting-room', WRRouter);

// defining route handler to apiRouter
app.use('/api', apiRouter);

//Start server
server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;


