var mongoose = require('mongoose');

module.exports = mongoose.model('Users', {
  username: String,
  password: String,
  confirmed: Boolean,
  email: String
});
