import { COLORS, FONTS } from "@/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const dummyUser = {
  name: "Sophia Carter",
  phone: "+1(555) 987-6543",
  email: "sophia.carter@email.com",
  image:
    "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0",
};

const addresses = [
  {
    id: "1",
    type: "Home",
    address: "789 Pine St, Anytown, USA",
    icon: "home",
  },
  {
    id: "2",
    type: "Office",
    address: "321 Maple Ave, Anytown, USA",
    icon: "office-building",
  },
];

export default function Profile() {
  const renderSectionHeader = (title: string) => (
    <Text style={styles.sectionTitle}>{title}</Text>
  );

  const renderMenuItem = (
    icon: string,
    title: string,
    onPress?: () => void,
    showArrow: boolean = true
  ) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuItemLeft}>
        <MaterialCommunityIcons
          name={icon as any}
          size={24}
          color={COLORS.backgroundCream}
        />
        <Text style={styles.menuItemText}>{title}</Text>
      </View>
      {showArrow && (
        <MaterialCommunityIcons
          name="chevron-right"
          size={24}
          color={COLORS.backgroundCream}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image source={{ uri: dummyUser.image }} style={styles.profileImage} />
        <Text style={styles.profileName}>{dummyUser.name}</Text>
        <Text style={styles.profileContact}>{dummyUser.phone}</Text>
        <Text style={styles.profileContact}>{dummyUser.email}</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Membership Levels */}
      <View style={styles.section}>
        {renderSectionHeader("Membership")}
        {/* {renderMenuItem("trophy-award", "Bronze Level")}
        {renderMenuItem("trophy-award", "Silver Level")} */}
        {renderMenuItem("trophy-award", "Gold Level")}
      </View>

      {/* Address Book */}
      <View style={styles.section}>
        {renderSectionHeader("Address Book")}
        {addresses.map((address) => (
          <View key={address.id} style={styles.addressItem}>
            <MaterialCommunityIcons
              name={address.icon as any}
              size={24}
              color={COLORS.backgroundCream}
            />
            <View style={styles.addressInfo}>
              <Text style={styles.addressType}>{address.type}</Text>
              <Text style={styles.addressText}>{address.address}</Text>
            </View>
          </View>
        ))}
        {renderMenuItem("plus-circle", "Add New Address", undefined, false)}
      </View>

      {/* My Preferences */}
      <View style={styles.section}>
        {renderSectionHeader("My Preferences")}
        {renderMenuItem("heart", "Favorite Cleaners")}
        {renderMenuItem("broom", "Preferred Service Type")}
        {renderMenuItem("clock", "Default Time Slots")}
      </View>

      {/* Settings */}
      <View style={styles.section}>
        {renderSectionHeader("Settings")}
        {renderMenuItem("bell", "Notification Preferences")}
        {renderMenuItem("earth", "Language/Currency")}
        {renderMenuItem("theme-light-dark", "App Theme (Light/Dark)")}
      </View>

      {/* Support */}
      <View style={styles.section}>
        {renderSectionHeader("Support")}
        {renderMenuItem("headphones", "Contact Support")}
        {renderMenuItem("file-document", "Terms & Privacy")}
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreen,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.backgroundCream,
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.backgroundCream,
    marginBottom: 8,
  },
  profileContact: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.backgroundCream,
    opacity: 0.8,
    marginBottom: 4,
  },
  editButton: {
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 16,
  },
  editButtonText: {
    color: COLORS.backgroundCream,
    fontFamily: FONTS.medium,
    fontSize: 16,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.backgroundCream,
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  menuItemText: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.backgroundCream,
  },
  addressItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  addressInfo: {
    marginLeft: 12,
    flex: 1,
  },
  addressType: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
    color: COLORS.backgroundCream,
    marginBottom: 4,
  },
  addressText: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.backgroundCream,
    opacity: 0.8,
  },
  logoutButton: {
    backgroundColor: "rgba(255,255,255,0.1)",
    margin: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 40,
  },
  logoutButtonText: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
    color: COLORS.backgroundCream,
  },
});
