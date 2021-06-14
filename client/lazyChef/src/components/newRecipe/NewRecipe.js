/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity, Text, TextInput, Image} from 'react-native';
import generalStyles from '../../../generalStyles';
import {addRecipe} from '../../redux/actions/recipesActionCreators';
import {updateUser} from '../../redux/actions/usersActionCreators';
import styles from './newRecipeStyles';

const NewRecipe = ({userAcces, dispatch, navigation, recipes}) => {
  useEffect(() => {
    userAcces.token && navigation.navigate('User');
  }, [userAcces, navigation]);

  let [title, showTitle] = useState('');
  let [description, showDescription] = useState('');
  const author = userAcces.user.name;
  const datePublished = new Date();

  const addNewRecipe = () => {
    dispatch(addRecipe({title, description, author, datePublished}));
  };

  const goBack = () => {
    const userRecipesIds = userAcces.user.recipesCreated;
    userRecipesIds.push(recipes[recipes.length - 1]._id);
    console.log(userAcces.user);
    dispatch(
      updateUser({
        id: userAcces.user._id,
        recipesCreated: userAcces.user.recipesCreated,
        bearerToken: userAcces.token,
      }),
    );
    navigation.navigate('User');
  };

  return (
    <View style={styles.newRecipeContainer}>
      <TouchableOpacity
        style={[generalStyles.roundButton, generalStyles.roundBackButton]}
        onPress={() => goBack()}>
        <Image
          style={generalStyles.backImage}
          source={require('../../img/back.png')}
        />
      </TouchableOpacity>
      <TextInput
        style={generalStyles.formLogin}
        placeholder="Title"
        onChangeText={title => showTitle(title)}
      />
      <TextInput
        style={generalStyles.formLogin}
        placeholder="Description"
        onChangeText={description => showDescription(description)}
      />
      <TouchableOpacity style={generalStyles.button}>
        <Text style={generalStyles.baseText} onPress={addNewRecipe}>
          Añadir
        </Text>
      </TouchableOpacity>
    </View>
  );
};

function mapStateToProps({userAcces, recipes}) {
  return {
    userAcces,
    recipes,
  };
}

export default connect(mapStateToProps)(NewRecipe);
