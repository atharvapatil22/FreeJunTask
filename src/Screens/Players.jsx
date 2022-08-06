import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import axios from "axios";
import { BaseURL } from "../../environment";

const Players = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(BaseURL + "/players?page=1&limit=10")
      .then((res) => {
        console.log("Response:", res);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.playerCard}>
        <Image
          style={{
            height: widthSc * 200,
            width: widthSc * 200,
            borderWidth: 1,
            borderColor: "grey",
            borderRadius: 100,
          }}
          source={{ uri: item.image }}
        />
        <View style={{ flex: 1, marginLeft: "4%" }}>
          <Text style={{ fontSize: 20, fontFamily: "Uchen-Regular" }}>
            {item.name}
          </Text>
          <Text>Country:{item.country}</Text>
          <Text>Age:{item.age}</Text>
          <Text>Club:{item.club}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={playersList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Players;

const { height, width } = Dimensions.get("window");
const heightSc = height / 1000;
const widthSc = width / 1000;

const styles = StyleSheet.create({
  playerCard: {
    marginVertical: heightSc * 10,
    marginHorizontal: "5%",
    padding: "4%",
    backgroundColor: "white",
    borderRadius: 6,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,

    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
});

// Hard coded for now
const playersList = [
  {
    id: 1,
    name: "Messi",
    country: "Argentina",
    age: 35,
    club: "Paris Saint Germain",
    image: "https://cdn.sofifa.net/players/158/023/21_240.png",
  },
  {
    id: 2,
    name: "Ronaldo",
    country: "Portugal",
    age: 38,
    club: "Manchester United",
    image: "https://cdn.sofifa.net/players/020/801/21_240.png",
  },
  {
    id: 3,
    name: "Kevin De Bruyne",
    country: "Belgium",
    age: 25,
    club: "Manchester City",
    image: "https://cdn.sofifa.net/players/192/985/21_240.png",
  },
  {
    id: 4,
    name: "Neymar",
    country: "Brazil",
    age: 30,
    club: "Paris Saint Germain",
    image: "https://cdn.sofifa.net/players/190/871/21_240.png",
  },
];
