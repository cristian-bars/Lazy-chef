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
  wordsList: {
    backgroundColor: 'white',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 10,
    padding: 10,
  },
  wordsTitle: {
    fontSize: 30,
    color: '#FF914D',
    backgroundColor: 'white',
  },
  ingredientsList: {
    flexDirection: 'row',
  },
  searchWord: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  listWords: {
    color: 'white',
    height: 50,
  },
});

export default styles;
