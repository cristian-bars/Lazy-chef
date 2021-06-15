import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import generalStyles from '../../../generalStyles';
import {deleteRecipe} from '../../redux/actions/recipesActionCreators';
import {updateUser} from '../../redux/actions/usersActionCreators';

const UserDetail = ({
  userAcces,
  navigation: {goBack},
  navigation,
  recipes,
  dispatch,
}) => {
  const recipesList = recipes;
  const myRecipesIds = userAcces.user.recipesCreated;
  let myRecipesList = [];
  if (myRecipesIds.length) {
    myRecipesIds.forEach(id => {
      let myRecipe = recipesList.find(recipe => recipe._id === id);
      myRecipesList.push(myRecipe);
    });
  }

  const deleteMyRecipe = recipe => {
    userAcces.user.recipesCreated = myRecipesIds.filter(id => id !== recipe);
    dispatch(
      updateUser({
        id: userAcces.user._id,
        recipesCreated: userAcces.user.recipesCreated,
        bearerToken: userAcces.token,
      }),
    );
    dispatch(deleteRecipe(recipe));

    navigation.navigate('Dashboard');
  };

  const MyCreatedRecipes = ({item}) => {
    return (
      <View style={[generalStyles.rowArround, styles.trashRecipe]}>
        <TouchableOpacity
          style={styles.recipeDetail}
          onPress={() => navigation.navigate('Detail', {recipeId: item._id})}>
          <Text style={styles.titleRecipe}>{item.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteMyRecipe(item._id)}>
          <Image
            style={styles.trashImage}
            source={require('../../img/trash.png')}
          />
        </TouchableOpacity>
      </View>
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
          <Text style={styles.titleText}>¡Hola {userAcces.user.name}!</Text>
          {userAcces.user.image ? (
            <Image
              style={styles.userImage}
              source={{uri: userAcces.user.image}}
            />
          ) : (
            <Image
              style={styles.userImage}
              source={require('../../img/user.png')}
            />
          )}
          <Text style={styles.titleTextRecipes}>Mis recetas</Text>
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
