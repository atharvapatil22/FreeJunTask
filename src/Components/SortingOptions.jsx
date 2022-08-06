import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import BottomModal from "./BottomModal";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const SortingOptions = ({ sorting, setSorting, onClose }) => {
  return (
    <BottomModal
      children={
        <View>
          <Text
            style={{
              fontSize: 22,
              borderBottomColor: "grey",
              borderBottomWidth: 1,
              padding: "3%",
            }}
          >
            Sort By
          </Text>

          <View style={{ padding: "3%" }}>
            <TouchableOpacity
              onPress={() => {
                setSorting("ASC");
              }}
              style={{
                borderBottomColor: "#E9E4D4",
                borderBottomWidth: 1.5,
                paddingVertical: "3%",
              }}
            >
              <View style={styles.optionsWrapper}>
                <MaterialCommunityIcons
                  name="sort-alphabetical-ascending"
                  size={22}
                  color={sorting == "ASC" ? "green" : "grey"}
                />
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: "center",
                    color: sorting == "ASC" ? "green" : "grey",
                  }}
                >
                  Ascending
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSorting("DESC");
              }}
              style={{ paddingVertical: "3%" }}
            >
              <View style={styles.optionsWrapper}>
                <MaterialCommunityIcons
                  name="sort-alphabetical-descending"
                  size={22}
                  color={sorting == "DESC" ? "green" : "grey"}
                />
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: "center",
                    color: sorting == "DESC" ? "green" : "grey",
                  }}
                >
                  Descending
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      }
      onRequestClose={onClose}
    />
  );
};

export default SortingOptions;

const styles = StyleSheet.create({
  optionsWrapper: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginHorizontal: "28%",
    alignItems: "center",
  },
});
