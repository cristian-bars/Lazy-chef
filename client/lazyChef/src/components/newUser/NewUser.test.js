import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Store from 'redux-mock-store';
import * as actions from '../../redux/actions/usersActionCreators';
import {Provider} from 'react-redux';
import Register from './index';

describe('Given a Register component', () => {
  const mockStore = Store();
  let myStore;
  let navigation;

  const goBack = jest.fn();

  beforeEach(() => {
    jest.spyOn(actions, 'addUsers').mockReturnValueOnce({type: ''});
    myStore = mockStore({
      user: {name: 'Cristian'},
    });
    navigation = {
      navigate: jest.fn(),
    };
  });
  describe('When is render', () => {
    describe('And user.isLogged is false', () => {
      test('Then is mathced to snapshot', () => {
        const tree = render(
          <Provider store={myStore}>
            <Register navigation={navigation} />
          </Provider>,
        );

        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('And user have token', () => {
    test('Then navigation is invoked ', () => {
      myStore = mockStore({
        user: {
          name: 'Cristian',
          email: 'cristian@lazychef.com',
        },
      });

      render(
        <Provider store={myStore}>
          <Register navigation={navigation} />
        </Provider>,
      );

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });

  describe('When Register button is pressed', () => {
    test('Then navigation.navigate is invoked', () => {
      const {getByTestId} = render(
        <Provider store={myStore}>
          <Register navigation={navigation} />
        </Provider>,
      );
      const register = getByTestId('register');
      fireEvent.press(register);

      expect(actions.addUsers).toHaveBeenCalled();
    });
  });

  // describe('When back button is pressed', () => {
  //   test('Then navigation.navigate is invoked', () => {
  //     const {getByTestId} = render(
  //       <Provider store={myStore}>
  //         <Register navigation={goBack} />
  //       </Provider>,
  //     );
  //     const goToBack = getByTestId('goBack');
  //     fireEvent.press(goToBack);

  //     expect(navigation.goBack).toHaveBeenCalled();
  //   });
  // });

  // describe('When nameInput is typing with Cristian', () => {
  //   test('Then nameInput value is Cristian', () => {
  //     const {getByTestId} = render(
  //       <Provider store={myStore}>
  //         <Register />
  //       </Provider>,
  //     );
  //     const nameInput = getByTestId('nameInput');
  //     const name = 'Cristian';
  //     fireEvent.changeText(nameInput, name);

  //     expect(nameInput.props.value).toBe(name);
  //   });
  // });

  // describe('When emailInput is typing with cristian@gmail.com', () => {
  //   test('Then emailInput value is cristian@gmail.com', () => {
  //     const {getByTestId} = render(
  //       <Provider store={myStore}>
  //         <Register />
  //       </Provider>,
  //     );
  //     const emailInput = getByTestId('emailInput');
  //     const email = 'cristian@gmail.com';
  //     fireEvent.changeText(emailInput, email);

  //     expect(emailInput.props.value).toBe(email);
  //   });
  // });

  // describe('When passwordInput is typing with 1234ABC', () => {
  //   test('Then passwordInput value is 1234ABC', () => {
  //     const {getByTestId} = render(
  //       <Provider store={myStore}>
  //         <Register />
  //       </Provider>,
  //     );
  //     const passwordInput = getByTestId('passwordInput');
  //     const password = '1234ABC';
  //     fireEvent.changeText(passwordInput, password);

  //     expect(passwordInput.props.value).toBe(password);
  //   });
  // });
});
