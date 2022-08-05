import { View, TextInput, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "react-native-vector-icons";

const SearchBar = ({ setSearchPhrase }) => {
  return (
    <View style={styles.wrapper}>
      <Feather
        name={"search"}
        color={"grey"}
        style={{ marginLeft: "2%" }}
        size={20}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(txt) => setSearchPhrase(txt)}
        placeholder={"Search by Stadium Name"}
        placeholderTextColor={"grey"}
      />
    </View>
  );
};

export default SearchBar;

const { height, width } = Dimensions.get("window");
const heightSc = height / 1000;
const widthSc = width / 1000;

const styles = StyleSheet.create({
  wrapper: {
    borderColor: "grey",
    borderWidth: 0.8,
    borderRadius: 6,
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: heightSc * 20,
    marginHorizontal: "5%",
  },
  textInput: {
    color: "black",
    fontSize: 15,
    textAlignVertical: "center",
    height: "100%",
    marginLeft: "3%",
    width: "85%",
    marginRight: "10%",
  },
});
