const express = require('express');

const router = express.Router();

const controller = require('../controllers/webController');

router.get("/", controller.get_Home);

router.get('/signup', controller.get_signUp);

router.get("/login", controller.get_login);

router.get("/userview", controller.get_userView)

router.get('/Home', controller.get_Home);

router.post("/userview", controller.post_signUp);




module.exports = router;