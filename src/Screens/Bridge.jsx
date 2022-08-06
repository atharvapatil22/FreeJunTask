import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { NativeModules } from "react-native";
const { MyNativeModule } = NativeModules;

const Bridge = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(0);

  const callNativeModule = () => {
    const x = num1 ? parseInt(num1) : 0;
    const y = num2 ? parseInt(num2) : 0;

    MyNativeModule.getSum(x, y, (res) => {
      console.log("res", res);
      setSum(res);
    });
  };

  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
      }}
    >
      <View style={{ ...styles.card, ...styles.shadow }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={num1}
            onChangeText={(num) => setNum1(num)}
            placeholder={"Enter num"}
            placeholderTextColor={"grey"}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={num2}
            onChangeText={(num) => setNum2(num)}
            placeholder={"Enter num"}
            placeholderTextColor={"grey"}
          />
        </View>
        <Pressable style={styles.btn} onPress={callNativeModule}>
          <Text style={{ color: "white", fontSize: 24, textAlign: "center" }}>
            get Sum
          </Text>
        </Pressable>

        <Text style={{ fontSize: 20, textAlign: "center", marginTop: 30 }}>
          {sum ? "Sum: " + sum : ""}
        </Text>
      </View>

      <Text
        style={{
          color: "grey",
          fontSize: 16,
          marginHorizontal: "5%",
          marginTop: 30,
        }}
      >
        *Note: getSum is defined inside a Custom Native Module.
        {"\n"}When the button is pressed:
        {"\n\n"}1) Numbers are sent to Native side via bridge.
        {"\n"}2) Sum is computed on Native Side.
        {"\n"}3) And then it is sent back to React Native.
      </Text>
    </View>
  );
};

export default Bridge;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginTop: 50,
    paddingVertical: 20,
    marginHorizontal: "5%",
    width: "90%",
    borderRadius: 10,
  },
  input: {
    width: "35%",
    borderWidth: 0.8,
    borderColor: "grey",
    height: 42,
    fontSize: 18,
    borderRadius: 6,
    paddingLeft: "3%",
  },
  btn: {
    marginTop: 30,
    backgroundColor: "green",
    color: "white",
    marginHorizontal: "20%",
    padding: 10,
    borderRadius: 10,
  },
  shadow: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,
  },
});
