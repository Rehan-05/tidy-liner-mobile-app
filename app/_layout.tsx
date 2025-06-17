import { COLORS } from "@/constants/theme";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Platform, StatusBar, StyleSheet, View } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("@/assets/fonts/Poppins-ExtraBold.ttf"),
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, [loaded]);

  // Set status bar style for Android
  useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent");
      StatusBar.setTranslucent(true);
    }
  }, []);

  if (!loaded || isLoading) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Image
          source={require("../assets/images/app-logo.png")}
          style={styles.splashImage}
          resizeMode="cover"
        />
      </View>
    );
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: COLORS.primaryDarkGreen },
        }}
      >
        <Stack.Screen
          name="screens/type-selection/type-selection"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="screens/client/cleaner-details/cleaner-details"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="screens/client/booking-details/booking-details"
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundCream,
    alignItems: "center",
    justifyContent: "center",
  },
  splashImage: {
    width: 250,
    height: 250,
  },
});
