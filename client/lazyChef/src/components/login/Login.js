/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, Image} from 'react-native';
import {addUsers, getUserById} from '../../redux/actions/usersActionCreators';
import {connect} from 'react-redux';
import generalStyles from '../../../styles';
import styles from './styles';

const Register = ({navigation, dispatch, userAcces}) => {
  useEffect(() => {
    userAcces.token && navigation.navigate('Home');
  }, [userAcces, navigation]);

  let [email, showEmail] = useState('');
  let [password, showPassword] = useState('');

  const newUser = () => {
    dispatch(addUsers({email, password}));
  };
  return (
    <View style={styles.container}>
      <Image
        style={generalStyles.logo}
        source={{
          uri: 'https://i.ibb.co/MVc000Y/Logo-transparent-Patxi.png',
        }}
      />
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
      <TouchableOpacity style={styles.button} onPress={() => newUser()}>
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
