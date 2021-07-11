import { StyleSheet } from "react-native";
import Color from "../../theme/color";
import Font from "../../theme/font";

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Color.white,
    borderRadius: 10,
    paddingRight: 15,
    marginVertical: 7,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
  },
  imagePreview: {
    resizeMode: 'cover',
    height: 70,
    width: 100,
    marginRight: 15,
  },
  missinImage: {
    resizeMode: 'contain',
    height: 70,
    width: 100,
    marginRight: 15,
    backgroundColor: Color.emptyImage,
  },
  textCardTitle: {
    ...Font.meddium,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  textCardDate: {
    ...Font.small
  },
  arrowIcon: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
  },
});

export default styles;