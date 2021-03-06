/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {View, Image, TouchableOpacity, Text, TextInput} from 'react-native';
import {getUserById} from '../../redux/actions/usersActionCreators';
import styles from './styles';
import generalStyles from '../../../generalStyles';

const Login = ({navigation, dispatch, userAcces}) => {
  useEffect(() => {
    userAcces.token && navigation.navigate('Dashboard');
  }, [userAcces, navigation]);

  let [email, showEmail] = useState('');
  let [password, showPassword] = useState('');

  const loginClick = () => {
    dispatch(getUserById({email, password}));
  };

  return (
    <View style={generalStyles.container}>
      <Image
        style={generalStyles.logo}
        source={{
          uri: 'https://i.ibb.co/MVc000Y/Logo-transparent-Patxi.png',
        }}
      />
      <Text style={generalStyles.title} />
      <TextInput
        style={generalStyles.formLogin}
        testID="emailInput"
        placeholder="Correo"
        value={email}
        onChangeText={textEmail => showEmail(textEmail)}
        textContentType="emailAddress"
      />
      <TextInput
        style={generalStyles.formLogin}
        testID="passwordInput"
        placeholder="Contraseña"
        value={password}
        onChangeText={textPassword => showPassword(textPassword)}
        textContentType="password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={generalStyles.button}
        testID="login"
        onPress={loginClick}>
        <Text style={generalStyles.baseText}>Acceder</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchRegister}
        testID="register"
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.register}>Crear una cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

function mapStateToProps({userAcces}) {
  return {
    userAcces,
  };
}

export default connect(mapStateToProps)(Login);
