/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {loadRecipes} from '../../redux/actions/recipesActionCreators';
import styles from './recipesListStyles';

const RecipesList = ({recipes, dispatch, route}) => {
  const navigation = useNavigation();
  const {ingredient} = route.params;
  console.log('ingredients??');
  console.log(ingredient);
  useEffect(() => {
    if (!recipes.length) {
      dispatch(loadRecipes());
    }
  }, [recipes]);

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

  const ingredientRender = ({item}) => {
    return <Text style={styles.ingredientsList}>{item}</Text>;
  };
  return (
    <View style={styles.container}>
      <View style={styles.ingList}>
        <Text style={styles.wordsTitle}>Recetas con </Text>
        <FlatList
          style={styles.optionslist}
          data={ingredient}
          horizontal={true}
          keyExtractor={item => item}
          renderItem={ingredientRender}
        />
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
  };
}

export default connect(mapStateToProps)(RecipesList);
