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

export default function JobDetails() {
  const jobDetails = {
    id: "1",
    type: "Luxury Apartment",
    title: "Luxury Apartment Cleaning",
    status: "Scheduled",
    address: "123 Marina Bay, Downtown",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500",
    price: "£180",
    time: "Morning | Evening | Custom",
    date: "March 15, 2024",
    client: {
      name: "Sarah Anderson",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    propertyDetails: {
      size: "1,200 sq ft",
      bedrooms: 2,
      bathrooms: 2,
      pets: "1 cat",
      parkingAvailable: true,
    },
    requirements: [
      "Deep cleaning of all rooms",
      "Window cleaning",
      "Carpet steam cleaning",
      "Balcony cleaning",
      "Kitchen appliance cleaning",
    ],
    supplies: {
      provided: ["Vacuum cleaner", "Basic cleaning solutions"],
      required: ["Specialized cleaning equipment", "Eco-friendly products"],
    },
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <Image source={{ uri: jobDetails.image }} style={styles.headerImage} />
      <View style={styles.headerOverlay}>
        <Text style={styles.jobType}>{jobDetails.type}</Text>
        <Text style={styles.jobTitle}>{jobDetails.title}</Text>
        <View style={styles.statusContainer}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={20}
            color={COLORS.backgroundCream}
          />
          <Text style={styles.statusText}>{jobDetails.status}</Text>
        </View>
      </View>
    </View>
  );

  const renderClientInfo = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Client Information</Text>
      <View style={styles.clientCard}>
        <Image
          source={{ uri: jobDetails.client.image }}
          style={styles.clientImage}
        />
        <View style={styles.clientInfo}>
          <Text style={styles.clientName}>{jobDetails.client.name}</Text>
          <View style={styles.ratingContainer}>
            <MaterialCommunityIcons
              name="star"
              size={16}
              color={COLORS.primaryDarkGreen}
            />
            <Text style={styles.ratingText}>{jobDetails.client.rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderJobDetails = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Job Details</Text>
      <View style={styles.detailsCard}>
        <DetailItem icon="calendar" label="Date" value={jobDetails.date} />
        <DetailItem icon="clock-outline" label="Time" value={jobDetails.time} />
        <DetailItem
          icon="map-marker"
          label="Location"
          value={jobDetails.address}
        />
        <DetailItem
          icon="currency-gbp"
          label="Payment"
          value={jobDetails.price}
          isLast
        />
      </View>
    </View>
  );

  const renderPropertyDetails = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Property Details</Text>
      <View style={styles.detailsCard}>
        <DetailItem
          icon="ruler"
          label="Size"
          value={jobDetails.propertyDetails.size}
        />
        <DetailItem
          icon="bed"
          label="Bedrooms"
          value={jobDetails.propertyDetails.bedrooms.toString()}
        />
        <DetailItem
          icon="shower"
          label="Bathrooms"
          value={jobDetails.propertyDetails.bathrooms.toString()}
        />
        <DetailItem
          icon="paw"
          label="Pets"
          value={jobDetails.propertyDetails.pets}
          isLast
        />
      </View>
    </View>
  );

  const DetailItem = ({ icon, label, value, isLast = false }) => (
    <View style={[styles.detailItem, !isLast && styles.detailItemBorder]}>
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color={COLORS.primaryDarkGreen}
      />
      <View style={styles.detailItemContent}>
        <Text style={styles.detailLabel}>{label}</Text>
        <Text style={styles.detailValue}>{value}</Text>
      </View>
    </View>
  );

  const renderRequirements = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Cleaning Requirements</Text>
      <View style={styles.requirementsCard}>
        {jobDetails.requirements.map((requirement, index) => (
          <View key={index} style={styles.requirementItem}>
            <MaterialCommunityIcons
              name="check-circle"
              size={20}
              color={COLORS.primaryDarkGreen}
            />
            <Text style={styles.requirementText}>{requirement}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  const renderActionButton = () => (
    <TouchableOpacity style={styles.actionButton}>
      <Text style={styles.actionButtonText}>Accept Job</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
      >
        {renderHeader()}
        {renderClientInfo()}
        {renderJobDetails()}
        {renderPropertyDetails()}
        {renderRequirements()}
      </ScrollView>
      {renderActionButton()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundCream,
  },
  header: {
    height: 250,
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  headerOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  jobType: {
    color: COLORS.backgroundCream,
    fontSize: 16,
    fontFamily: FONTS.medium,
    marginBottom: 4,
  },
  jobTitle: {
    color: COLORS.backgroundCream,
    fontSize: 24,
    fontFamily: FONTS.bold,
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    color: COLORS.backgroundCream,
    fontSize: 16,
    fontFamily: FONTS.medium,
    marginLeft: 6,
  },
  section: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    color: COLORS.primaryDarkGreen,
    marginBottom: 12,
  },
  clientCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
  },
  clientImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  clientInfo: {
    flex: 1,
  },
  clientName: {
    fontSize: 18,
    fontFamily: FONTS.semiBold,
    color: COLORS.charcoal,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.primaryDarkGreen,
  },
  detailsCard: {
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  detailItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.dustyMint,
  },
  detailItemContent: {
    marginLeft: 12,
  },
  detailLabel: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.charcoal,
    opacity: 0.8,
  },
  detailValue: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.charcoal,
    marginTop: 2,
  },
  requirementsCard: {
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
  },
  requirementItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  requirementText: {
    marginLeft: 12,
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.charcoal,
  },
  actionButton: {
    margin: 20,
    backgroundColor: COLORS.primaryDarkGreen,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  actionButtonText: {
    color: COLORS.backgroundCream,
    fontSize: 18,
    fontFamily: FONTS.semiBold,
  },
});
