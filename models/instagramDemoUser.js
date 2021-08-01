const mongoose = require('mongoose');
const validator = require('validator');

const instaDemoUserSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
    trim: true,
    validate: [validator.isEmail, 'please provide valid email'],
  },
  userName: {
    type: String,
    required: [true, 'userName is required'],
    trim: true,
    unique: true,
  },
});

const InstaDemoUser = mongoose.model('InstaDemoUser', instaDemoUserSchema);

module.exports = InstaDemoUser;
