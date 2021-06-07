import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import Dashboard from './src/components/dashboard/Dashboard';
import Login from './src/components/login/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/components/home/Home';
import store from './src/redux/stores/index';
import RecipeDetail from './src/components/recipeDetail/RecipeDetail';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={store()}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Dashboard}
            options={() => ({
              tabBarVisible: false,
            })}
          />
          <Tab.Screen
            name="Register"
            component={Login}
            options={() => ({
              tabBarVisible: false,
            })}
          />
          <Tab.Screen name="Profile" component={Home} />
          <Tab.Screen name="Detail" component={RecipeDetail} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
