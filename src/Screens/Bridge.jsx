import { View, Text, Button } from "react-native";
import React from "react";
import { NativeModules } from "react-native";
import { useEffect } from "react";
const { MyNativeModule } = NativeModules;

const Bridge = () => {
  useEffect(() => {
    MyNativeModule.getSum(10, 20, (res) => {
      console.log("res", res);
    });
  }, []);

  return (
    <View>
      <Text>Bridge Screen</Text>
    </View>
  );
};

export default Bridge;
