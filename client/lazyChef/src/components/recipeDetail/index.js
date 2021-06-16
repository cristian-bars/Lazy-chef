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
import {
  getRecipeById,
  loadRecipes,
} from '../../redux/actions/recipesActionCreators';
import {updateUser} from '../../redux/actions/usersActionCreators';
import styles from './styles';
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
    return <Text style={styles.recipeIngredient}>{item}</Text>;
  };

  const StepsList = ({item}) => {
    return <Text style={styles.recipeIngredient}>{item.text}</Text>;
  };

  function addFav() {
    dispatch(
      updateUser({
        id: userAcces.user._id,
        favouriteRecipes: [...userAcces.user.favouriteRecipes, recipe._id],
        bearerToken: userAcces.token,
      }),
    );
    dispatch(loadRecipes());
  }

  function removeFav() {
    let arr = [...userAcces.user.favouriteRecipes];
    arr.splice(arr.indexOf(recipe._id), 1);
    dispatch(
      updateUser({
        id: userAcces.user._id,
        favouriteRecipes: arr,
        bearerToken: userAcces.token,
      }),
    );
    dispatch(loadRecipes());
  }

  const showSteps = () => {
    setIsVisible(false);
  };

  const showIngredients = () => {
    setIsVisible(true);
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
                  testID="favoritePress"
                  style={[
                    generalStyles.roundButton,
                    generalStyles.roundStarButton,
                  ]}
                  onPress={() => {
                    userAcces.user.favouriteRecipes.includes(recipe._id)
                      ? removeFav()
                      : addFav();
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
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    generalStyles.roundButton,
                    generalStyles.roundStarButton,
                  ]}
                  onPress={() => {
                    userAcces.user.favouriteRecipes.includes(recipe._id)
                      ? removeFav()
                      : addFav();
                  }}>
                  <Image
                    style={styles.starImage}
                    source={require('../../img/estrella.png')}
                  />
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
                  source={require('../../img/Ingredientes.jpg')}
                />
                <Text style={styles.iconsDetail}>
                  {recipe.recipeIngredient.length}
                </Text>
              </View>
              <View style={styles.recipeInfo}>
                <Text style={styles.iconsDetail}>Dificultad</Text>
                <Image
                  style={styles.imageIcons}
                  source={require('../../img/herramientas-y-utensilios.png')}
                />
                <Text style={styles.iconsDetail}>{recipe.difficulty}</Text>
              </View>
              <View style={styles.recipeInfo}>
                <Text style={styles.iconsDetail}>Tiempo total</Text>
                <Image
                  style={styles.imageIcons}
                  source={require('../../img/duration.png')}
                />
                <Text style={styles.iconsDetail}>{recipe.totalTime}</Text>
              </View>
            </View>
            <View style={[generalStyles.rowArround, styles.recipeDetails]}>
              <TouchableOpacity
                style={styles.informationTaps}
                onPress={() => showIngredients()}>
                {isVisible ? (
                  <Text style={styles.informationTitleVisible}>
                    Ingredientes
                  </Text>
                ) : (
                  <Text style={styles.informationTitle}>Ingredientes</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.informationTaps}
                onPress={() => showSteps()}>
                {isVisible ? (
                  <Text style={styles.informationTitle}>Pasos</Text>
                ) : (
                  <Text style={styles.informationTitleVisible}>Pasos</Text>
                )}
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
        <Text>Cargando receta ...</Text>
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
