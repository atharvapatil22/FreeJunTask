import {
  View,
  TextInput,
  Dimensions,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import React from "react";
import { Feather } from "react-native-vector-icons";

const SearchBar = ({ setSearchPhrase, searchPhrase }) => {
  return (
    <View style={styles.wrapper}>
      <View style={{ ...styles.inputBox, ...styles.shadow }}>
        <Feather
          name={"search"}
          color={"grey"}
          style={{ marginLeft: "2%" }}
          size={20}
        />
        <TextInput
          value={searchPhrase}
          style={styles.textInput}
          onChangeText={(txt) => setSearchPhrase(txt)}
          placeholder={"Search by Stadium Name"}
          placeholderTextColor={"grey"}
        />
      </View>
      <Pressable
        onPress={() => setSearchPhrase("")}
        style={{ ...styles.clearBtn, ...styles.shadow }}
      >
        <Text
          style={{
            textAlignVertical: "center",
            textAlign: "center",
            height: "100%",
            fontSize: 16,
            color: "red",
          }}
        >
          Clear
        </Text>
      </Pressable>
    </View>
  );
};

export default SearchBar;

const { height, width } = Dimensions.get("window");
const heightSc = height / 1000;
const widthSc = width / 1000;

const styles = StyleSheet.create({
  wrapper: {
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    marginTop: heightSc * 20,
    marginHorizontal: "5%",
  },
  inputBox: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
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
  clearBtn: {
    height: "100%",
    width: "17%",
    marginLeft: "3%",
  },
  shadow: {
    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    borderColor: "grey",
    // borderWidth: 0.8,
    borderRadius: 6,
  },
});
