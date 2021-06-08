import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3E0FF',
  },
  recipeImage: {
    height: 300,
    position: 'relative',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 10,
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
    paddingVertical: 5,
  },
  infoContainer: {
    padding: 10,
  },
  ingredientsDetail: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  starImage: {
    width: 20,
    height: 20,
    position: 'relative',
    top: -10,
    left: -10,
  },
  recipeDetails: {
    backgroundColor: 'white',
    marginTop: 10,
  },
  information: {
    backgroundColor: 'white',
  },
  informationTitle: {
    fontSize: 20,
    paddingVertical: 5,
  },
  recipeIngredient: {
    paddingHorizontal: 20,
    fontSize: 20,
  },
  informationTaps: {
    width: 120,
    height: 50,
  },
});

export default styles;
