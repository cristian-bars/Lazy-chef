import React from 'react';
import {View, TouchableOpacity, Text, TextInput, Image} from 'react-native';
import generalStyles from '../../../styles';
import styles from './styles';

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={generalStyles.logo}
        source={{
          uri: 'https://i.ibb.co/MVc000Y/Logo-transparent-Patxi.png',
        }}
      />
      <TextInput style={generalStyles.formLogin} defaultValue="Email" />
      <TextInput style={generalStyles.formLogin} defaultValue="Password" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}>
        <Text style={generalStyles.baseText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
