/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {loadRecipes} from '../../redux/actions/actionCreators';
import styles from './styles';

const Home = ({recipes, dispatch}) => {
  useEffect(() => {
    dispatch(loadRecipes());
  }, []);

  return (
    <View style={styles.container}>
      {recipes.length ? (
        <FlatList
          data={recipes}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      ) : (
        <Text>No tenim receptes</Text>
      )}
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
