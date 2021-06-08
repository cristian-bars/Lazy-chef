/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {getRecipeById} from '../../redux/actions/recipesActionCreators';
import styles from './recipeDetailStyles';
import generalStyles from '../../../generalStyles';

const RecipeDetail = ({recipe, dispatch, route, navigation: {goBack}}) => {
  const [isVisible, setIsVisible] = useState();
  const {recipeId} = route.params;
  useEffect(() => {
    dispatch(getRecipeById(recipeId));
  }, [recipeId]);
  console.log(recipe);

  const listRender = ({item}) => {
    return <Text>{item}</Text>;
  };

  const toggleFunction = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      {recipe._id ? (
        <>
          <View>
            {recipe.image[0] ? (
              <>
                <TouchableOpacity
                  style={[styles.roundButton, styles.roundBackButton]}
                  onPress={() => goBack()}>
                  <Image
                    style={styles.backImage}
                    source={require('../../img/back.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.roundButton, styles.roundStarButton]}
                  onPress={() => goBack()}>
                  <Image
                    style={styles.starImage}
                    source={require('../../img/estrella.png')}
                  />
                </TouchableOpacity>
                <Image
                  style={styles.recipeImage}
                  source={{uri: recipe.image[0]}}
                />
              </>
            ) : (
              <>
                <TouchableOpacity
                  style={[styles.roundButton, styles.roundBackButton]}
                  onPress={() => goBack()}>
                  <Image
                    style={styles.backImage}
                    source={require('../../img/back.png')}
                  />
                  <TouchableOpacity
                    style={[styles.roundButton, styles.roundStarButton]}
                    onPress={() => goBack()}>
                    <Image
                      style={styles.starImage}
                      source={require('../../img/estrella.png')}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
                <Image
                  style={styles.recipeImage}
                  source={{
                    uri: 'https://i.ibb.co/PwFdwdH/Vector-artistic-pen-and-ink-drawing-illustration-of-empty-plate-knife-and-fork.jpg',
                  }}
                />
              </>
            )}
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.titleText}>{recipe.title}</Text>
            <View
              style={[generalStyles.rowArround, {backgroundColor: 'white'}]}>
              <View style={styles.recipeInfo}>
                <Text style={styles.iconsDetail}>Ingredientes</Text>
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
                <Text style={styles.iconsDetail}>Dificultad</Text>
                <Image
                  style={styles.imageIcons}
                  source={{
                    uri: 'https://i.ibb.co/PwFdwdH/Vector-artistic-pen-and-ink-drawing-illustration-of-empty-plate-knife-and-fork.jpg',
                  }}
                />
                <Text style={styles.iconsDetail}>{recipe.difficulty}</Text>
              </View>
              <View style={styles.recipeInfo}>
                <Text style={styles.iconsDetail}>Tiempo total</Text>
                <Image
                  style={styles.imageIcons}
                  source={{
                    uri: 'https://i.ibb.co/PwFdwdH/Vector-artistic-pen-and-ink-drawing-illustration-of-empty-plate-knife-and-fork.jpg',
                  }}
                />
                <Text style={styles.iconsDetail}>{recipe.totalTime}</Text>
              </View>
            </View>
            <View style={[generalStyles.rowArround, styles.recipeDetails]}>
              <TouchableOpacity>
                <Text>Ingredientes</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Pasos</Text>
              </TouchableOpacity>
            </View>
            {!isVisible ? (
              <View>
                <FlatList
                  style={styles.list}
                  data={recipe.recipeIngredient}
                  keyExtractor={item => item}
                  renderItem={listRender}
                />
              </View>
            ) : (
              <View>
                <Text style={styles.text}>Good Night</Text>
              </View>
            )}
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
