import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {connect} from 'react-redux';
import styles from './userDetailStyles';
import generalStyles from '../../../generalStyles';

const UserDetail = ({userAcces, navigation: {goBack}, navigation, recipes}) => {
  const recipesList = recipes;
  const myRecipesIds = userAcces.user.recipesCreated;
  let myRecipesList = [];
  if (myRecipesIds.length) {
    myRecipesIds.forEach(id => {
      let myRecipe = recipesList.find(recipe => recipe._id === id);
      myRecipesList.push(myRecipe);
    });
  }

  const MyCreatedRecipes = ({item}) => {
    return (
      <TouchableOpacity style={styles.recipeDetail}>
        <Text style={styles.titleText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[generalStyles.roundButton, generalStyles.roundBackButton]}
        onPress={() => goBack()}>
        <Image
          style={generalStyles.backImage}
          source={require('../../img/back.png')}
        />
      </TouchableOpacity>
      {userAcces.user ? (
        <View style={styles.userContainer}>
          <Text style={styles.titleText}>Hola {userAcces.user.name}</Text>
          <Image
            style={styles.userImage}
            source={{uri: userAcces.user.image}}
          />
          <FlatList
            style={styles.list}
            data={myRecipesList}
            keyExtractor={item => item.title}
            renderItem={MyCreatedRecipes}
          />
          <TouchableOpacity
            style={generalStyles.button}
            onPress={() => navigation.navigate('AddRecipe')}>
            <Text style={generalStyles.baseText}>Añadir receta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={generalStyles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={generalStyles.baseText}>Desconectar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.titleText}>No hi ha usuari carregat</Text>
        </View>
      )}
    </View>
  );
};

function mapStateToProps({userAcces, recipes}) {
  return {
    userAcces,
    recipes,
  };
}

export default connect(mapStateToProps)(UserDetail);
