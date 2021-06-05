import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  },
  recipeDetail: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 25,
    flex: 1,
    flexWrap: 'wrap',
    paddingLeft: 10,
  },
  descriptionText: {
    fontSize: 15,
    flexWrap: 'wrap',
  },
  recipeInfo: {
    flexDirection: 'column',
  },
});

export default styles;
