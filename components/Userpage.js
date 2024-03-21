import React from "react";
import Home from "./screens/Home";
import Message from "./screens/Message";
import ChatBot from "./screens/ChatBot";
import Profile from "./screens/Profile";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialCommunityIcons2 from "react-native-vector-icons/Entypo";

const Tab = createBottomTabNavigator();

const Userpage = () => {
  return (
    <Tab.Navigator
      labeled={false}
      screenOptions={{
        tabBarActiveTintColor: "#1dcde0",
        tabBarInactiveTintColor: "black",
        tabBarStyle: { height: 55 },
        tabBarLabelStyle: { paddingBottom: 8 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={25}
              // style={{ color: focused ? "#1dcde0" : "black" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ChatBot"
        component={ChatBot}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="robot"
              color={color}
              size={25}
              // style={{ color: focused ? "#1dcde0" : "black" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons2
              name="awareness-ribbon"
              color={color}
              size={25}
              // style={{ color: focused ? "#1dcde0" : "black" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={25}
              // style={{ color: focused ? "#1dcde0" : "black" }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Userpage;
