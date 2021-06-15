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
