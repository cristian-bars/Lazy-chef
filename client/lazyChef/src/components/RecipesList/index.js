/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {loadRecipes} from '../../redux/actions/recipesActionCreators';
import styles from './styles';
import generalStyles from '../../../generalStyles';

const RecipesList = ({recipes, dispatch, route, navigation}) => {
  const {ingredient} = route.params;

  useEffect(() => {
    if (!recipes.length) {
      dispatch(loadRecipes());
    }
  }, [recipes]);

  const listRender = ({item}) => {
    return (
      <TouchableOpacity
        style={generalStyles.recipeDetail}
        onPress={() => navigation.navigate('Detail', {recipeId: item._id})}>
        {item.image[0] ? (
          <Image
            style={generalStyles.recipeLogo}
            source={{uri: item.image[0]}}
          />
        ) : (
          <Image
            style={generalStyles.recipeLogo}
            source={{
              uri: 'https://i.ibb.co/PwFdwdH/Vector-artistic-pen-and-ink-drawing-illustration-of-empty-plate-knife-and-fork.jpg',
            }}
          />
        )}

        <Text style={generalStyles.titleText}>{item.title}</Text>
        <View style={generalStyles.recipeIcons}>
          <View>
            <Image
              style={generalStyles.imageIcons}
              source={require('../../img/Ingredientes.jpg')}
            />
            <Text style={generalStyles.descriptionText}>
              {item.recipeIngredient.length}
            </Text>
          </View>
          <View>
            <Image
              style={generalStyles.imageIcons}
              source={require('../../img/herramientas-y-utensilios.png')}
            />
            <Text style={generalStyles.descriptionText}>{item.difficulty}</Text>
          </View>
          <View>
            <Image
              style={generalStyles.imageIcons}
              source={require('../../img/duration.png')}
            />
            <Text style={generalStyles.descriptionText}>{item.totalTime}</Text>
          </View>
        </View>

        <Text style={generalStyles.descriptionText}>{item.Description}</Text>
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
