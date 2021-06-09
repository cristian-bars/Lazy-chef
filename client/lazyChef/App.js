import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {View, Image} from 'react-native';
import Login from './src/components/login/Login';
import NewUser from './src/components/newUser/NewUser';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RecipesList from './src/components/RecipesList/RecipesList';
import store from './src/redux/stores/index';
import RecipeDetail from './src/components/recipeDetail/RecipeDetail';
import UserDetail from './src/components/userDetail/UserDetail';
import NewRecipe from './src/components/newRecipe/NewRecipe';
import generalStyles from './generalStyles';
import FavoritesList from './src/components/favoritesList/FavoritesList';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store()}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarButton: ['Home', 'Register', 'AddRecipe', 'Detail'].includes(
              route.name,
            )
              ? () => {
                  return null;
                }
              : undefined,
          })}
          tabBarOptions={{
            showLabel: false,
          }}>
          <Tab.Screen
            name="Home"
            component={Login}
            options={() => ({
              tabBarVisible: false,
            })}
          />
          <Tab.Screen
            name="Register"
            component={NewUser}
            options={() => ({
              tabBarVisible: false,
            })}
          />
          <Tab.Screen
            name="RecipeList"
            component={RecipesList}
            options={{
              tabBarIcon: () => (
                <View>
                  <Image
                    style={generalStyles.tabIcon}
                    source={require('./src/img/home.png')}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen name="Detail" component={RecipeDetail} />
          <Tab.Screen
            name="Favorites"
            component={FavoritesList}
            options={{
              tabBarIcon: () => (
                <View>
                  <Image
                    style={generalStyles.tabIcon}
                    source={require('./src/img/estrella.png')}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="User"
            component={UserDetail}
            options={{
              tabBarIcon: () => (
                <View>
                  <Image
                    style={generalStyles.tabIcon}
                    source={require('./src/img/user.png')}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen name="AddRecipe" component={NewRecipe} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
