import 'react-native';
import React from 'react';
import Dashboard from './index';
import thunk from 'redux-thunk';
import Store from 'redux-mock-store';
import * as actions from '../../redux/actions/recipesActionCreators';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';

describe('Given a Login component', () => {
  const mockStore = Store([thunk]);
  let navigation;
  let myStore;
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
  });

  test('renders correctly', () => {
    const wrapper = render(
      <Provider store={myStore}>
        <Dashboard />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('When ingredient is pressed', () => {
    test('Then navigation.navigate is invoked with ingredient 1', () => {
      const {getByTestId} = render(
        <Provider store={myStore}>
          <Dashboard navigation={navigation} />
        </Provider>,
      );
      const recipeDetail = getByTestId('ingredient1');
      fireEvent.press(recipeDetail);

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });

  test('Then navigation.navigate is invoked with ingredient 2', () => {
    const {getByTestId} = render(
      <Provider store={myStore}>
        <Dashboard navigation={navigation} />
      </Provider>,
    );
    const recipeDetail = getByTestId('ingredient2');
    fireEvent.press(recipeDetail);

    expect(navigation.navigate).toHaveBeenCalled();
  });

  test('Then navigation.navigate is invoked with ingredient 3', () => {
    const {getByTestId} = render(
      <Provider store={myStore}>
        <Dashboard navigation={navigation} />
      </Provider>,
    );
    const recipeDetail = getByTestId('ingredient3');
    fireEvent.press(recipeDetail);

    expect(navigation.navigate).toHaveBeenCalled();
  });

  test('Then navigation.navigate is invoked with ingredient 4', () => {
    const {getByTestId} = render(
      <Provider store={myStore}>
        <Dashboard navigation={navigation} />
      </Provider>,
    );
    const recipeDetail = getByTestId('ingredient4');
    fireEvent.press(recipeDetail);

    expect(navigation.navigate).toHaveBeenCalled();
  });
});
