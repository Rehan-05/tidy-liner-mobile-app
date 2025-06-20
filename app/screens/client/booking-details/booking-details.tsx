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

const bookingDetails = {
  id: "1",
  status: "Confirmed",
  cleaner: {
    name: "Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0",
    rating: 4.8,
    phone: "+1 (555) 123-4567",
    email: "sarah.j@example.com",
  },
  booking: {
    date: "Feb 25, 2024",
    time: "14:00 - 16:00",
    duration: "2 hours",
    service: "Deep Clean",
    price: "£50",
  },
  location: {
    address: "22 Green St",
    city: "Manchester",
    state: "UK",
    zipCode: "10001",
    instructions: "Please use the service elevator. Code: 1234",
  },
  requirements: [
    "Deep cleaning of all rooms",
    "Window cleaning",
    "Bathroom sanitization",
    "Kitchen deep clean",
  ],
};

export default function BookingDetails() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={28}
            color={COLORS.backgroundCream}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking Details</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={28}
            color={COLORS.backgroundCream}
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Status Badge */}
        <View style={styles.statusContainer}>
          <View
            style={[
              styles.statusBadge,
              {
                backgroundColor:
                  bookingDetails.status === "Confirmed"
                    ? COLORS.softSageGreen + "20"
                    : "rgba(255,255,255,0.1)",
              },
            ]}
          >
            <Text
              style={[
                styles.statusText,
                {
                  color:
                    bookingDetails.status === "Confirmed"
                      ? COLORS.softSageGreen
                      : COLORS.backgroundCream,
                },
              ]}
            >
              {bookingDetails.status}
            </Text>
          </View>
        </View>

        {/* Cleaner Info */}
        <View style={{ ...styles.section, paddingTop: 0 }}>
          <Text style={styles.sectionTitle}>Cleaner</Text>
          <View style={styles.cleanerCard}>
            <Image
              source={{ uri: bookingDetails.cleaner.image }}
              style={styles.cleanerImage}
            />
            <View style={styles.cleanerInfo}>
              <Text style={styles.cleanerName}>
                {bookingDetails.cleaner.name}
              </Text>
              <View style={styles.ratingContainer}>
                <MaterialCommunityIcons
                  name="star"
                  size={16}
                  color={COLORS.dustyMint}
                />
                <Text style={styles.ratingText}>
                  {bookingDetails.cleaner.rating}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.messageButton}>
              <MaterialCommunityIcons
                name="message"
                size={24}
                color={COLORS.primaryDarkGreen}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Booking Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Booking Information</Text>
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <MaterialCommunityIcons
                name="calendar"
                size={24}
                color={COLORS.backgroundCream}
              />
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Date & Time</Text>
                <Text style={styles.infoValue}>
                  {bookingDetails.booking.date} • {bookingDetails.booking.time}
                </Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <MaterialCommunityIcons
                name="broom"
                size={24}
                color={COLORS.backgroundCream}
              />
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Service Type</Text>
                <Text style={styles.infoValue}>
                  {bookingDetails.booking.service} (
                  {bookingDetails.booking.duration})
                </Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <MaterialCommunityIcons
                name="cash"
                size={24}
                color={COLORS.backgroundCream}
              />
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Price</Text>
                <Text style={styles.infoValue}>
                  {bookingDetails.booking.price}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Location */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location</Text>
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <MaterialCommunityIcons
                name="map-marker"
                size={24}
                color={COLORS.backgroundCream}
              />
              <View style={styles.infoContent}>
                <Text style={styles.infoValue}>
                  {bookingDetails.location.address}
                </Text>
                <Text style={styles.infoValue}>
                  {bookingDetails.location.city},{" "}
                  {bookingDetails.location.state}{" "}
                  {bookingDetails.location.zipCode}
                </Text>
              </View>
            </View>
            <View style={styles.instructionsContainer}>
              <Text style={styles.instructionsLabel}>Instructions:</Text>
              <Text style={styles.instructionsText}>
                {bookingDetails.location.instructions}
              </Text>
            </View>
          </View>
        </View>

        {/* Requirements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cleaning Requirements</Text>
          <View style={styles.infoCard}>
            {bookingDetails.requirements.map((requirement, index) => (
              <View key={index} style={styles.requirementRow}>
                <MaterialCommunityIcons
                  name="check-circle"
                  size={20}
                  color={COLORS.dustyMint}
                />
                <Text style={styles.requirementText}>{requirement}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Reschedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Cancel Booking</Text>
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
  statusContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 14,
    fontFamily: FONTS.medium,
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
  cleanerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 16,
    borderRadius: 16,
  },
  cleanerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  cleanerInfo: {
    flex: 1,
  },
  cleanerName: {
    fontSize: 18,
    fontFamily: FONTS.semiBold,
    color: COLORS.backgroundCream,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: COLORS.backgroundCream,
  },
  messageButton: {
    backgroundColor: COLORS.dustyMint,
    padding: 8,
    borderRadius: 20,
  },
  infoCard: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 16,
    borderRadius: 16,
    gap: 16,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.backgroundCream,
    opacity: 0.8,
  },
  infoValue: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.backgroundCream,
  },
  instructionsContainer: {
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.1)",
    paddingTop: 16,
  },
  instructionsLabel: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.backgroundCream,
    marginBottom: 8,
  },
  instructionsText: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.backgroundCream,
    opacity: 0.8,
  },
  requirementRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  requirementText: {
    flex: 1,
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.backgroundCream,
  },
  bottomButtons: {
    padding: 20,
    paddingBottom: 40,
    gap: 12,
    paddingTop: 0,
  },
  primaryButton: {
    backgroundColor: COLORS.dustyMint,
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
  },
  primaryButtonText: {
    color: COLORS.primaryDarkGreen,
    fontFamily: FONTS.semiBold,
    fontSize: 18,
  },
  secondaryButton: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: COLORS.backgroundCream,
    fontFamily: FONTS.semiBold,
    fontSize: 18,
  },
});
