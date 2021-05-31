const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  image: [String],
  recipesCreated: [String],
  favouriteRecipes: [String]
});

module.exports = mongoose.model('Users', UserSchema);
