const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys.js');
const db = require('../server/models/userModel.js');

passport.use(
  new GoogleStrategy({
    // options for the google strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, 
  (accessToken, refreshToken, profile, done) => {
    // passport callback function
    // const googleID = ``
    // check if user already exists in DB
    db.query(`SELECT * FROM users WHERE _id='${profile.id}'`)
      .then((data) => {
        console.log('in the first .then')
        // if the returned object's row property (an array) is empty, we know we're dealing with a new user
        if (data.rows.length) {
          console.log(data);
        // otherwise we want to add the user to our DB
        } else {
          const queryText = `INSERT INTO users (_id, username, skill, language, readyStatus) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
          const queryParams = [profile.id.toString(), profile.displayName, 'Easy', 'Javascript', false];
          db.query(queryText, queryParams)
          .then((newUser) => {
          console.log('New User: ', newUser.rows[0]);
          })
          .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err));
    }
  
));
