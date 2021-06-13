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
  recipeDetail: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 5,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#616161',
  },
  titleTextRecipes: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#616161',
  },
  titleRecipe: {
    fontSize: 20,
    color: '#616161',
    textAlign: 'center',
  },
  userImage: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#FF914D',
    borderRadius: 50,
    margin: 10,
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
