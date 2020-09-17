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
router.get('/facebook', passport.authenticate('facebook'));

// callback route for Facebook to redirect
router.get('/facebook/redirect', passport.authenticate('facebook'), (req, res) => {
  res.redirect('http://localhost:8080/waiting-room');
});



module.exports = router;
