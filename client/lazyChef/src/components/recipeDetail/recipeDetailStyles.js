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
    alignItems: 'center',
  },
  infoContainer: {
    padding: 10,
  },
  ingredientsDetail: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  starImage: {
    width: 20,
    height: 20,
    position: 'relative',
    top: -10,
    left: -10,
  },
  recipeDetails: {
    backgroundColor: 'lightgrey',
    marginTop: 10,
  },
  information: {
    backgroundColor: 'white',
  },
  informationTitle: {
    fontSize: 20,
    paddingVertical: 5,
    fontWeight: 'bold',
    color: '#616161',
  },
  informationTitleVisible: {
    fontSize: 20,
    paddingVertical: 5,
    fontWeight: 'bold',
    color: '#FF914D',
  },
  recipeIngredient: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
  },
  informationTaps: {
    width: 120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
