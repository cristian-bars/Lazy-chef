import 'react-native';
import React from 'react';
import FavoritesList from './index';
import thunk from 'redux-thunk';
import Store from 'redux-mock-store';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';

describe('Given a FavoritesList component', () => {
  const mockStore = Store([thunk]);
  let myStore;
  beforeEach(() => {
    myStore = mockStore({
      userAcces: {
        user: {
          email: 'Cristian@gmail.com',
          password: '1a',
          favouriteRecipes: ['4a3b2c1d'],
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
  });

  test('renders correctly', () => {
    const wrapper = render(
      <Provider store={myStore}>
        <FavoritesList />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
