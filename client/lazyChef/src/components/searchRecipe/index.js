/* eslint-disable no-shadow */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import generalStyles from '../../../generalStyles';
import styles from './styles';

const SearchRecipe = ({recipes, dispatch, route, navigation}) => {
  const {ingredient} = route.params;
  let [userWord, searchIngredient] = useState('');
  let [userPalabra, setUserPalabra] = useState([ingredient]);
  let array = [];
  let [arrayToMap, setArrayToMap] = useState([]);

  const addIngredient = () => {
    array.push(...userPalabra, userWord);
    setUserPalabra([...userPalabra, userWord]);
    setArrayToMap(array);
  };

  const listRender = ({item}) => {
    return <Text>{item}</Text>;
  };

  const Words = () => {
    return (
      <View>
        <View style={generalStyles.wordsList}>
          <Text style={styles.wordsTitle}>Mi selección</Text>
          {arrayToMap.length ? (
            <FlatList
              style={styles.list}
              data={arrayToMap}
              keyExtractor={item => item}
              renderItem={listRender}
            />
          ) : (
            <Text>{ingredient}</Text>
          )}
          <Text style={styles.searchWord} />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={generalStyles.input}>
          <TouchableOpacity onPress={addIngredient}>
            <Image
              style={generalStyles.searchImage}
              source={require('../../img/search.png')}
            />
          </TouchableOpacity>
          <TextInput
            style={generalStyles.inputText}
            placeholder="Buscar"
            autoCapitalize="none"
            onChangeText={ing => searchIngredient(ing)}
          />
        </View>
      </View>
      <View>
        <Words />
      </View>
      <TouchableOpacity
        style={generalStyles.button}
        onPress={() => {
          arrayToMap.length
            ? navigation.navigate('RecipeList', {ingredient: arrayToMap})
            : navigation.navigate('RecipeList', {ingredient: ingredient});
        }}>
        <Text style={generalStyles.baseText}>Mostrar recetas</Text>
      </TouchableOpacity>
    </View>
  );
};

SearchRecipe.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    recipes: store.recipes,
  };
}

export default connect(mapStateToProps)(SearchRecipe);
