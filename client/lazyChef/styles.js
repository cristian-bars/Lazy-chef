import {StyleSheet} from 'react-native';

const generalStyles = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    alignItems: 'flex-start',
  },
  button: {
    width: 300,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingTop: 50,
    flex: 1,
    padding: 24,
    backgroundColor: '#044AFD',
    alignItems: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 25,
  },
  homeNav: {
    backgroundColor: 'black',
    color: 'white',
  },
  formLogin: {
    width: 300,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
});

export default generalStyles;
