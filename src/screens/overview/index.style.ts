import { StyleSheet } from "react-native";
import Color from "../../theme/color";
import Font from "../../theme/font";

const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: Color.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center"
  },
  textLoading: {
    ...Font.large,
    color: Color.back,
    alignSelf: 'center',
    marginTop: 20,
  },
  listContainer: {
    marginVertical: 10,
  },
});

export default styles;