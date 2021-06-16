import 'react-native';
import React from 'react';
import RecipesList from './index';
import thunk from 'redux-thunk';
import Store from 'redux-mock-store';
import * as actions from '../../redux/actions/recipesActionCreators';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';

describe('Given a RecipesList component', () => {
  const mockStore = Store([thunk]);
  let navigation;
  let myStore;
  let route;
  beforeEach(() => {
    jest.spyOn(actions, 'loadRecipes').mockReturnValueOnce({type: ''});
    myStore = mockStore({
      recipes: [
        {
          title: 'macarrones',
          description: '1a',
          image: ['a'],
          recipeIngredient: ['b'],
        },
        {
          title: 'Queso',
          description: '2a',
          image: ['a'],
          recipeIngredient: ['b'],
        },
      ],
    });
    navigation = {
      navigate: jest.fn(),
    };
    route = {
      params: {
        ingredient: 'tomate',
      },
    };
  });

  test('renders correctly', () => {
    console.log(route);
    const wrapper = render(
      <Provider store={myStore}>
        <RecipesList route={route} />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
