import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "react-native-vector-icons";
import SearchBar from "../Components/SearchBar";
import axios from "axios";
import { BaseURL } from "../../environment";
import Loader from "../Components/Loader";
import SortingOptions from "../Components/SortingOptions";

const Stadiums = () => {
  const PAGE_LIMIT = 10;

  const [stadiumsList, setStadiumsList] = useState([]);
  const [modifiedList, setModifiedList] = useState([]);
  const [listSize, setListSize] = useState(PAGE_LIMIT);
  const [hasMoreRecords, setHasMoreRecords] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [sorting, setSorting] = useState(null);
  const [showSortingOptions, setShowSortingOptions] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    modifyList();
  }, [sorting, searchPhrase]);

  useEffect(() => {
    fetchData();
  }, [listSize]);

  const fetchData = () => {
    setShowLoader(true);
    axios
      .get(BaseURL + `/stadiums?page=1&limit=${listSize}`)
      .then((res) => {
        console.log("Response:", res);
        setHasMoreRecords(res.data.hasMore);
        setStadiumsList(res.data.stadiums);
        setModifiedList(res.data.stadiums);
      })
      .catch((err) => {
        console.log("Error:", err);
      })
      .finally(() => setShowLoader(false));
  };

  const modifyList = () => {
    // Apply Search Logic
    const text = searchPhrase.toLowerCase();
    const temp = stadiumsList.filter((item) => {
      return item.name.toLowerCase().includes(text);
    });

    // Apply Sorting Login
    if (sorting === "ASC") {
      setModifiedList(temp.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } else if (sorting === "DESC") {
      setModifiedList(temp.sort((a, b) => (a.name < b.name ? 1 : -1)));
    } else setModifiedList(temp);
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
    <View style={{ paddingBottom: heightSc * 160 }}>
      {showLoader && <Loader />}
      <SearchBar
        setSearchPhrase={setSearchPhrase}
        searchPhrase={searchPhrase}
      />

      <Pressable
        style={styles.sortBtn}
        onPress={() => {
          setShowSortingOptions(true);
        }}
      >
        <FontAwesome
          style={{
            textAlignVertical: "center",
            marginRight: "4%",
          }}
          name={"sort"}
          size={22}
          color={"green"}
        />
        <Text style={{ fontSize: 22, color: "green" }}>Sort List</Text>
      </Pressable>
      {showLoader && <Loader />}
      <FlatList
        onEndReached={() => {
          if (hasMoreRecords) setListSize(listSize + PAGE_LIMIT);
        }}
        // style={{ backgroundColor: "white" }}
        data={modifiedList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <Text
            style={{
              marginHorizontal: "5%",
              fontSize: 22,
              marginTop: 30,
              textAlign: "center",
              color: "grey",
            }}
          >
            No Results
          </Text>
        )}
      />

      {showSortingOptions && (
        <SortingOptions
          sorting={sorting}
          setSorting={setSorting}
          onClose={() => setShowSortingOptions(false)}
        />
      )}
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
  sortBtn: {
    marginHorizontal: "5%",
    marginVertical: heightSc * 16,
    height: 40,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    borderRadius: 8,
  },
});
