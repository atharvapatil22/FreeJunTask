import { View, ActivityIndicator } from "react-native";
import React from "react";

const Loader = () => {
  return (
    <View
      style={{
        position: "absolute",
        zIndex: 999,
        alignItems: "center",
        width: "100%",
        top: 22,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 10,
          width: 48,
          height: 48,
          borderRadius: 100,
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size={35} color={"green"} />
      </View>
    </View>
  );
};

export default Loader;
