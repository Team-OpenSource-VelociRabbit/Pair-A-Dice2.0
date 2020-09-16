const router = require('express').Router();

// auth logout

router.get('/logout', (req, res) => {
  // handle passport here
  res.send('logging out');
});

// auth google

router.get('/google', (req, res) => {
  // handle passport here
  res.send('logging in with google');
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
