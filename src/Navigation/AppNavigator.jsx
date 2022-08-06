import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Stadiums from "../Screens/Stadiums";
import Players from "../Screens/Players";
import Tab3 from "../Screens/Tab3";
import { MaterialCommunityIcons, Ionicons } from "react-native-vector-icons";
import { Image, View } from "react-native";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: () => (
          <Image
            style={{ height: "100%", width: 50, marginRight: 20 }}
            source={require("../assets/images/app_logo.png")}
          />
        ),
        headerStyle: { fontFamily: "Uchen-Regular" },
        tabBarLabelStyle: {
          fontFamily: "sans-serif",
          fontWeight: "bold",
          fontSize: 12,
        },
        tabBarActiveTintColor: "green",
        inactiveTintColor: "#9E9E9E",
      }}
    >
      <Tab.Screen
        name="Players"
        component={Players}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="people"
              size={25}
              color={focused ? "green" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Stadiums"
        component={Stadiums}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="stadium"
              size={25}
              color={focused ? "green" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={Tab3}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="home-floor-3"
              size={25}
              color={focused ? "green" : "grey"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
