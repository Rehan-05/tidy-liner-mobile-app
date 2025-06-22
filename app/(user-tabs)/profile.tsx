import { COLORS, FONTS } from "@/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Profile() {
  const profileData = {
    name: "Sophia Carter",
    joinedYear: "2022",
    email: "sophia.carter@email.com",
    phone: "+44 7911 123456",
    address: "8 Hill Rd, Bristol",
    bio: "Experienced cleaner with a passion for...",
    services: ["Residential Cleaning", "Deep Cleaning", "Move-In/Out Cleaning"],
    serviceArea: "Within 10 miles of Anytown",
    availability: "Flexible",
    verificationStatus: {
      backgroundCheck: true,
      idVerification: true,
    },
  };

  const renderProfileHeader = () => (
    <View style={styles.profileHeader}>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
          }}
          style={styles.avatar}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.name}>{profileData.name}</Text>
      <Text style={styles.joinedText}>Joined {profileData.joinedYear}</Text>
      <TouchableOpacity style={styles.viewProfileButton}>
        <Text style={styles.viewProfileText}>View profile</Text>
      </TouchableOpacity>
    </View>
  );

  const renderPersonalInfo = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Personal Information</Text>
      <View style={styles.infoCard}>
        <InfoItem label="Name" value={profileData.name} icon="account" />
        <InfoItem label="Email" value={profileData.email} icon="email" />
        <InfoItem label="Phone" value={profileData.phone} icon="phone" />
        <InfoItem
          label="Address"
          value={profileData.address}
          icon="map-marker"
        />
      </View>
    </View>
  );

  const renderServicePreferences = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Service Preferences</Text>
      <View style={styles.infoCard}>
        <Text style={styles.subSectionTitle}>Services Offered</Text>
        {profileData.services.map((service, index) => (
          <Text key={index} style={styles.serviceItem}>
            • {service}
          </Text>
        ))}
        <View style={styles.divider} />
        <InfoItem
          label="Service Area"
          value={profileData.serviceArea}
          icon="map-marker-radius"
        />
        <InfoItem
          label="Availability"
          value={profileData.availability}
          icon="clock-outline"
        />
      </View>
    </View>
  );

  const renderVerificationStatus = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Document Verification Status</Text>
      <View style={styles.infoCard}>
        <VerificationItem
          label="Background Check"
          verified={profileData.verificationStatus.backgroundCheck}
        />
        <VerificationItem
          label="ID Verification"
          verified={profileData.verificationStatus.idVerification}
        />
      </View>
    </View>
  );

  const InfoItem = ({ label, value, icon }) => (
    <View style={styles.infoItem}>
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color={COLORS.primaryDarkGreen}
      />
      <View style={styles.infoContent}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );

  const VerificationItem = ({ label, verified }) => (
    <View style={styles.verificationItem}>
      <MaterialCommunityIcons
        name={verified ? "check-circle" : "clock-outline"}
        size={24}
        color={verified ? COLORS.primaryDarkGreen : COLORS.dustyMint}
      />
      <View style={styles.verificationContent}>
        <Text style={styles.verificationLabel}>{label}</Text>
        <Text
          style={[
            styles.verificationStatus,
            { color: verified ? COLORS.primaryDarkGreen : COLORS.dustyMint },
          ]}
        >
          {verified ? "Verified" : "Pending"}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {renderProfileHeader()}
        {renderPersonalInfo()}
        {renderServicePreferences()}
        {renderVerificationStatus()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundCream,
    paddingTop: Platform.OS == "android" ? 24 : 0,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  profileHeader: {
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.backgroundCream,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.dustyMint,
  },
  name: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.primaryDarkGreen,
    marginBottom: 4,
  },
  joinedText: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.charcoal,
    opacity: 0.8,
    marginBottom: 12,
  },
  viewProfileButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: COLORS.softSageGreen,
  },
  viewProfileText: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: COLORS.primaryDarkGreen,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    color: COLORS.primaryDarkGreen,
    marginBottom: 16,
  },
  infoCard: {
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  infoContent: {
    marginLeft: 12,
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: COLORS.charcoal,
    opacity: 0.8,
  },
  infoValue: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
    color: COLORS.primaryDarkGreen,
  },
  subSectionTitle: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
    color: COLORS.primaryDarkGreen,
    marginBottom: 12,
  },
  serviceItem: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.charcoal,
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.dustyMint,
    marginVertical: 16,
  },
  verificationItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  verificationContent: {
    marginLeft: 12,
    flex: 1,
  },
  verificationLabel: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
    color: COLORS.charcoal,
  },
  verificationStatus: {
    fontSize: 14,
    fontFamily: FONTS.medium,
  },
});
