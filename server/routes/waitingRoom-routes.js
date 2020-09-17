const app = require('../server');

const router = require('express').Router();

const authCheck = (req, res, next) => {
  console.log('we out here')
  if (!req.user) {
    console.log('auth check');
    res.redirect('http://localhost:8080/');
  }
  else return next();
}

router.get('/', authCheck, (req, res) => {
  res.redirect('http://localhost:8080/waiting-room')
});

module.exports = router;