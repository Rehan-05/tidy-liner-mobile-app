import { COLORS, FONTS } from "@/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            backgroundColor: COLORS.backgroundCream,
            height: 90,
            paddingBottom: 30,
            paddingTop: 10,
            borderTopWidth: 0,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: -4,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
          },
          android: {
            backgroundColor: COLORS.backgroundCream,
            height: 80,
            paddingTop: 5,
            elevation: 8,
            borderTopWidth: 0,
          },
          default: {
            backgroundColor: COLORS.backgroundCream,
          },
        }),
        tabBarActiveTintColor: COLORS.primaryDarkGreen,
        tabBarInactiveTintColor: COLORS.dustyMint,
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: FONTS.medium,
          marginTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name={"home"} size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="jobs"
        options={{
          title: "Jobs",
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={"layers-search"}
              size={28}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="trainings"
        options={{
          title: "Trainings",
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name={"calendar"} size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="earnings"
        options={{
          title: "Earnings",
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name={"account"} size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name={"account"} size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
