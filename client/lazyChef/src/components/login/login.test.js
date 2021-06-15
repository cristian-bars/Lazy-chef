import 'react-native';
import React from 'react';
import Login from './index';
import thunk from 'redux-thunk';
import Store from 'redux-mock-store';
import * as actions from '../../redux/actions/usersActionCreators';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';

describe('Given a Login component', () => {
  const mockStore = Store([thunk]);
  let navigation;
  let myStore;
  beforeEach(() => {
    jest.spyOn(actions, 'getUserById').mockReturnValueOnce({type: ''});
    myStore = mockStore({
      userAcces: [
        {email: 'Cristian@gmail.com', password: '1a'},
        {email: 'Bars@gmail.com', password: '2a'},
      ],
    });
    navigation = {
      navigate: jest.fn(),
    };
  });

  test('renders correctly', () => {
    const wrapper = render(
      <Provider store={myStore}>
        <Login />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  describe('And user have token', () => {
    test('Then navigation is invoked ', () => {
      myStore = mockStore({
        userAcces: {
          token: '1234abc',
        },
      });

      render(
        <Provider store={myStore}>
          <Login navigation={navigation} />
        </Provider>,
      );

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });

  describe('When login button is pressed', () => {
    test('Then navigation.navigate is invoked', () => {
      const {getByTestId} = render(
        <Provider store={myStore}>
          <Login navigation={navigation} />
        </Provider>,
      );
      const login = getByTestId('login');
      fireEvent.press(login);

      expect(actions.getUserById).toHaveBeenCalled();
    });
  });

  describe('When emailInput is typing with cristian@gmail.com', () => {
    test('Then emailInput value is cristian@gmail.com', () => {
      const {getByTestId} = render(
        <Provider store={myStore}>
          <Login />
        </Provider>,
      );
      const emailInput = getByTestId('emailInput');
      const email = 'cristian@gmail.com';
      fireEvent.changeText(emailInput, email);

      expect(emailInput.props.value).toBe(email);
    });
  });

  describe('When passwordInput is typing with 1234ABC', () => {
    test('Then passwordInput value is 1234ABC', () => {
      const {getByTestId} = render(
        <Provider store={myStore}>
          <Login />
        </Provider>,
      );
      const passwordInput = getByTestId('passwordInput');
      const password = '1234ABC';
      fireEvent.changeText(passwordInput, password);

      expect(passwordInput.props.value).toBe(password);
    });
  });

  describe('When register button is pressed', () => {
    test('Then navigation.navigate is invoked', () => {
      const {getByTestId} = render(
        <Provider store={myStore}>
          <Login navigation={navigation} />
        </Provider>,
      );
      const register = getByTestId('register');
      fireEvent.press(register);

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
