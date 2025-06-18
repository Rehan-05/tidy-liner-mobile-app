import { CustomButton } from "@/components/CustomButton";
import { COLORS, FONTS } from "@/constants/theme";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function TypeSelection() {
  const [selectedRole, setSelectedRole] = useState<"client" | "cleaner" | null>(
    null
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.headerContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.subtitleText}>Choose your role</Text>
      </View>

      <View style={styles.logoContainer}>
        <View style={styles.logoBox}>
          <Image
            source={require("@/assets/images/app-logo.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.logoText}>Tidy Linker</Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="User Side"
          variant="secondary"
          onPress={() => {
            router.push("/screens/user/onboarding/onboarding");
          }}
          style={[
            styles.roleButton,
            { backgroundColor: COLORS.softSageGreen },
            selectedRole === "client" && styles.roleButtonSelected,
          ]}
          textStyle={{
            color: COLORS.primaryDarkGreen,
            fontSize: 18,
            fontFamily: FONTS.semiBold,
          }}
        />

        <CustomButton
          title="Cleaner Side"
          variant="outline"
          onPress={() => {
            router.push("/(tabs)");
          }}
          style={[
            styles.roleButton,
            {
              backgroundColor: "transparent",
              borderWidth: 1.5,
              borderColor: COLORS.backgroundCream,
            },
            selectedRole === "cleaner" && styles.roleButtonSelectedOutline,
          ]}
          textStyle={{
            color: COLORS.backgroundCream,
            fontSize: 18,
            fontFamily: FONTS.semiBold,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreen,
  },
  headerContainer: {
    paddingHorizontal: 24,
    paddingTop: 60,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 40,
    color: COLORS.backgroundCream,
    fontFamily: FONTS.bold,
    marginBottom: 12,
  },
  subtitleText: {
    fontSize: 28,
    color: COLORS.backgroundCream,
    fontFamily: FONTS.medium,
    opacity: 0.9,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 60,
  },
  logoBox: {
    width: 120,
    height: 120,
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  logoText: {
    fontSize: 24,
    color: COLORS.backgroundCream,
    fontFamily: FONTS.bold,
    opacity: 0.9,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
  roleButton: {
    height: 60,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  roleButtonSelected: {
    transform: [{ scale: 1.02 }],
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  roleButtonSelectedOutline: {
    transform: [{ scale: 1.02 }],
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  continueButton: {
    position: "absolute",
    bottom: 40,
    left: "5%",
    width: "90%",
    height: 60,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
});
