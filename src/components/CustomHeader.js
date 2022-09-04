import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import { MaterialIcons } from "@expo/vector-icons";

const CustomHeader = ({ navigation, name, route }) => {
  const title = name.includes("undefined") ? "Hatalı Sayfa" : name;
  return (
    <View style={styles.customHeaderView}>
      {route === "Home" ? (
        <View style={styles.customHeaderItem} />
      ) : (
        <TouchableOpacity
          style={styles.customHeaderItem}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
        </TouchableOpacity>
      )}
      <View style={{ flex: 6 }}>
        <Text style={styles.customHeaderText}>{title}</Text>
      </View>
      <View style={styles.customHeaderItem} />
    </View>
  );
};

export default CustomHeader;
