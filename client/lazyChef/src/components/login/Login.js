import React from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import generalStyles from '../../../styles';
import styles from './styles';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.formLogin} defaultValue="You can type in me" />
      <TouchableOpacity style={styles.button}>
        <Text style={generalStyles.baseText}>Acceder</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
