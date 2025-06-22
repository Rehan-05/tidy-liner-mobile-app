import { COLORS, FONTS, SIZES } from "@/constants/theme";
import { router, useLocalSearchParams } from "expo-router";
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

export default function Authentication() {
  const { type } = useLocalSearchParams<{ type: "user" | "cleaner" }>();

  const handleAuth = (action: "login" | "signup") => {
    if (type === "user") {
      if (action === "login") {
        router.push("/(tabs)");
      } else {
        router.push("/screens/client/onboarding/cleaner-onboarding");
      }
    } else {
      if (action === "login") {
        router.push("/(user-tabs)");
      } else {
        router.push("/screens/user/onboarding/onboarding");
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.logoSection}>
            <Image
              source={require("@/assets/images/app-logo.jpeg")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.title}>
            {type === "user" ? "Book Cleaning Services" : "Work as\na Cleaner"}
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => handleAuth("login")}
            >
              <Text style={styles.loginText}>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signupButton}
              onPress={() => handleAuth("signup")}
            >
              <Text style={styles.signupText}>Sign up</Text>
            </TouchableOpacity>
          </View>
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
    padding: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 24,
    padding: 24,
    height: SIZES.height * 0.9,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontFamily: FONTS.bold,
    color: COLORS.primaryDarkGreen,
    marginBottom: 32,
    lineHeight: 40,
    textAlign: "center",
  },
  icon: {
    marginBottom: 32,
  },
  buttonContainer: {
    gap: 12,
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
  loginButton: {
    width: "100%",
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.softSageGreen,
  },
  loginText: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    color: COLORS.primaryDarkGreen,
  },
  signupButton: {
    width: "100%",
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryDarkGreen,
  },
  signupText: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    color: COLORS.backgroundCream,
  },
});
