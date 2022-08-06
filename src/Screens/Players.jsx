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
import { useDispatch, useSelector } from "react-redux";
import { setPlayersList } from "../redux/actions";

const Players = () => {
  const dispatch = useDispatch();

  const playersList = useSelector((state) => state.globalData.playersList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(BaseURL + "/players?page=1&limit=10")
      .then((res) => {
        console.log("Response:", res.data.players);
        dispatch(setPlayersList(res.data.players));
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
