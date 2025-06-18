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

const currentJobs = [
  {
    id: "1",
    type: "Deep Cleaning",
    address: "123 Maple Street",
    status: "In Progress",
    date: "Today",
    time: "2:00 PM - 5:00 PM",
    price: "$150",
  },
  {
    id: "2",
    type: "Move-Out Cleaning",
    address: "456 Oak Avenue",
    status: "Starting Soon",
    date: "Today",
    time: "5:30 PM - 8:30 PM",
    price: "$200",
  },
];

const pendingJobs = [
  {
    id: "3",
    type: "Standard Cleaning",
    address: "789 Pine Lane",
    status: "Pending Confirmation",
    date: "Tomorrow",
    time: "10:00 AM - 12:00 PM",
    price: "$120",
  },
  {
    id: "4",
    type: "Office Cleaning",
    address: "101 Elm Street",
    status: "Awaiting Schedule",
    date: "Next Week",
    time: "Flexible",
    price: "$180",
  },
];

export default function Jobs() {
  const renderJobCard = (job: any) => (
    <TouchableOpacity
      key={job.id}
      style={styles.jobCard}
      onPress={() => router.push(`/screens/user/job-details/job-details`)}
    >
      <View style={styles.jobHeader}>
        <View style={styles.jobTypeContainer}>
          <MaterialCommunityIcons
            name="broom"
            size={20}
            color={COLORS.primaryDarkGreen}
          />
          <Text style={styles.jobType}>{job.type}</Text>
        </View>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => router.push(`/screens/user/job-details/job-details`)}
        >
          <Text style={styles.viewButtonText}>View</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.jobDetails}>
        <View style={styles.detailRow}>
          <MaterialCommunityIcons
            name="map-marker"
            size={18}
            color={COLORS.dustyMint}
          />
          <Text style={styles.addressText}>{job.address}</Text>
        </View>

        <View style={styles.detailRow}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={18}
            color={COLORS.dustyMint}
          />
          <Text style={styles.detailText}>
            {job.date} • {job.time}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <MaterialCommunityIcons
            name="currency-usd"
            size={18}
            color={COLORS.dustyMint}
          />
          <Text style={styles.priceText}>{job.price}</Text>
        </View>

        <View style={styles.statusContainer}>
          <View
            style={[
              styles.statusDot,
              {
                backgroundColor: job.status.includes("Progress")
                  ? "#4CAF50"
                  : job.status.includes("Starting")
                  ? "#2196F3"
                  : COLORS.dustyMint,
              },
            ]}
          />
          <Text style={styles.statusText}>{job.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Jobs</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Jobs</Text>
          {currentJobs.map(renderJobCard)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pending Jobs</Text>
          {pendingJobs.map(renderJobCard)}
        </View>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.backgroundCream,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: FONTS.bold,
    color: COLORS.primaryDarkGreen,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.softSageGreen,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  section: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: FONTS.semiBold,
    color: COLORS.primaryDarkGreen,
    marginBottom: 16,
  },
  jobCard: {
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  jobTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  jobType: {
    fontSize: 18,
    fontFamily: FONTS.semiBold,
    color: COLORS.primaryDarkGreen,
  },
  viewButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: COLORS.softSageGreen,
  },
  viewButtonText: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: COLORS.primaryDarkGreen,
  },
  jobDetails: {
    gap: 8,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  addressText: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.charcoal,
  },
  detailText: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.charcoal,
    opacity: 0.8,
  },
  priceText: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
    color: COLORS.primaryDarkGreen,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: COLORS.charcoal,
    opacity: 0.9,
  },
});
