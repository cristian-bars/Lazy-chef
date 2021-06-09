import {StyleSheet} from 'react-native';

const generalStyles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
    alignItems: 'flex-start',
  },
  button: {
    width: 300,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  container: {
    paddingTop: 50,
    flex: 1,
    justifyContent: 'center',
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
    paddingLeft: 20,
    fontSize: 20,
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  rowArround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  roundButton: {
    position: 'absolute',
    zIndex: 1,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 25,
    width: 10,
    height: 10,
  },
  roundBackButton: {
    top: 20,
    left: 20,
  },
  roundStarButton: {
    top: 20,
    left: 330,
  },
  backImage: {
    width: 20,
    height: 20,
    position: 'relative',
    top: -10,
    left: -12,
  },
});

export default generalStyles;
