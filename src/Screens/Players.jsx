import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseURL } from "../../environment";
import { useDispatch, useSelector } from "react-redux";
import { setPlayersList } from "../redux/actions";
import Loader from "../Components/Loader";

const Players = ({ navigation }) => {
  const dispatch = useDispatch();
  const playersList = useSelector((state) => state.globalData.playersList);
  const PAGE_LIMIT = 10;

  const [showLoader, setShowLoader] = useState(false);
  const [listSize, setListSize] = useState(PAGE_LIMIT);
  const [hasMoreRecords, setHasMoreRecords] = useState(false);

  useEffect(() => {
    fetchData();
    const unsubscribe = navigation.addListener("focus", () => {
      fetchData();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    //  onEndReached -> full list will be re-fetched with new size. So, if any crud operation happens while loading then the changes will be reflected
    fetchData();
  }, [listSize]);

  const fetchData = () => {
    setShowLoader(true);
    axios
      .get(BaseURL + `/players?page=1&limit=${listSize}`)
      .then((res) => {
        // console.log("Response:", res.data);
        setHasMoreRecords(res.data.hasMore);
        dispatch(setPlayersList(res.data.players));
      })
      .catch((err) => {
        console.log("Error:", err);
      })
      .finally(() => setShowLoader(false));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.playerCard}>
        <Image
          style={{
            height: widthSc * 200,
            width: widthSc * 200,
            borderRadius: 100,
            backgroundColor: "lightgrey",
          }}
          source={{ uri: item.image }}
        />
        <View style={{ flex: 1, marginLeft: "4%" }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: "serif",
              fontWeight: "700",
              color: "green",
            }}
          >
            {item.name}
          </Text>

          <Text
            style={{ color: "grey", fontSize: 14, marginTop: heightSc * 5 }}
          >
            Country: <Text style={styles.atributeValue}>{item.country}</Text>
            {"\n"}Age: <Text style={styles.atributeValue}>{item.age}</Text>
            {"\n"}Club: <Text style={styles.atributeValue}>{item.club}</Text>
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ height: "100%" }}>
      {showLoader && <Loader />}
      <FlatList
        refreshing={showLoader}
        onRefresh={() => fetchData()}
        onEndReached={() => {
          if (hasMoreRecords) setListSize(listSize + PAGE_LIMIT);
        }}
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
    alignItems: "center",
    width: "90%",
  },
  atributeValue: {
    color: "black",
    fontWeight: "bold",
  },
});
