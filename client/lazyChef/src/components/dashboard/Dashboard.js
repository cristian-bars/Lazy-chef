import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';

const Dashboard = () => {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      flex: 1,
      padding: 24,
      backgroundColor: '#044AFD',
      alignItems: 'center',
    },
    button: {
      width: 300,
      height: 50,
      borderRadius: 25,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      top: 100,
    },
    baseText: {
      fontFamily: 'Cochin',
      fontSize: 25,
    },
    logo: {
      width: 450,
      height: 450,
    },
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.ibb.co/6vTqDm8/Logo-Trabajo-Final-Patxi.png',
        }}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.baseText}>Acceder</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
