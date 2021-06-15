import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3E0FF',
    justifyContent: 'center',
  },
  content: {},
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
    width: 360,
  },
  wordsTitle: {
    fontSize: 20,
    backgroundColor: 'white',
  },
  list: {
    height: 200,
  },
  searchWord: {
    paddingVertical: 10,
  },
});

export default styles;
