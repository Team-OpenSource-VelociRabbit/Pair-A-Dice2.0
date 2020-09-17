const passport = require('passport');
const router = require('express').Router();

// auth logout
router.get('/logout', (req, res) => {
  // handle passport here
  res.send('logging out');
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
})
);

// callback route for Google to redirect
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('http://localhost:8080/waiting-room');
});

// auth facebook
router.get('/facebook', (req, res) => {
  // handle passport here
  res.send('logging in with facebook');
});

// auth github
router.get('/github', (req, res) => {
  // handle passport here
  res.send('logging in with github');
});

module.exports = router;
