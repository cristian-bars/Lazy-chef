import 'react-native';
import React from 'react';
import UserDetail from './index';
import thunk from 'redux-thunk';
import Store from 'redux-mock-store';
import * as actions from '../../redux/actions/usersActionCreators';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';

describe('Given a FavoritesList component', () => {
  const mockStore = Store([thunk]);
  let navigation;
  let myStore;
  let route;
  beforeEach(() => {
    myStore = mockStore({
      userAcces: {
        user: {
          email: 'Cristian@gmail.com',
          password: '1a',
          favouriteRecipes: ['4a3b2c1d'],
          recipesCreated: ['4a3b2c1d'],
        },
      },
      recipes: [
        {
          title: 'meat',
          _id: '4a3b2c1d',
          image: ['image1'],
          recipeIngredient: ['perejil', 'tomate'],
        },
        {
          _id: '123456',
          title: 'fish',
          image: ['image2'],
          recipeIngredient: ['agua', 'arroz'],
        },
      ],
    });
    navigation = {
      navigate: jest.fn(),
      goBack: jest.fn(),
    };
  });

  test('renders correctly', () => {
    const wrapper = render(
      <Provider store={myStore}>
        <UserDetail navigation={navigation} />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
