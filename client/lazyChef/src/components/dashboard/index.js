/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {loadRecipes} from '../../redux/actions/recipesActionCreators';
import styles from './styles';
import generalStyles from '../../../generalStyles';

const RecipesList = ({recipes, dispatch, navigation}) => {
  useEffect(() => {
    if (!recipes.length) {
      dispatch(loadRecipes());
    }
  }, [recipes]);

  const listRender = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.recipeDetail}
        testID="recipeDetail"
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

  const Words = () => {
    return (
      <View style={generalStyles.wordsList}>
        <Text style={styles.wordsTitle}>Ingredientes</Text>
        <View style={styles.ingredientsList}>
          <TouchableOpacity
            style={styles.searchWord}
            testID="ingredient1"
            onPress={() =>
              navigation.navigate('SearchRecipe', {ingredient: 'Huevo'})
            }>
            <Text style={styles.wordStyle}>Huevo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.searchWord}
            testID="ingredient2"
            onPress={() =>
              navigation.navigate('SearchRecipe', {ingredient: 'Tomate'})
            }>
            <Text>Tomate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.searchWord}
            testID="ingredient3"
            onPress={() =>
              navigation.navigate('SearchRecipe', {ingredient: 'Jud??as'})
            }>
            <Text style={styles.wordStyle}>Jud??as</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.searchWord}
            testID="ingredient4"
            onPress={() =>
              navigation.navigate('SearchRecipe', {ingredient: 'Arroz'})
            }>
            <Text style={styles.wordStyle}>Arroz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={generalStyles.input}>
          <Image
            style={generalStyles.searchImage}
            source={require('../../img/search.png')}
          />
          <TextInput
            style={generalStyles.inputText}
            placeholder="Buscar"
            autoCapitalize="none"
          />
        </View>
      </View>
      <View>
        <Words />
      </View>
      <View>
        {recipes.length ? (
          <FlatList
            style={styles.list}
            data={recipes}
            keyExtractor={item => item._id}
            renderItem={listRender}
          />
        ) : (
          <Text>Cargando recetas ...</Text>
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
  };
}

export default connect(mapStateToProps)(RecipesList);
