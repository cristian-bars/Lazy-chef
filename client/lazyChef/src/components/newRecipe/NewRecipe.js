import React from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import generalStyles from '../../../generalStyles';
import styles from './newRecipeStyles';

const NewRecipe = ({userAcces}) => {
  return (
    <View style={styles.newRecipeContainer}>
      <TextInput style={generalStyles.formLogin} placeholder="Title" />
      <TextInput style={generalStyles.formLogin} placeholder="Description" />
      <TouchableOpacity style={generalStyles.button}>
        <Text style={generalStyles.baseText}>Añadir</Text>
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
