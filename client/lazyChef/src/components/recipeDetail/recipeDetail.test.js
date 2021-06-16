import 'react-native';
import React from 'react';
import RecipeDetail from './index';
import thunk from 'redux-thunk';
import Store from 'redux-mock-store';
import * as actions from '../../redux/actions/usersActionCreators';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';

describe('Given a RecipeDetail component', () => {
  const mockStore = Store([thunk]);
  let navigation;
  let myStore;
  let route;
  let ingredient;
  beforeEach(() => {
    jest.spyOn(actions, 'updateUser').mockReturnValueOnce({type: ''});
    myStore = mockStore({
      recipe: {
        _id: '1234abcd',
        title: 'macarrones',
        description: '1a',
        image: ['a'],
        recipeIngredient: ['b'],
      },
      userAcces: {
        user: {
          favouriteRecipes: ['1234abcd'],
        },
      },
    });
    navigation = {
      navigate: jest.fn(),
      goBack: jest.fn(),
    };
    route = {
      params: {
        recipeId: '1234',
      },
    };
  });

  test('renders correctly', () => {
    console.log(route.params);
    const wrapper = render(
      <Provider store={myStore}>
        <RecipeDetail route={route} navigation={navigation} />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('When star button is pressed', () => {
    test('Then removeFav is invoked', () => {
      myStore = mockStore({
        userAcces: {
          user: {
            favouriteRecipes: ['1234abcd'],
          },
        },
        recipe: {
          _id: '1234abcd',
          title: 'macarrones',
          description: '1a',
          image: ['a'],
          recipeIngredient: ['b'],
        },
      });
      const {getByTestId} = render(
        <Provider store={myStore}>
          <RecipeDetail route={route} navigation={navigation} />
        </Provider>,
      );
      const favorite = getByTestId('favoritePress');
      fireEvent.press(favorite);

      expect(actions.updateUser).toHaveBeenCalled();
    });

    test('Then addFav is invoked', () => {
      myStore = mockStore({
        userAcces: {
          user: {
            favouriteRecipes: ['1234'],
          },
        },
        recipe: {
          _id: '1234abcd',
          title: 'macarrones',
          description: '1a',
          image: ['a'],
          recipeIngredient: ['b'],
        },
      });
      const {getByTestId} = render(
        <Provider store={myStore}>
          <RecipeDetail route={route} navigation={navigation} />
        </Provider>,
      );
      const favorite = getByTestId('favoritePress');
      fireEvent.press(favorite);

      expect(actions.updateUser).toHaveBeenCalled();
    });
  });
});
