/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {getRecipeById} from '../../redux/actions/recipesActionCreators';
import styles from './recipeDetailStyles';

const RecipeDetail = ({recipe, dispatch, route}) => {
  const {recipeId} = route.params;
  useEffect(() => {
    dispatch(getRecipeById(recipeId));
  }, [recipeId]);
  console.log(recipe);

  return (
    <View style={styles.container}>
      {recipe ? (
        <>
          <View>
            {recipe.image[0] ? (
              <Image
                style={styles.recipeImage}
                source={{uri: recipe.image[0]}}
              />
            ) : (
              <Image
                style={styles.recipeImage}
                source={{
                  uri: 'https://i.ibb.co/PwFdwdH/Vector-artistic-pen-and-ink-drawing-illustration-of-empty-plate-knife-and-fork.jpg',
                }}
              />
            )}
          </View>

          <Text style={styles.titleText}>{recipe.title}</Text>
          <Text style={styles.descriptionText}>{recipe.Description}</Text>
          <View style={styles.recipeIcons}>
            <View style={styles.recipeInfo}>
              <Image
                style={styles.imageIcons}
                source={{
                  uri: 'https://i.ibb.co/PwFdwdH/Vector-artistic-pen-and-ink-drawing-illustration-of-empty-plate-knife-and-fork.jpg',
                }}
              />
              <Text style={styles.iconsDetail}>
                {recipe.recipeIngredient.length}
              </Text>
            </View>
            <View style={styles.recipeInfo}>
              <Image
                style={styles.imageIcons}
                source={{
                  uri: 'https://i.ibb.co/PwFdwdH/Vector-artistic-pen-and-ink-drawing-illustration-of-empty-plate-knife-and-fork.jpg',
                }}
              />
              <Text style={styles.iconsDetail}>{recipe.difficulty}</Text>
            </View>
            <View style={styles.recipeInfo}>
              <Image
                style={styles.imageIcons}
                source={{
                  uri: 'https://i.ibb.co/PwFdwdH/Vector-artistic-pen-and-ink-drawing-illustration-of-empty-plate-knife-and-fork.jpg',
                }}
              />
              <Text style={styles.iconsDetail}>{recipe.totalTime}</Text>
            </View>
          </View>
        </>
      ) : (
        <Text>No hi ha recepta a carregar</Text>
      )}
    </View>
  );
};

RecipeDetail.propTypes = {
  recipe: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    recipe: store.recipe,
  };
}

export default connect(mapStateToProps)(RecipeDetail);
