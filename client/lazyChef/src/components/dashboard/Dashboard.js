import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {getUserById} from '../../redux/actions/usersActionCreators';
import styles from './styles';
import generalStyles from '../../../styles';

const Dashboard = ({navigation, dispatch}) => {
  let [email, showEmail] = useState('');
  let [password, showPassword] = useState('');

  const loginClick = () => {
    dispatch(getUserById({email, password}));
  };

  return (
    <View style={generalStyles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.ibb.co/MVc000Y/Logo-transparent-Patxi.png',
        }}
      />
      <View styles={styles.loginSection}>
        <SafeAreaView>
          <TextInput
            style={generalStyles.formLogin}
            placeholder="Email"
            onChangeText={email => showEmail(email)}
          />
          <TextInput
            style={generalStyles.formLogin}
            placeholder="Password"
            onChangeText={password => showPassword(password)}
          />
        </SafeAreaView>

        <TouchableOpacity
          style={generalStyles.button}
          onPress={() => {
            loginClick();
          }}>
          <Text style={generalStyles.baseText}>Acceder</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchRegister}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.register}>Crear una cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function mapStateToProps({user}) {
  return {
    user,
  };
}

export default connect(mapStateToProps)(Dashboard);
