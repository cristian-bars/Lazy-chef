import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3E0FF',
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
    marginLeft: 10,
  },
  optionslist: {
    flexWrap: 'wrap',
  },
});

export default styles;
