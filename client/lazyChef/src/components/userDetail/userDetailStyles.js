import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#D3E0FF',
    alignItems: 'center',
  },
  userContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: '#D3E0FF',
  },
  userImage: {
    width: 50,
    height: 50,
  },
  touchUser: {
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  register: {
    color: 'white',
  },
});

export default styles;
