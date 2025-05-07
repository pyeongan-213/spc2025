const express = require('express');
const router = express.Router();

const { loginRequired } = require('../middlewares/authMiddleware')
const { db } = require('../models/db');
const tweetController = require('../controllers/tweetController');



// router.get('/tweets',
// router.post('/tweet',
// router.post('/like/:tweet_id',
// router.post('/unlike/:tweet_id',

module.exports = router;