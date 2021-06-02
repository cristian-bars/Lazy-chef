import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import Dashboard from './src/components/dashboard/Dashboard';
import Login from './src/components/login/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Dashboard} />
        <Stack.Screen name="Register" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
