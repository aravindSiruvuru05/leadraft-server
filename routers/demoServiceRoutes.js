const express = require('express');

const {
  createInstagramDemoUser,
} = require('../controllers/instagramDemoUserController');

const router = express.Router();

router.route('/insta-free-10').post(createInstagramDemoUser);

module.exports = router;
