import { COLORS, FONTS } from "@/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const dummyBookings = {
  upcoming: [
    {
      id: "1",
      cleaner: {
        name: "Sarah Johnson",
        image:
          "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0",
        rating: 4.8,
      },
      date: "25/02/2024",
      time: "14:00 - 16:00",
      duration: "2 hours",
      service: "Deep Clean",
      status: "Confirmed",
      price: "£50",
      address: "18 Kings Rd, London",
    },
    {
      id: "2",
      cleaner: {
        name: "Mike Chen",
        image:
          "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0",
        rating: 4.9,
      },
      date: "28/02/2024",
      time: "10:00 - 13:00",
      duration: "3 hours",
      service: "Pet-Friendly Clean",
      status: "Pending",
      price: "£75",
      address: "22 Green St, Manchester",
    },
  ],
  past: [
    {
      id: "3",
      cleaner: {
        name: "Emma Wilson",
        image:
          "https://plus.unsplash.com/premium_photo-1705018500344-450a9e2d4c56?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0",
        rating: 4.7,
      },
      date: "10/02/2024",
      time: "09:00 - 11:00",
      duration: "2 hours",
      service: "Regular Clean",
      status: "Completed",
      price: "£45",
      address: "5 Church Ln, Leeds",
      rating: 5,
    },
  ],
};

export default function Bookings() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const renderBookingCard = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.bookingCard}
      onPress={() =>
        router.push("/screens/client/booking-details/booking-details")
      }
    >
      <View style={styles.cardHeader}>
        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor:
                item.status === "Completed"
                  ? COLORS.dustyMint + "20"
                  : item.status === "Confirmed"
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
                  item.status === "Completed"
                    ? COLORS.dustyMint
                    : item.status === "Confirmed"
                    ? COLORS.softSageGreen
                    : COLORS.backgroundCream,
              },
            ]}
          >
            {item.status}
          </Text>
        </View>
        <Text style={styles.price}>{item.price}</Text>
      </View>

      {/* Cleaner Info */}
      <View style={styles.cleanerInfo}>
        <Image
          source={{ uri: item.cleaner.image }}
          style={styles.cleanerImage}
        />
        <View style={styles.cleanerDetails}>
          <Text style={styles.cleanerName}>{item.cleaner.name}</Text>
          <View style={styles.ratingContainer}>
            <MaterialCommunityIcons
              name="star"
              size={16}
              color={COLORS.dustyMint}
            />
            <Text style={styles.ratingText}>{item.cleaner.rating}</Text>
          </View>
        </View>
      </View>

      {/* Booking Details */}
      <View style={styles.bookingDetails}>
        <View style={styles.detailRow}>
          <MaterialCommunityIcons
            name="calendar"
            size={20}
            color={COLORS.backgroundCream}
          />
          <Text style={styles.detailText}>
            {item.date} • {item.time}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <MaterialCommunityIcons
            name="broom"
            size={20}
            color={COLORS.backgroundCream}
          />
          <Text style={styles.detailText}>
            {item.service} • {item.duration}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <MaterialCommunityIcons
            name="map-marker"
            size={20}
            color={COLORS.backgroundCream}
          />
          <Text style={styles.detailText}>{item.address}</Text>
        </View>
      </View>

      {/* Action Buttons */}
      {activeTab === "past" && (
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: COLORS.dustyMint }]}
          >
            <Text style={styles.actionButtonText}>Reschedule</Text>
          </TouchableOpacity>
        </View>
      )}
      {activeTab === "upcoming" && (
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: COLORS.dustyMint }]}
          >
            <Text style={styles.actionButtonText}>Message</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={[
              styles.actionButton,
              { backgroundColor: "rgba(255,255,255,0.1)" },
            ]}
          >
            <Text
              style={[styles.actionButtonText, { color: COLORS.dustyMint }]}
            >
              Message
            </Text>
          </TouchableOpacity> */}
        </View>
      )}

      {activeTab === "past" && item.rating && (
        <View style={styles.ratingSection}>
          <Text style={styles.ratingLabel}>Your Rating</Text>
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <MaterialCommunityIcons
                key={star}
                name="star"
                size={20}
                color={
                  star <= item.rating
                    ? COLORS.dustyMint
                    : COLORS.dustyMint + "40"
                }
              />
            ))}
          </View>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bookings</Text>
      </View>

      {/* Tab Switcher */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "upcoming" && styles.activeTab]}
          onPress={() => setActiveTab("upcoming")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "upcoming" && styles.activeTabText,
            ]}
          >
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "past" && styles.activeTab]}
          onPress={() => setActiveTab("past")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "past" && styles.activeTabText,
            ]}
          >
            Past
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bookings List */}
      <FlatList
        data={dummyBookings[activeTab]}
        renderItem={renderBookingCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No bookings found</Text>
          </View>
        )}
      />
    </View>
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
  tabContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(255,255,255,0.1)",
  },
  activeTab: {
    borderBottomColor: COLORS.dustyMint,
  },
  tabText: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: COLORS.backgroundCream + "80",
  },
  activeTabText: {
    color: COLORS.backgroundCream,
  },
  listContainer: {
    padding: 20,
  },
  bookingCard: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 14,
    fontFamily: FONTS.medium,
  },
  price: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.backgroundCream,
  },
  cleanerInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  cleanerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  cleanerDetails: {
    flex: 1,
  },
  cleanerName: {
    fontSize: 16,
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
  bookingDetails: {
    gap: 12,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  detailText: {
    flex: 1,
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.backgroundCream,
  },
  actionButtons: {
    flexDirection: "row",
    gap: 12,
    marginTop: 16,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  actionButtonText: {
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: COLORS.primaryDarkGreen,
  },
  ratingSection: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ratingLabel: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: COLORS.backgroundCream,
  },
  stars: {
    flexDirection: "row",
    gap: 4,
  },
  emptyContainer: {
    alignItems: "center",
    paddingTop: 40,
  },
  emptyText: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.backgroundCream + "80",
  },
});
