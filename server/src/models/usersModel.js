const { model, Schema } = require('mongoose');

const UserSchema = Schema({
  name: String,
  email: String,
  password: String,
  image: [String],
  recipesCreated: [String],
  favouriteRecipes: [String]
});

UserSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('Users', UserSchema);
