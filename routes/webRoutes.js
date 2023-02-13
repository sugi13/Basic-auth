const express = require('express');

const router = express.Router();

const controller = require('../controllers/webController');


router.get('/', controller.get_signUp);

router.get('/login', controller.get_login);

router.post('/signup', controller.post_signUp);

router.post('/login', controller.post_login);


module.exports = router;