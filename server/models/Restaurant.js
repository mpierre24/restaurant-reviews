const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: 'restaurant name required',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  street: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  zip: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  reviews: [
    {
      reviewText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      rating: {
        type: Number,

      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Restaurant = model('restaurant', restaurantSchema);

module.exports = Restaurant;
