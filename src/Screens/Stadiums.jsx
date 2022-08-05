import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import React from "react";

const Stadiums = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image
          style={{
            height: widthSc * 200,
            width: widthSc * 200,
          }}
          source={{ uri: item.image }}
        />
        <View style={{ flex: 1, marginLeft: "4%" }}>
          <Text style={{ fontSize: 20, fontFamily: "Uchen-Regular" }}>
            {item.name}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={stadiumsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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

const stadiumsList = [
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
