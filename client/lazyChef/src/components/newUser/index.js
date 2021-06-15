/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, Image} from 'react-native';
import {addUsers} from '../../redux/actions/usersActionCreators';
import {connect} from 'react-redux';
import generalStyles from '../../../generalStyles';

const Register = ({navigation, dispatch, user, navigation: {goBack}}) => {
  useEffect(() => {
    user.email && navigation.navigate('Home');
  }, [user, navigation]);

  let [name, showName] = useState('');
  let [email, showEmail] = useState('');
  let [password, showPassword] = useState('');

  const newUser = () => {
    dispatch(addUsers({name, email, password}));
  };
  return (
    <View style={generalStyles.container}>
      <TouchableOpacity
        style={[generalStyles.roundButton, generalStyles.roundBackButton]}
        testID="goBack"
        onPress={() => goBack()}>
        <Image
          style={generalStyles.backImage}
          source={require('../../img/back.png')}
        />
      </TouchableOpacity>
      <Image
        style={generalStyles.logo}
        source={{
          uri: 'https://i.ibb.co/MVc000Y/Logo-transparent-Patxi.png',
        }}
      />
      <Text style={generalStyles.title}>Nuevo usuario</Text>
      <TextInput
        style={generalStyles.formLogin}
        value={name}
        testID="nameInput"
        placeholder="Nombre"
        onChangeText={textName => showName(textName)}
      />
      <TextInput
        style={generalStyles.formLogin}
        value={email}
        testID="emailInput"
        placeholder="Email"
        onChangeText={textEmail => showEmail(textEmail)}
      />
      <TextInput
        style={generalStyles.formLogin}
        value={password}
        testID="passwordInput"
        placeholder="Password"
        onChangeText={textPassword => showPassword(textPassword)}
      />
      <TouchableOpacity
        style={generalStyles.button}
        onPress={() => newUser()}
        testID="register">
        <Text style={generalStyles.baseText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

function mapStateToProps({userAcces, user}) {
  return {
    userAcces,
    user,
  };
}

export default connect(mapStateToProps)(Register);
