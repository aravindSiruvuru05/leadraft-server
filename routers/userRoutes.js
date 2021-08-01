const express = require('express');

const { protect } = require('../controllers/authController');
const { getAllUsers, createUser } = require('../controllers/userController');

const router = express.Router();

router.route('/').get(protect, getAllUsers).post(createUser);

module.exports = router;
