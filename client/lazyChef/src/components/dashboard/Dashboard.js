import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import generalStyles from '../../../styles';
import Login from '../login/Login';

const Dashboard = ({navigation}) => {
  return (
    <View style={generalStyles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.ibb.co/6vTqDm8/Logo-Trabajo-Final-Patxi.png',
        }}
      />
      <TouchableOpacity style={generalStyles.button}>
        <Text style={generalStyles.baseText}>Acceder</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchRegister}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.register}>Crear una cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
