var router = require('express').Router();
var usersCtrl = require('../controllers/users');
var request = require('request');


router.get('/users', usersCtrl.index);
router.get('/users/faveteams', usersCtrl.newTeam);
router.get('/users/newplayer', usersCtrl.newPlayer);
router.get('/users/:id', usersCtrl.show);






function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}
module.exports = router;


// next step, try to display user info, retry login icon thing...