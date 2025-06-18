import { COLORS, FONTS } from "@/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
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

const todayJobs = [
  {
    id: "1",
    type: "New Job",
    title: "Luxury Apartment Cleaning",
    address: "123 Marina Bay, Downtown",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500",
    price: "$180",
    time: "2:00 PM - 5:00 PM",
  },
];

const upcomingJobs = [
  {
    id: "1",
    title: "Corporate Office Deep Clean",
    address: "456 Business Plaza, Midtown",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500",
    price: "$250",
    date: "Tomorrow",
    time: "9:00 AM - 1:00 PM",
  },
  {
    id: "2",
    title: "Penthouse Maintenance",
    address: "789 Skyview Towers, Uptown",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500",
    price: "$200",
    date: "Next Monday",
    time: "10:00 AM - 2:00 PM",
  },
];

const announcements = [
  {
    id: "1",
    type: "New Training",
    title: "Advanced Eco-Friendly Cleaning",
    description: "Learn sustainable cleaning techniques",
    image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=500",
  },
  {
    id: "2",
    type: "Achievement",
    title: "Level Up!",
    description: "You've reached Gold Status",
    image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=500",
    badge: "🏆",
  },
];

export default function Home() {
  const renderJobCard = (job: any, isNew?: boolean) => (
    <TouchableOpacity
      key={job.id}
      style={styles.jobCard}
      onPress={() => router.push(`/screens/user/job-details/job-details`)}
    >
      <View style={styles.jobContent}>
        <View style={styles.jobInfo}>
          {isNew && <Text style={styles.newTag}>New Job</Text>}
          <Text style={styles.jobTitle}>{job.title}</Text>
          <View style={styles.addressContainer}>
            <MaterialCommunityIcons
              name="map-marker"
              size={16}
              color={COLORS.dustyMint}
            />
            <Text style={styles.jobAddress}>{job.address}</Text>
          </View>
          <View style={styles.jobDetails}>
            <View style={styles.detailItem}>
              <MaterialCommunityIcons
                name="clock-outline"
                size={16}
                color={COLORS.dustyMint}
              />
              <Text style={styles.detailText}>{job.time}</Text>
            </View>
            <View style={styles.detailItem}>
              <MaterialCommunityIcons
                name="currency-usd"
                size={16}
                color={COLORS.dustyMint}
              />
              <Text style={styles.detailText}>{job.price}</Text>
            </View>
          </View>
        </View>
        <Image source={{ uri: job.image }} style={styles.jobImage} />
      </View>
    </TouchableOpacity>
  );

  const renderAnnouncement = (announcement: any) => (
    <TouchableOpacity
      key={announcement.id}
      style={styles.announcementCard}
      onPress={() => {}}
    >
      <View style={styles.announcementContent}>
        <View style={styles.announcementInfo}>
          <Text style={styles.announcementType}>{announcement.type}</Text>
          <Text style={styles.announcementTitle}>{announcement.title}</Text>
          <Text style={styles.announcementDescription}>
            {announcement.description}
          </Text>
        </View>
        {announcement.badge ? (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{announcement.badge}</Text>
          </View>
        ) : (
          <Image
            source={{ uri: announcement.image }}
            style={styles.announcementImage}
          />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Feed</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today</Text>
          {todayJobs.map((job) => renderJobCard(job, true))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming</Text>
          {upcomingJobs.map((job) => renderJobCard(job))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Announcements</Text>
          {announcements.map(renderAnnouncement)}
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
    padding: 20,
    backgroundColor: COLORS.backgroundCream,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: FONTS.bold,
    color: COLORS.primaryDarkGreen,
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
    fontSize: 24,
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
  jobContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  jobInfo: {
    flex: 1,
    marginRight: 16,
  },
  newTag: {
    color: COLORS.primaryDarkGreen,
    fontFamily: FONTS.medium,
    fontSize: 14,
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 18,
    fontFamily: FONTS.semiBold,
    color: COLORS.charcoal,
    marginBottom: 8,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  jobAddress: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.charcoal,
    opacity: 0.8,
  },
  jobDetails: {
    flexDirection: "row",
    gap: 16,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailText: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: COLORS.primaryDarkGreen,
  },
  jobImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  announcementCard: {
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
  },
  announcementContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  announcementInfo: {
    flex: 1,
    marginRight: 16,
  },
  announcementType: {
    color: COLORS.primaryDarkGreen,
    fontFamily: FONTS.medium,
    fontSize: 14,
    marginBottom: 4,
  },
  announcementTitle: {
    fontSize: 18,
    fontFamily: FONTS.semiBold,
    color: COLORS.charcoal,
    marginBottom: 4,
  },
  announcementDescription: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.charcoal,
    opacity: 0.8,
  },
  announcementImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  badgeContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.softSageGreen,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: 24,
  },
});
