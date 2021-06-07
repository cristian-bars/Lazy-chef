/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, Image} from 'react-native';
import {addUsers} from '../../redux/actions/usersActionCreators';
import {connect} from 'react-redux';
import generalStyles from '../../../generalStyles';

const Register = ({navigation, dispatch, user}) => {
  useEffect(() => {
    user && navigation.navigate('Home');
  }, [user, navigation]);

  let [email, showEmail] = useState('');
  let [password, showPassword] = useState('');

  const newUser = () => {
    dispatch(addUsers({email, password}));
  };
  return (
    <View style={generalStyles.container}>
      <Image
        style={generalStyles.logo}
        source={{
          uri: 'https://i.ibb.co/MVc000Y/Logo-transparent-Patxi.png',
        }}
      />
      <Text style={generalStyles.title}>Nuevo usuario</Text>
      <TextInput
        style={generalStyles.formLogin}
        placeholder="Email"
        onChangeText={email => showEmail(email)}
      />
      <TextInput
        style={generalStyles.formLogin}
        placeholder="Password"
        onChangeText={password => showPassword(password)}
      />
      <TouchableOpacity style={generalStyles.button} onPress={() => newUser()}>
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
