import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import styles from './favoritesListStyles';

const RecipesList = ({recipes, dispatch, userAccess}) => {
  const recipesList = recipes;

  const myRecipesIds = userAccess.user.favouriteRecipes;
  let myRecipe = [];
  let myRecipesList = [];
  if (myRecipesIds.length) {
    myRecipesIds.forEach(id => {
      myRecipe = recipesList.find(recipe => recipe._id === id);
      myRecipesList.push(myRecipe);
    });
  }

  console.log(myRecipesList);
  const navigation = useNavigation();

  const listRender = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.recipeDetail}
        onPress={() => navigation.navigate('Detail', {recipeId: item._id})}>
        {item.image[0] ? (
          <Image style={styles.logo} source={{uri: item.image[0]}} />
        ) : (
          <Image
            style={styles.logo}
            source={{
              uri: 'https://i.ibb.co/PwFdwdH/Vector-artistic-pen-and-ink-drawing-illustration-of-empty-plate-knife-and-fork.jpg',
            }}
          />
        )}

        <Text style={styles.titleText}>{item.title}</Text>
        <View style={styles.recipeIcons}>
          <View>
            <Image
              style={styles.imageIcons}
              source={require('../../img/Ingredientes.jpg')}
            />
            <Text style={styles.descriptionText}>
              {item.recipeIngredient.length}
            </Text>
          </View>
          <View>
            <Image
              style={styles.imageIcons}
              source={require('../../img/herramientas-y-utensilios.png')}
            />
            <Text style={styles.descriptionText}>{item.difficulty}</Text>
          </View>
          <View>
            <Image
              style={styles.imageIcons}
              source={require('../../img/duration.png')}
            />
            <Text style={styles.descriptionText}>{item.totalTime}</Text>
          </View>
        </View>

        <Text style={styles.descriptionText}>{item.Description}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        {recipes.length ? (
          <FlatList
            style={styles.list}
            data={myRecipesList}
            keyExtractor={item => item.title}
            renderItem={listRender}
          />
        ) : (
          <Text>No tenim receptes</Text>
        )}
      </View>
    </View>
  );
};

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    recipes: store.recipes,
    userAccess: store.userAcces,
  };
}

export default connect(mapStateToProps)(RecipesList);
