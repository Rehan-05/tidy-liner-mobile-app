import { COLORS, FONTS } from "@/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Welcome() {
  const features = [
    {
      id: "1",
      title: "Free to join – no fees or cuts from your earnings",
      icon: "cash-multiple",
    },
    {
      id: "2",
      title: "You set your availability, services, and travel area",
      icon: "calendar-clock",
    },
    {
      id: "3",
      title: "Get discovered by clients looking for skilled professionals",
      icon: "account-search",
    },
    {
      id: "4",
      title: "Your rating = your value – as reviews go up, so does your pay",
      icon: "star-circle",
    },
    {
      id: "5",
      title: "Access to free & discounted training (including in-person)",
      icon: "school",
    },
    {
      id: "6",
      title: "Optional insurance & DBS support – all in one place",
      icon: "shield-check",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <MaterialCommunityIcons
            name="home-outline"
            size={40}
            color={COLORS.primaryDarkGreen}
          />
          <Text style={styles.logoText}>TIDY LINKER</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Join Tidy Linker –</Text>
          <Text style={styles.subtitle}>Get Paid More,</Text>
          <Text style={styles.subtitle}>Get Trained, Get</Text>
          <Text style={styles.subtitle}>Noticed</Text>
        </View>

        <View style={styles.featuresContainer}>
          {features.map((feature) => (
            <View key={feature.id} style={styles.featureItem}>
              <MaterialCommunityIcons
                name={feature.icon}
                size={24}
                color={COLORS.primaryDarkGreen}
              />
              <Text style={styles.featureText}>{feature.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => router.push("/screens/type-selection/type-selection")}
        >
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  logoText: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.primaryDarkGreen,
  },
  titleContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontFamily: FONTS.bold,
    color: COLORS.primaryDarkGreen,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 32,
    fontFamily: FONTS.bold,
    color: COLORS.primaryDarkGreen,
    lineHeight: 40,
  },
  featuresContainer: {
    gap: 20,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    backgroundColor: COLORS.backgroundCream,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
  },
  featureText: {
    flex: 1,
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.charcoal,
  },
  footer: {
    padding: 20,
    paddingBottom: Platform.OS === "android" ? 20 : 30,
  },
  getStartedButton: {
    backgroundColor: COLORS.primaryDarkGreen,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  getStartedText: {
    color: COLORS.backgroundCream,
    fontFamily: FONTS.medium,
    fontSize: 16,
  },
});
