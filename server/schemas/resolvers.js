const { Thought, Restaurant } = require('../models');

const resolvers = {
  Query: {
    restaurants: async () => {
      return Restaurant.find().sort({ createdAt: -1 });
    },

    restaurant: async (parent, { restaurantId }) => {
      return Restaurant.findOne({ _id: restaurantId });
    },
  },

  Mutation: {
    addRestaurant: async (parent, { name, street, city, state, zip }) => {
      return Restaurant.create({ name, street, city, state, zip });
    },
    addReview: async (parent, { restaurantId, reviewText, author, rating }) => {
      return Restaurant.findOneAndUpdate(
        { _id: restaurantId },
        {
          $addToSet: { reviews: { reviewText, author, rating } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeRestaurant: async (parent, { restaurantId }) => {
      return Restaurant.findOneAndDelete({ _id: restarauntId });
    },
    removeComment: async (parent, { restauranttId, reviewId }) => {
      return Restaurant.findOneAndUpdate(
        { _id: restauranttId },
        { $pull: { reviews: { _id: reviewId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
