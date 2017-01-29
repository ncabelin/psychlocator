var mongoose = require('mongoose');

module.exports = mongoose.model('Locations', {
  name: String,
  address: String,
  telephone: String,
  info: String,
  insurance: String,
  lat: Number,
  lng: Number
});
