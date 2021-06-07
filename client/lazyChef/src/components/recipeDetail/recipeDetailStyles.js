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
  recipeIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageIcons: {
    width: 50,
    height: 50,
  },
  iconsDetail: {
    fontSize: 60,
  },
  recipeInfo: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default styles;
