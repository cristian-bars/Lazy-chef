/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {loadRecipes} from '../../redux/actions/recipesActionCreators';
import styles from './styles';

const RecipeCard = ({recipe}) => (
  <TouchableOpacity style={styles.recipeDetail}>
    {console.log(recipe.image)}
    {recipe.image[0] ? (
      <Image style={styles.logo} source={{uri: recipe.image[0]}} />
    ) : (
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.ibb.co/PwFdwdH/Vector-artistic-pen-and-ink-drawing-illustration-of-empty-plate-knife-and-fork.jpg',
        }}
      />
    )}

    <View>
      <Text style={styles.titleText}>{recipe.title}</Text>
    </View>
  </TouchableOpacity>
);

const Home = ({recipes, dispatch}) => {
  useEffect(() => {
    dispatch(loadRecipes());
  }, [recipes]);

  const listRender = ({item}) => {
    return <RecipeCard recipe={item} />;
  };
  return (
    <View style={styles.container}>
      <View>
        {/* <SearchBar
          placeholder="Type Here to Search..."
          onChangeText={this.updateSearch}
          value={search}
        /> */}
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

Home.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    recipes: store.recipes,
  };
}

export default connect(mapStateToProps)(Home);
