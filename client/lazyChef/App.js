import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import Dashboard from './src/components/dashboard/Dashboard';
import Login from './src/components/login/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/components/home/Home';
import store from './src/redux/stores/index';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store()}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Register" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
