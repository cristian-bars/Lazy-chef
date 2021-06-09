import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from './userDetailStyles';
import generalStyles from '../../../generalStyles';

const UserDetail = ({userAcces, navigation: {goBack}, navigation}) => {
  console.log(userAcces);
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
          <Text style={styles.titleText}>Hola {userAcces.user.email}</Text>
          <Image
            style={styles.userImage}
            source={{uri: userAcces.user.image}}
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

function mapStateToProps({userAcces}) {
  return {
    userAcces,
  };
}

export default connect(mapStateToProps)(UserDetail);
