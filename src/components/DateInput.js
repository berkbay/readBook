import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "./Input";

const DateInput = ({ date, setDate, label }) => {
  const [showStart, setShowStart] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setShowStart(false);
  };

  const showDatePicker = () => {
    setShowStart(!showStart);
  };
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={() => {
          showDatePicker();
        }}
      >
        <Input
          iconLeft={"calendar"}
          size={32}
          style={{ marginTop: 20 }}
          secureTextEntry={false}
          label={label}
          autoCapitalize="none"
          editable={false}
          value={!!date ? date.toLocaleString() : ""}
        />
      </TouchableOpacity>
      {showStart === true ? (
        <View>
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode={"datetime"}
            is24Hour={true}
            onChange={onChange}
          />
        </View>
      ) : null}
    </React.Fragment>
  );
};

export default DateInput;
