const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { sports, sportsGenders } = require('../utils/sports');
const defaultPic = '/images/default-profile.png';

const schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  public: { type: Boolean, required: true, default: false },
  profileUrl: { type: String, default: defaultPic },
  primarySport: { type: String, enum: sports },
  primarySportGender: { type: String, enum: sportsGenders },
  position: {type: String, text: true },
  person: {
    dob: Date,
    gender: String,
    height: Number,
    heightUom: { type: String, default: 'in', enum: [ 'in', 'cm' ] },
    weight: Number,
    weightUom: { type: String, default: 'lb', enum: [ 'lb', 'kg' ] },
  },
  organization: String,
  location: {
    city: String,
    state: String,
    country: String
  },
  socials: {
    facebookUrl: String,
    twitterUrl: String,
    instagramUrl: String,
  },
  about: String,
  awards: String
});

module.exports = schema;
