import { Text, View } from "react-native";
import React from "react";

const ListItem = ({ label, item }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 16,
          textDecorationLine: "underline",
          flex: 1,
        }}
      >
        {label}
      </Text>
      <Text style={{ fontWeight: "500", fontSize: 14, flex: 1 }}>{item}</Text>
    </View>
  );
};

export default ListItem;
