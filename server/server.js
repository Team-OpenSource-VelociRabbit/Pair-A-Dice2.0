const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth-routes');
const PORT = 3000;

// db connection

// body parser
app.use(bodyParser.json());

// defining route handler to authRouter for OAuth
app.use('/auth', authRouter);

// defining route handler to apiRouter
app.use('/api', apiRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
