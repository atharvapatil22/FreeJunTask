import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Stadiums from "../Screens/Stadiums";
import Players from "../Screens/Players";
import Tab3 from "../Screens/Tab3";
import { MaterialCommunityIcons, Ionicons } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Players"
        component={Players}
        options={{
          tabBarIcon: () => <Ionicons name="people" size={25} />,
        }}
      />
      <Tab.Screen
        name="Stadiums"
        component={Stadiums}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="stadium" size={25} />,
        }}
      />
      <Tab.Screen name="Tab3" component={Tab3} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
