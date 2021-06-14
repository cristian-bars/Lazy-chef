import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import Store from 'redux-mock-store';
import {Avatar} from 'react-native-elements';
import * as actions from '../../redux/actions/usersActionCreators';
import {Provider} from 'react-redux';
import Login from './Login';

describe('When invoked a Login component', () => {
  const mockStore = Store();
  const store = mockStore({
    user: [
      {
        _id: '2',
        user: {
          name: 'Anna',
          email: 'annita',
          password: 'annaaaza',
        },
      },
    ],
  });
  let navigation;
  beforeEach(() => {
    navigation = {
      navigate: jest.fn(),
    };
  });

  test('Should render the login component with inputs', () => {
    const login = render(
      <Provider store={store}>
        <Login navigation={navigation} />
      </Provider>,
    );
    expect(login).toMatchSnapshot();
  });
});
