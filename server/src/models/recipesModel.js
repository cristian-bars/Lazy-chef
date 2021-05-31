const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  _id: String,
  title: String,
  image: [String],
  author: String,
  datePublished: Date,
  description: String,
  prepTime: String,
  cookTime: String,
  totalTime: String,
  keywords: [String],
  recipeCategory: String,
  recipeCuisine: String,
  calories: String,
  recipeIngredient: [String],
  recipeInstructions: [{
    name: String,
    text: String,
    url: String,
    image: String
  }]
});

module.exports = mongoose.model('Recipes', RecipeSchema);
