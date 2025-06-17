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

const cleanerData = {
  id: "1",
  name: "Sophia Carter",
  rating: 4.9,
  reviews: 123,
  verified: true,
  experience: "5 years",
  bio: "Sophia is a professional cleaner with 5 years of experience. She specializes in deep cleaning and uses eco-friendly products.",
  image:
    "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0",
  badge: {
    level: "Gold",
    color: "#FFD700",
    completedJobs: 500,
    yearsMember: 3,
    description: "Elite Service Provider",
  },
  services: [
    {
      id: "1",
      name: "House Cleaning",
      price: 100,
    },
    {
      id: "2",
      name: "Deep Cleaning",
      price: 150,
    },
    {
      id: "3",
      name: "Move-In/Out Cleaning",
      price: 200,
    },
  ],
};

export default function CleanerDetails() {
  return (
    <View style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={28}
            color={COLORS.backgroundCream}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cleaner Profile</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Image and Basic Info */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: cleanerData.image }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{cleanerData.name}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>
              {cleanerData.rating}{" "}
              <MaterialCommunityIcons name="star" size={20} color="#FFD700" />
            </Text>
            <Text style={styles.reviews}>({cleanerData.reviews} reviews)</Text>
          </View>
          <View style={styles.verifiedBadge}>
            <MaterialCommunityIcons
              name="shield-check"
              size={20}
              color={COLORS.dustyMint}
            />
            <Text style={styles.verifiedText}>Verified</Text>
          </View>

          <View style={styles.badgeSection}>
            <View style={styles.badgeWrapper}>
              <View style={styles.badgeIconContainer}>
                <MaterialCommunityIcons
                  name="trophy-award"
                  size={32}
                  color={cleanerData.badge.color}
                />
              </View>
              <View style={styles.badgeContent}>
                <View style={styles.badgeHeader}>
                  <Text style={styles.badgeLevel}>
                    {cleanerData.badge.level}
                    <Text style={styles.badgeLevelSuffix}> Member</Text>
                  </Text>
                  <MaterialCommunityIcons
                    name="star"
                    size={16}
                    color={cleanerData.badge.color}
                  />
                </View>
                <Text style={styles.badgeDescription}>
                  {cleanerData.badge.description}
                </Text>
                <View style={styles.badgeStats}>
                  <View style={styles.badgeStat}>
                    <MaterialCommunityIcons
                      name="check-circle"
                      size={16}
                      color={COLORS.dustyMint}
                    />
                    <Text style={styles.badgeStatText}>
                      {cleanerData.badge.completedJobs}+ jobs
                    </Text>
                  </View>
                  <View style={styles.badgeStat}>
                    <MaterialCommunityIcons
                      name="clock-outline"
                      size={16}
                      color={COLORS.dustyMint}
                    />
                    <Text style={styles.badgeStatText}>
                      {cleanerData.badge.yearsMember} years
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Bio Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.bioText}>{cleanerData.bio}</Text>
        </View>

        {/* Services Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services Offered</Text>
          {cleanerData.services.map((service) => (
            <View key={service.id} style={styles.serviceItem}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.servicePrice}>${service.price}</Text>
            </View>
          ))}
        </View>

        {/* Book Now Button */}
        <View style={styles.bottomButton}>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    color: COLORS.backgroundCream,
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 28,
    fontFamily: FONTS.bold,
    color: COLORS.backgroundCream,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  rating: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    color: COLORS.backgroundCream,
  },
  reviews: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.backgroundCream,
    opacity: 0.8,
    marginLeft: 4,
  },
  verifiedBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(163, 198, 164, 0.1)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  verifiedText: {
    color: COLORS.dustyMint,
    fontFamily: FONTS.medium,
    marginLeft: 4,
  },
  section: {
    padding: 20,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.backgroundCream,
    marginBottom: 16,
  },
  bioText: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.backgroundCream,
    opacity: 0.9,
    lineHeight: 24,
  },
  serviceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  serviceName: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    color: COLORS.backgroundCream,
  },
  servicePrice: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    color: COLORS.dustyMint,
  },
  bottomButton: {
    padding: 20,
    paddingTop: 0,
    paddingBottom: 40,
    backgroundColor: COLORS.primaryDarkGreen,
  },
  bookButton: {
    backgroundColor: COLORS.dustyMint,
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
  },
  bookButtonText: {
    color: COLORS.primaryDarkGreen,
    fontFamily: FONTS.semiBold,
    fontSize: 18,
  },
  badgeSection: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  badgeWrapper: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  badgeIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(255,215,0,0.1)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  badgeContent: {
    flex: 1,
  },
  badgeHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  badgeLevel: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: cleanerData.badge.color,
    marginRight: 4,
  },
  badgeLevelSuffix: {
    color: COLORS.backgroundCream,
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
  badgeDescription: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.backgroundCream,
    opacity: 0.9,
    marginBottom: 8,
  },
  badgeStats: {
    flexDirection: "row",
    gap: 16,
  },
  badgeStat: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  badgeStatText: {
    fontSize: 13,
    fontFamily: FONTS.medium,
    color: COLORS.backgroundCream,
    opacity: 0.8,
  },
});
