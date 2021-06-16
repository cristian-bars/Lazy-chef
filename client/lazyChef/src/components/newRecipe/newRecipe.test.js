import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Store from 'redux-mock-store';
import * as actions from '../../redux/actions/recipesActionCreators';
import {Provider} from 'react-redux';
import NewRecipe from './index';

describe('Given a newRecipe component', () => {
  const mockStore = Store();
  let myStore;
  let navigation;

  beforeEach(() => {
    jest.spyOn(actions, 'addRecipe').mockReturnValueOnce({type: ''});
    myStore = mockStore({
      userAcces: {user: {name: 'Cristian'}},
      recipe: {title: 'meat'},
    });
    navigation = {
      navigate: jest.fn(),
      goBack: jest.fn(),
    };
  });
  describe('When is render', () => {
    describe('And all is correct', () => {
      test('Then is matched to snapshot', () => {
        const tree = render(
          <Provider store={myStore}>
            <NewRecipe navigation={navigation} />
          </Provider>,
        );

        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('And user have token', () => {
    test('Then navigation is invoked ', () => {
      myStore = mockStore({
        userAcces: {
          user: {name: 'Cristian'},
          token: '1234abc',
        },
      });

      render(
        <Provider store={myStore}>
          <NewRecipe navigation={navigation} />
        </Provider>,
      );

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });

  describe('When add recipe button is pressed', () => {
    test('Then function addRecipe is called', () => {
      const {getByTestId} = render(
        <Provider store={myStore}>
          <NewRecipe navigation={navigation} />
        </Provider>,
      );
      const addRecipe = getByTestId('addRecipe');
      fireEvent.press(addRecipe);

      expect(actions.addRecipe).toHaveBeenCalled();
    });
  });

  describe('When titleInput is typing with Ensalada', () => {
    test('Then titleInput value is Ensalada', () => {
      const {getByTestId} = render(
        <Provider store={myStore}>
          <NewRecipe navigation={navigation} />
        </Provider>,
      );
      const titleInput = getByTestId('titleInput');
      const title = 'Ensalada';
      fireEvent.changeText(titleInput, title);

      expect(titleInput.props.value).toBe(title);
    });
  });

  describe('When descriptionInput is typing with Fresca', () => {
    test('Then descriptionInput value is Fresca', () => {
      const {getByTestId} = render(
        <Provider store={myStore}>
          <NewRecipe navigation={navigation} />
        </Provider>,
      );
      const descriptionInput = getByTestId('descriptionInput');
      const description = 'Fresca';
      fireEvent.changeText(descriptionInput, description);

      expect(descriptionInput.props.value).toBe(description);
    });
  });
});
