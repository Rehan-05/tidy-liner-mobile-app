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
  date: "Today",
  fullDate: "Tue, Jul 23",
  time: "10:00 AM - 12:00 PM",
  cleaner: {
    name: "Sophia Carter",
    image:
      "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0",
    rating: 4.9,
    reviews: 123,
  },
  service: {
    name: "Standard Cleaning",
    details: {
      duration: "2 hours",
      rooms: "2 bedrooms",
      bathrooms: "1 bathroom",
    },
  },
  priceBreakdown: {
    cleaning: 120,
    serviceFee: 10,
    total: 130,
  },
  status: "Confirmed",
};

export default function BookingDetails() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialCommunityIcons
              name="arrow-left"
              size={28}
              color={COLORS.backgroundCream}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Booking Summary</Text>
          <View style={{ width: 28 }} />
        </View>

        {/* Date & Time Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Date & Time</Text>
          <Text style={styles.dateLabel}>{bookingDetails.date}</Text>
          <Text style={styles.dateTime}>
            {bookingDetails.fullDate} · {bookingDetails.time}
          </Text>
        </View>

        {/* Cleaner Section */}
        <View style={styles.section}>
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
                <Text style={styles.rating}>
                  {bookingDetails.cleaner.rating}{" "}
                  <Text style={styles.reviews}>
                    ({bookingDetails.cleaner.reviews} reviews)
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Services Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services</Text>
          <View style={styles.serviceCard}>
            <View style={styles.serviceHeader}>
              <Text style={styles.serviceName}>
                {bookingDetails.service.name}
              </Text>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="pencil"
                  size={24}
                  color={COLORS.backgroundCream}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.serviceDetails}>
              {bookingDetails.service.details.duration} ·{" "}
              {bookingDetails.service.details.rooms} ·{" "}
              {bookingDetails.service.details.bathrooms}
            </Text>
          </View>
        </View>

        {/* Price Breakdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price Breakdown</Text>
          <View style={styles.priceCard}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Standard Cleaning</Text>
              <Text style={styles.priceValue}>
                ${bookingDetails.priceBreakdown.cleaning}
              </Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Service Fee</Text>
              <Text style={styles.priceValue}>
                ${bookingDetails.priceBreakdown.serviceFee}
              </Text>
            </View>
            <View style={[styles.priceRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>
                ${bookingDetails.priceBreakdown.total}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm & Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reviewButton}>
          <Text style={styles.reviewButtonText}>Add Review</Text>
        </TouchableOpacity>
      </View>
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
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.backgroundCream,
    marginBottom: 16,
  },
  dateLabel: {
    fontSize: 20,
    fontFamily: FONTS.medium,
    color: COLORS.backgroundCream,
    marginBottom: 4,
  },
  dateTime: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.backgroundCream,
    opacity: 0.8,
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
  rating: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.backgroundCream,
  },
  reviews: {
    fontSize: 14,
    opacity: 0.8,
  },
  serviceCard: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 16,
    borderRadius: 16,
  },
  serviceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 18,
    fontFamily: FONTS.semiBold,
    color: COLORS.backgroundCream,
  },
  serviceDetails: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.backgroundCream,
    opacity: 0.8,
  },
  priceCard: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 16,
    borderRadius: 16,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  priceLabel: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.backgroundCream,
    opacity: 0.8,
  },
  priceValue: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.backgroundCream,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.1)",
    paddingTop: 12,
    marginBottom: 0,
  },
  totalLabel: {
    fontSize: 18,
    fontFamily: FONTS.semiBold,
    color: COLORS.backgroundCream,
  },
  totalValue: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.backgroundCream,
  },
  bottomButtons: {
    padding: 20,
    paddingBottom: 40,
    gap: 12,
  },
  confirmButton: {
    backgroundColor: COLORS.dustyMint,
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
  },
  confirmButtonText: {
    color: COLORS.primaryDarkGreen,
    fontFamily: FONTS.semiBold,
    fontSize: 18,
  },
  reviewButton: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
  },
  reviewButtonText: {
    color: COLORS.backgroundCream,
    fontFamily: FONTS.semiBold,
    fontSize: 18,
  },
});
