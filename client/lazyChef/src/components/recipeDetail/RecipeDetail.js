/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {getRecipeById} from '../../redux/actions/recipesActionCreators';
import {updateUser} from '../../redux/actions/usersActionCreators';
import styles from './recipeDetailStyles';
import generalStyles from '../../../generalStyles';

const RecipeDetail = ({
  recipe,
  dispatch,
  route,
  navigation: {goBack},
  userAcces,
}) => {
  const [isVisible, setIsVisible] = useState();
  const {recipeId} = route.params;

  useEffect(() => {
    dispatch(getRecipeById(recipeId));
  }, [recipeId, dispatch]);

  const IngredientsList = ({item}) => {
    return <Text style={styles.recipeIngredient}>- {item}</Text>;
  };

  const StepsList = ({item}) => {
    return <Text style={styles.recipeIngredient}>5 {item.name}</Text>;
  };

  function addFav() {
    console.log('afegeixo');
    console.log(userAcces.user.favouriteRecipes);
    console.log(recipe._id);
    dispatch(
      updateUser({
        id: userAcces.user._id,
        favouriteRecipes: [...userAcces.user.favouriteRecipes, recipe._id],
        bearerToken: userAcces.token,
      }),
    );
    console.log(userAcces.user.favouriteRecipes);
  }

  function removeFav() {
    console.log('elimino');
    let arr = [...userAcces.user.favouriteRecipes];
    arr.splice(arr.indexOf(recipe._id), 1);
    console.log(arr);
    dispatch(
      updateUser({
        id: userAcces.user._id,
        favouriteRecipes: arr,
        bearerToken: userAcces.token,
      }),
    );
  }

  const toggleFunction = () => {
    setIsVisible(!isVisible);
  };

  return (
    <ScrollView style={styles.container}>
      {recipe._id ? (
        <>
          <View>
            {recipe.image[0] ? (
              <>
                <TouchableOpacity
                  style={[
                    generalStyles.roundButton,
                    generalStyles.roundBackButton,
                  ]}
                  onPress={() => goBack()}>
                  <Image
                    style={generalStyles.backImage}
                    source={require('../../img/back.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    generalStyles.roundButton,
                    generalStyles.roundStarButton,
                  ]}
                  onPress={() => {
                    userAcces.user.favouriteRecipes.includes(recipe._id)
                      ? removeFav(recipe._id)
                      : addFav(recipe._id);
                  }}>
                  {userAcces.user.favouriteRecipes.includes(recipe._id) ? (
                    <Image
                      style={styles.starImage}
                      source={require('../../img/estrella_groga.png')}
                    />
                  ) : (
                    <Image
                      style={styles.starImage}
                      source={require('../../img/estrella.png')}
                    />
                  )}
                </TouchableOpacity>
                <Image
                  style={styles.recipeImage}
                  source={{uri: recipe.image[0]}}
                />
              </>
            ) : (
              <>
                <TouchableOpacity
                  style={[
                    generalStyles.roundButton,
                    generalStyles.roundBackButton,
                  ]}
                  onPress={() => goBack()}>
                  <Image
                    style={generalStyles.backImage}
                    source={require('../../img/back.png')}
                  />
                  <TouchableOpacity
                    style={[
                      generalStyles.roundButton,
                      generalStyles.roundStarButton,
                    ]}
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
            <View style={[generalStyles.rowArround, generalStyles.background]}>
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
              <TouchableOpacity style={styles.informationTaps}>
                <Text style={styles.informationTitle}>Ingredientes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.informationTaps}>
                <Text style={styles.informationTitle}>Pasos</Text>
              </TouchableOpacity>
            </View>
            {isVisible ? (
              <View style={styles.information}>
                <FlatList
                  style={styles.list}
                  data={recipe.recipeIngredient}
                  keyExtractor={item => item}
                  renderItem={IngredientsList}
                />
              </View>
            ) : (
              <View style={styles.information}>
                <FlatList
                  style={styles.list}
                  data={recipe.recipeInstructions}
                  keyExtractor={item => item.name}
                  renderItem={StepsList}
                />
              </View>
            )}
          </View>
        </>
      ) : (
        <Text>No hi ha recepta a carregar</Text>
      )}
    </ScrollView>
  );
};

RecipeDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    recipe: store.recipe,
    userAcces: store.userAcces,
  };
}

export default connect(mapStateToProps)(RecipeDetail);
