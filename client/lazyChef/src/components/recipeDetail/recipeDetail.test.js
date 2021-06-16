import 'react-native';
import React from 'react';
import RecipeDetail from './index';
import thunk from 'redux-thunk';
import Store from 'redux-mock-store';
import * as actions from '../../redux/actions/recipesActionCreators';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';

describe('Given a RecipeDetail component', () => {
  const mockStore = Store([thunk]);
  let navigation;
  let myStore;
  let route;
  let ingredient;
  beforeEach(() => {
    jest.spyOn(actions, 'loadRecipes').mockReturnValueOnce({type: ''});
    myStore = mockStore({
      recipe: {
        title: 'macarrones',
        description: '1a',
        image: ['a'],
        recipeIngredient: ['b'],
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
});
