import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import CustomHeader from "../components/CustomHeader";
import AddBookButton from "../components/AddBookButton";
import { useSelector } from "react-redux";
import { SwipeListView } from "react-native-swipe-list-view";
import CustomSwiperList from "../components/CustomSwiperList";

const HomeScreen = ({ navigation }) => {
  const { list } = useSelector((state) => state.books);
  list.map((item) => console.log("MAP", item.id));
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <CustomHeader
        name={"Kitaplarınız"}
        route={"Home"}
        navigation={navigation}
      />
      <CustomSwiperList data={list} navigation={navigation} />
      <AddBookButton navigation={navigation} size={40} />
    </SafeAreaView>
  );
};

export default HomeScreen;
