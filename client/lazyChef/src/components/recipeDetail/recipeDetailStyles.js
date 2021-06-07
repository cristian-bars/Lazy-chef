import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3E0FF',
  },
  recipeImage: {
    height: 300,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 20,
  },
  imageIcons: {
    width: 50,
    height: 50,
  },
  iconsDetail: {
    fontSize: 15,
  },
  recipeInfo: {
    flexDirection: 'column',
  },
  infoContainer: {
    padding: 10,
  },
  ingredientsDetail: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
