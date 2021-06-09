import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from './userDetailStyles';
import generalStyles from '../../../generalStyles';

const UserDetail = ({userAcces, navigation: {goBack}}) => {
  console.log(userAcces);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[generalStyles.roundButton, generalStyles.roundBackButton]}
        onPress={() => goBack()}>
        <Image
          style={generalStyles.backImage}
          source={require('../../img/back.png')}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.titleText}>Hola {userAcces.user.email}</Text>
      </View>
    </View>
  );
};

function mapStateToProps({userAcces}) {
  return {
    userAcces,
  };
}

export default connect(mapStateToProps)(UserDetail);
