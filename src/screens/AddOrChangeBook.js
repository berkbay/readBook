import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import CustomHeader from "../components/CustomHeader";
import Input from "../components/Input";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Picker from "../components/Picker";
import DateInput from "../components/DateInput";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "../store/actions/booksActions";

const AddNewBook = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const item = route?.params?.item;

  const [name, setName] = useState("");
  const [writerName, setWriterName] = useState("");
  const [dateStart, setDateStart] = useState(null);
  const [dateFinish, setDateFinish] = useState(null);
  const [category, setCategory] = useState(null);
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    if (!!item) {
      setItemId(item.id);
      setName(item.data.name);
      setWriterName(item.data.writerName);
      setCategory(item.data.category);
      !!item.data.dateStart && setDateStart(item.data.dateStart);
      !!item.data.dateFinish && setDateFinish(item.data.dateFinish);
    }
    alert(
      "Tarih Seçimi yapmak için lütfen bulunduğu alandaki simgeye dokununuz."
    );
  }, []);

  const AddBook = useCallback(() => {
    dispatch(
      addBook({
        name: name,
        writerName: writerName,
        dateStart: dateStart,
        dateFinish: dateFinish,
        category: category,
        updateDate: new Date(),
      })
    );
    navigation.navigate("Home");
  }, [name, writerName, dateStart, dateFinish, category]);

  const changeBook = useCallback(
    (itemId) => {
      dispatch(
        updateBook(
          {
            name: name,
            writerName: writerName,
            dateStart: dateStart,
            dateFinish: dateFinish,
            category: category,
            updateDate: new Date(),
          },
          { itemId }
        )
      );
      navigation.navigate("Home");
    },
    [name, writerName, dateStart, dateFinish, category, itemId]
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <CustomHeader
        name={!!item ? "Kitap Bilgilerini Güncelle" : "Yeni Kitap Ekle"}
        navigation={navigation}
      />
      <View>
        <Input
          iconLeft={"book"}
          size={32}
          style={{ marginTop: 20 }}
          secureTextEntry={false}
          label={"Kitap Adı*"}
          autoCapitalize="none"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          iconLeft={"human"}
          size={32}
          style={{ marginTop: 20 }}
          secureTextEntry={false}
          label={"Yazar Adı*"}
          autoCapitalize="none"
          value={writerName}
          onChangeText={(text) => {
            setWriterName(text);
          }}
        />
        <DateInput
          date={dateStart}
          setDate={setDateStart}
          label={"Başlangıç Tarihi - Saati"}
        />
        <DateInput
          date={dateFinish}
          setDate={setDateFinish}
          label={"Bitiş Tarihi - Saati"}
        />
        <Picker setValue={setCategory} value={category} />
        <TouchableOpacity
          onPress={() => {
            if (!name || !writerName || !category) {
              alert("Lütfen zorunlu alanlarını doldurunuz");
            } else {
              !!item ? changeBook(itemId) : AddBook();
            }
          }}
          style={{
            alignItems: "center",
            justifyContent: "center",
            margin: 30,
            borderRadius: 20,
            backgroundColor: "black",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              padding: 10,
              fontWeight: "700",
              fontSize: 18,
            }}
          >
            {!!item ? "Kaydet" : "Ekle"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddNewBook;
