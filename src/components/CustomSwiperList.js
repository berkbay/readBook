import React, { useCallback, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { useDispatch } from "react-redux";
import { deleteBook } from "../store/actions/booksActions";
import ListItem from "./ListItem";

const CustomSwiperList = ({ data, navigation }) => {
  const dispatch = useDispatch();
  const swipeRow = useRef();

  const deleteButton = useCallback(
    (rowMap, id) => {
      dispatch(deleteBook(id));
    },
    [data]
  );

  const updateButton = (item) => {
    navigation.navigate("AddNewBook", { item: item });
  };

  const renderItem = (item) => {
    const { data } = item.item;
    return (
      <React.Fragment>
        <View style={styles.rowFront}>
          <View>
            <ListItem label={"Kitap ismi: "} item={data.name} />
            <ListItem label={"Yazarın Adı: "} item={data.writerName} />
            <ListItem label={"Kategori: "} item={data.category} />
            {!!data.dateStart && (
              <ListItem
                label={"Başlangıc Tarihi: "}
                item={data.dateStart.toLocaleString()}
              />
            )}
            {!!data.dateFinish && (
              <ListItem
                label={"Bitis Tarihi: "}
                item={data.dateFinish.toLocaleString()}
              />
            )}
            <ListItem
              label={"Son Güncelleme:"}
              item={data.updateDate.toLocaleString()}
            />
          </View>
        </View>
        <View style={styles.horizontalLine} />
      </React.Fragment>
    );
  };

  const renderButtons = ({ item, rowMap }) => {
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => {
            updateButton(item);
          }}
        >
          <Text style={styles.backTextColor}>Güncelle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => {
            deleteButton(rowMap, item.id);
          }}
        >
          <Text style={styles.backTextColor}>Sil</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SwipeListView
      ref={swipeRow}
      closeOnRowBeginSwipe={true}
      closeOnScroll={true}
      closeOnRowOpen={true}
      closeOnRowPress={true}
      disableRightSwipe
      keyExtractor={(item, index) => index.toString()}
      data={data}
      previewRowKey={"0"}
      previewOpenValue={-40}
      previewOpenDelay={3000}
      renderItem={(item) => renderItem(item)}
      renderHiddenItem={(item, rowMap) => renderButtons(item, rowMap)}
      rightOpenValue={-150}
    />
  );
};

export default CustomSwiperList;

const styles = StyleSheet.create({
  rowFront: {
    backgroundColor: "#FFF",
    justifyContent: "center",
    padding: 10,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#FFF",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 40,
    justifyContent: "center",
    position: "absolute",
    top: 10,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
  backTextColor: {
    color: "#FFF",
  },
  horizontalLine: {
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "grey",
  },
});
