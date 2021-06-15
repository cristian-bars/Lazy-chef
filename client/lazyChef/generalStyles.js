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
  background: {
    backgroundColor: 'white',
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
  tabIcon: {
    width: 30,
    height: 30,
  },
  input: {
    width: 360,
    marginTop: 20,
    height: 50,
    paddingLeft: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 25,
    margin: 15,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#397ED0',
    backgroundColor: 'white',
  },
  inputText: {
    paddingLeft: 20,
    fontSize: 20,
  },
  searchImage: {
    width: 30,
    height: 30,
    opacity: 0.7,
  },
  wordsList: {
    backgroundColor: 'white',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 10,
    padding: 10,
  },
  recipeLogo: {
    height: 150,
  },
  imageIcons: {
    width: 50,
    height: 50,
  },
  recipeDetail: {
    flexDirection: 'column',
    backgroundColor: 'white',
    margin: 10,
  },
  titleText: {
    fontSize: 20,
    flex: 1,
    padding: 10,
    flexWrap: 'wrap',
  },
  descriptionText: {
    fontSize: 15,
    flexWrap: 'wrap',
    padding: 10,
  },
  recipeIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default generalStyles;
