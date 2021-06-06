/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {getUserById} from '../../redux/actions/usersActionCreators';
import styles from './recipeDetailStyles';

const UserDetail = ({user, dispatch, route}) => {
  const {recipeId} = route.params;
  useEffect(() => {
    dispatch(getUserById(recipeId));
  }, [recipeId]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>{user.title}</Text>
      </View>
    </View>
  );
};

UserDetail.propTypes = {
  user: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    user: store.user,
  };
}

export default connect(mapStateToProps)(UserDetail);
