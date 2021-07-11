import { StyleSheet } from "react-native";
import Color from "../../theme/color";
import Font from "../../theme/font";

const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: Color.background,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  imagesContainer: {
    marginTop: 15,
  },
  images: {
    resizeMode: 'cover',
    height: 118,
    width: 118,
    marginVertical: 1,
    marginHorizontal: 1,
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  title: {
    ...Font.large,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 5,
  },
  textInfo: {
    ...Font.meddium,
    lineHeight: 20,
  },
});

export default styles;