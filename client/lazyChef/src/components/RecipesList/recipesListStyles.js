import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3E0FF',
  },
  logo: {
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
  ingList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 5,
  },
  ingredientsList: {
    marginHorizontal: 10,
    backgroundColor: 'white',
    fontSize: 25,
    borderRadius: 5,
    alignContent: 'flex-end',
  },
  wordsTitle: {
    fontSize: 25,
    color: '#FF914D',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  optionslist: {
    flexWrap: 'wrap',
  },
});

export default styles;
