import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  //Header Component
  customHeaderView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
  },
  customHeaderText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  customHeaderItem: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
