import React from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/actions/categoryActions";

const Picker = ({ value, setValue }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const { data, loading } = useSelector((state) => state.categories);

  return (
    <React.Fragment>
      {loading === true ? null : (
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 20,
            alignSelf: "center",
            width: "90%",
            color: "#424242",
            fontWeight: "700",
            fontStyle: "normal",
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 3,
            borderRadius: 10,
          }}
        >
          <DropDownPicker
            style={{
              zIndex: 100,
              borderRadius: 10,
              height: 60,
              borderWidth: 0,
            }}
            placeholderStyle={{ color: "grey" }}
            schema={{
              label: "name", // required
              value: "name", // required
            }}
            open={open}
            value={value}
            items={data.data}
            setOpen={setOpen}
            setValue={setValue}
            placeholder={"Kategori Seçiniz*"}
          />
        </View>
      )}
    </React.Fragment>
  );
};

export default Picker;
