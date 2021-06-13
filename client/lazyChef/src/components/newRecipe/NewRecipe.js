/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity, Text, TextInput, Image} from 'react-native';
import generalStyles from '../../../generalStyles';
import {addRecipe} from '../../redux/actions/recipesActionCreators';
import styles from './newRecipeStyles';

const NewRecipe = ({userAcces, dispatch, navigation, navigation: {goBack}}) => {
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

function mapStateToProps({userAcces}) {
  return {
    userAcces,
  };
}

export default connect(mapStateToProps)(NewRecipe);
