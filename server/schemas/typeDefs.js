const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Restaurant {
    _id: ID
    name: String
    street: String
    city: String
    state: String
    zip: String
    createdAt: String
    reviews: [Review]!
  }

  type Review {
    _id: ID
    reviewText: String
    author: String
    rating: Number
    createdAt: String
  }

  type Query {
    restaurants():[Restaurant]
    restaurant(restaurantId: ID!): Restaurant
  }

  type Mutation {
    addRestaurant(name: String!, street: String!, city: String!,state: String!,zip: String!): Restaurant
    addReview(restaurantId: ID!, reviewText: String!,author:String,rating:Number): Restaurant
    removeRestaurant(restaurantId: ID!): Restaurant
    removeReview(restaurantId: ID!, reviewId: ID!): Restaurant
  }
`;

module.exports = typeDefs;
