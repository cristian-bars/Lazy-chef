import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3E0FF',
    justifyContent: 'center',
  },
  wordsList: {
    backgroundColor: 'white',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 10,
    padding: 20,
    height: 200,
  },
  wordsTitle: {
    fontSize: 20,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  list: {
    height: 200,
  },
  searchWord: {
    paddingVertical: 10,
  },
  selectedWord: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: '#f0f8ff',
    marginBottom: 10,
    padding: 5,
    height: 45,
    alignContent: 'center',
  },
});

export default styles;
