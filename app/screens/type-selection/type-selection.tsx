import { COLORS, FONTS } from "@/constants/theme";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TypeSelection() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoSection}>
          <Image
            source={require("@/assets/images/app-logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              router.push("/screens/auth/authentication?type=user")
            }
          >
            <Text style={styles.buttonText}>Client</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              router.push("/screens/auth/authentication?type=cleaner")
            }
          >
            <Text style={styles.buttonText}>Cleaner</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundCream,
    paddingTop: Platform.OS === "android" ? 24 : 0,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 24,
  },
  logoSection: {
    alignItems: "center",
    marginTop: 40,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 16,
  },
  logoText: {
    fontSize: 32,
    color: COLORS.primaryDarkGreen,
    fontFamily: FONTS.bold,
  },
  buttonContainer: {
    width: "100%",
    gap: 16,
    paddingHorizontal: 20,
  },
  button: {
    width: "100%",
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.primaryDarkGreen,
    backgroundColor: COLORS.backgroundCream,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    color: COLORS.primaryDarkGreen,
  },
});
