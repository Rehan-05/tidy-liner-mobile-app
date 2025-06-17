import { COLORS, FONTS } from "@/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const dummyCleaners = [
  {
    id: 1,
    name: "Aisha Khan",
    status: "Last used",
    image:
      "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Zoya Patel",
    status: "Nearby",
    image:
      "https://plus.unsplash.com/premium_photo-1705018500344-450a9e2d4c56?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Mike Chen",
    status: "Nearby",
    image:
      "https://images.pexels.com/photos/3317434/pexels-photo-3317434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function Home() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="cog"
            size={28}
            color={COLORS.backgroundCream}
          />
        </TouchableOpacity>
      </View>

      {/* Greeting Section */}
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>
          Good morning, Alex <Text style={{ fontSize: 24 }}>👋</Text>
        </Text>
        <Text style={styles.subGreeting}>Ready to book your next clean?</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/(tabs)/explore")}
        >
          <Text style={styles.primaryButtonText}>Book a Cleaner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push("/(tabs)/bookings")}
        >
          <Text style={styles.secondaryButtonText}>Upcoming Booking</Text>
        </TouchableOpacity>
      </View>

      {/* Favorites Section */}
      <TouchableOpacity style={styles.favoritesButton}>
        <Text style={styles.favoritesButtonText}>My Favorite Cleaners</Text>
      </TouchableOpacity>

      {/* Suggested Cleaners */}
      <View style={styles.suggestedSection}>
        <Text style={styles.sectionTitle}>Suggested Cleaners</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cleanersGrid}
        >
          {dummyCleaners.map((cleaner) => (
            <TouchableOpacity
              key={cleaner.id}
              style={styles.cleanerCard}
              onPress={() =>
                router.push("/screens/client/cleaner-details/cleaner-details")
              }
            >
              <Image
                source={{ uri: cleaner.image }}
                style={styles.cleanerImage}
              />
              <Text style={styles.cleanerName}>{cleaner.name}</Text>
              <Text style={styles.cleanerStatus}>{cleaner.status}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Trust & Safety */}
      <View style={styles.trustSection}>
        <Text style={styles.sectionTitle}>Trust & Safety</Text>
        <View style={styles.trustCard}>
          <MaterialCommunityIcons
            name="shield-check"
            size={24}
            color={COLORS.primaryDarkGreen}
          />
          <Text style={styles.trustText}>
            All cleaners are verified and insured
          </Text>
        </View>
      </View>

      {/* Referral Card */}
      <View style={styles.referralCard}>
        <View style={styles.referralContent}>
          <Text style={styles.referralTitle}>
            Refer a friend &{"\n"}get 20% off
          </Text>
          <TouchableOpacity style={styles.referButton}>
            <Text style={styles.referButtonText}>Refer Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreen,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.backgroundCream,
  },
  greetingContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  greeting: {
    fontSize: 32,
    fontFamily: FONTS.bold,
    color: COLORS.backgroundCream,
    marginBottom: 8,
  },
  subGreeting: {
    fontSize: 18,
    fontFamily: FONTS.regular,
    color: COLORS.backgroundCream,
    opacity: 0.9,
  },
  actionContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 16,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: COLORS.dustyMint,
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
  },
  primaryButtonText: {
    color: COLORS.primaryDarkGreen,
    fontFamily: FONTS.semiBold,
    fontSize: 14,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: COLORS.backgroundCream,
    fontFamily: FONTS.semiBold,
    fontSize: 14,
  },
  favoritesButton: {
    backgroundColor: "rgba(255,255,255,0.1)",
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 30,
  },
  favoritesButtonText: {
    color: COLORS.backgroundCream,
    fontFamily: FONTS.semiBold,
    fontSize: 14,
  },
  suggestedSection: {
    paddingLeft: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.backgroundCream,
    marginBottom: 16,
  },
  cleanersGrid: {
    paddingRight: 20,
    gap: 12,
  },
  cleanerCard: {
    width: 200,
    borderRadius: 16,
  },
  cleanerImage: {
    width: "100%",
    height: 160,
    borderRadius: 16,
  },
  cleanerName: {
    color: COLORS.backgroundCream,
    fontFamily: FONTS.semiBold,
    fontSize: 16,
    marginTop: 8,
  },
  cleanerStatus: {
    color: COLORS.backgroundCream,
    fontFamily: FONTS.regular,
    fontSize: 14,
    opacity: 0.7,
  },
  trustSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  trustCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 16,
    borderRadius: 16,
    gap: 12,
  },
  trustText: {
    color: COLORS.backgroundCream,
    fontFamily: FONTS.medium,
    fontSize: 16,
  },
  referralCard: {
    margin: 20,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: COLORS.backgroundCream,
    marginBottom: 40,
  },
  referralContent: {
    padding: 24,
  },
  referralTitle: {
    fontSize: 28,
    fontFamily: FONTS.bold,
    color: COLORS.primaryDarkGreen,
    marginBottom: 16,
  },
  referButton: {
    backgroundColor: COLORS.dustyMint,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignSelf: "flex-start",
  },
  referButtonText: {
    color: COLORS.primaryDarkGreen,
    fontFamily: FONTS.semiBold,
    fontSize: 16,
  },
});
