import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialCommunityIcons,
  MaterialIcons,
} from "react-native-vector-icons";
import SearchBar from "../Components/SearchBar";

const Stadiums = () => {
  const [stadiumsList, setStadiumsList] = useState(temp);
  const [modifiedList, setModifiedList] = useState(temp);

  const [searchPhrase, setSearchPhrase] = useState("");
  const [sorting, setSorting] = useState("ASC");

  useEffect(() => {
    modifyList();
  }, [sorting, searchPhrase]);

  const modifyList = () => {
    // Apply Search Logic
    const text = searchPhrase.toLowerCase();
    const temp = stadiumsList.filter((item) => {
      return item.name.toLowerCase().includes(text);
    });

    // Apply Sorting Login
    if (sorting === "ASC") {
      setModifiedList(temp.sort((a, b) => (a.name > b.name ? 1 : -1)));
    }
    if (sorting === "DESC") {
      setModifiedList(temp.sort((a, b) => (a.name < b.name ? 1 : -1)));
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <ImageBackground source={{ uri: item.image }} style={styles.imageBg}>
          <LinearGradient
            colors={["#151515d9", "transparent", "#151515d9"]}
            style={{
              height: "100%",
              flex: 1,
              justifyContent: "space-between",
              padding: "3%",
            }}
          >
            <View style={styles.textWrapper}>
              <View style={{ flexDirection: "row" }}>
                <MaterialIcons name="location-pin" color="white" size={18} />
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  {" "}
                  {item.location}
                </Text>
              </View>
              <Text style={{ color: "white" }}>
                <MaterialCommunityIcons
                  name="human-male-male"
                  color="white"
                  size={18}
                />{" "}
                {item.capacity}
              </Text>
            </View>

            <Text style={{ color: "white", fontSize: 22 }}>{item.name}</Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View>
      <SearchBar setSearchPhrase={setSearchPhrase} />
      <Button
        title={sorting}
        onPress={() => {
          setSorting(sorting === "ASC" ? "DESC" : "ASC");
        }}
      />
      <FlatList
        style={{ backgroundColor: "white" }}
        data={modifiedList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text>No Results</Text>}
      />
    </View>
  );
};

export default Stadiums;

const { height, width } = Dimensions.get("window");
const heightSc = height / 1000;
const widthSc = width / 1000;

const styles = StyleSheet.create({
  card: {
    marginVertical: heightSc * 10,
    marginHorizontal: "5%",
    height: heightSc * 200,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  imageBg: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    overflow: "hidden",
    opacity: 1,
    flex: 1,
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: "1.5%",
  },
});

const temp = [
  {
    id: 1,
    name: "Salt Lake Stadium",
    capacity: "85,000",
    location: "Kolkata",
    image:
      "https://www.kreedon.com/wp-content/uploads/2019/08/c037152e-960e-11e7-afc5-62fc49bb3ae4.jpg",
  },
  {
    id: 2,
    name: "Jawaharlal Nehru Stadium",
    capacity: "60,000",
    location: "Delhi",
    image: "https://www.kreedon.com/wp-content/uploads/2019/08/JNS-MA.jpg",
  },
  {
    id: 3,
    name: "DY Patil Stadium",
    capacity: "55,000",
    location: "Navi Mumbai",
    image: "https://www.kreedon.com/wp-content/uploads/2019/08/1-981x420.jpg",
  },
  {
    id: 4,
    name: "Sree Kanteerava Stadium",
    capacity: "25,000",
    location: "Bengaluru",
    image:
      "https://www.kreedon.com/wp-content/uploads/2019/08/jln-stadium-kochi-sarath-rk.jpg",
  },
];
