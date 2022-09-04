import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const AddBookButton = ({ navigation, size }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("AddNewBook");
      }}
      style={{ position: "absolute", bottom: 20, right: 20 }}
    >
      <MaterialCommunityIcons
        name="book-plus-multiple"
        size={size}
        color="black"
      />
    </TouchableOpacity>
  );
};

export default AddBookButton;
