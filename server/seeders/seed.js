const db = require('../config/connection');
const { Restaurant } = require('../models');
const restaurantSeeds = require('./restaurantSeeds.json');

db.once('open', async () => {
  await Restaurant.deleteMany({});
  await Restaurant.create(restaurantSeeds);

  console.log('all done!');
  process.exit(0);
});
