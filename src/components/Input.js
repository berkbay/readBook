import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const TextField = (props) => {
  const {
    onPress,
    iconLeft,
    iconRight,
    label,
    errorText,
    value,
    style,
    onBlur,
    onFocus,
    size,
    onChangeText,
    ...restOfProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null);
  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused, value]);

  let color = "#B9C4CA";
  if (errorText) {
    color = "#B00020";
  }

  return (
    <View style={[style]}>
      {iconLeft ? (
        <View style={styles.iconLeft}>
          <MaterialCommunityIcons
            name={iconLeft}
            size={size}
            color={"#919097"}
          />
        </View>
      ) : null}
      <TextInput
        underlineColorAndroid="transparent"
        style={[
          styles.input,
          {
            alignSelf: "center",
            width: "90%",
            color: "#424242",
            fontWeight: "700",
            fontStyle: "normal",
            fontSize: 14,
            paddingTop: 15,
            paddingBottom: -1,
            paddingLeft: "11%",
            paddingRight: 40,

            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 3,
          },
        ]}
        ref={inputRef}
        {...restOfProps}
        value={value}
        onBlur={(event) => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        onFocus={(event) => {
          setIsFocused(true);
          onFocus?.(event);
        }}
        onChangeText={onChangeText}
      />

      {iconRight ? (
        <View style={styles.iconRight}>
          <MaterialCommunityIcons
            name={iconLeft}
            size={size}
            color={"#919097"}
          />
        </View>
      ) : null}

      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Animated.View
          style={[
            {
              position: "absolute",
              width: "100%",
              height: "100%",
              justifyContent: "center",
            },
            styles.labelContainer,
            {
              transform: [
                {
                  translateY: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -13],
                  }),
                },
              ],
            },
          ]}
        >
          <Text
            style={[
              styles.label,
              {
                marginLeft: "16%",
                color: color,
              },
            ]}
          >
            {label}
            {errorText ? "*" : ""}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      {!!errorText && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 62,
    borderWidth: 0,
    borderRadius: 12,
  },
  labelContainer: {},
  label: {
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
  },
  error: {
    marginTop: 4,
    marginLeft: 12,
    fontSize: 12,
    color: "#B00020",
    fontFamily: "Avenir-Medium",
  },
  iconLeft: { position: "absolute", top: 15, left: 20, zIndex: 10 },
  iconRight: {
    position: "absolute",
    top: 23,
    right: 35,
    zIndex: 10,
  },
});

export default TextField;
