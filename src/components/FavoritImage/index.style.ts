import { StyleSheet } from "react-native";
import Color from "../../theme/color";
import Font from "../../theme/font";

const styles = StyleSheet.create({
  images: {
    resizeMode: 'cover',
    height: 118,
    width: 118,
    marginVertical: 1,
    marginHorizontal: 1,
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  favoritIcon: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 10,
    right: 10,
  },
});

export default styles;