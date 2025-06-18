import { COLORS, FONTS } from "@/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, StatusBar } from "react-native";

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
          fontSize: 13,
          fontFamily: FONTS.medium,
          marginTop: 5,
        },
      }}
    >
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "Feed",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={25} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="jobs"
        options={{
          title: "Jobs",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="briefcase" size={25} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="trainings"
        options={{
          title: "Trainings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="school" size={25} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="earnings"
        options={{
          title: "Earnings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wallet" size={25} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle"
              size={25}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
