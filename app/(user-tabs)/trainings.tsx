import { COLORS, FONTS } from "@/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
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

type CourseType = "all" | "free" | "premium";

const courses = [
  {
    id: "1",
    title: "Cleaning Techniques",
    description:
      "Learn the best practices for cleaning different surfaces and materials.",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500",
    type: "free",
    progress: 75,
  },
  {
    id: "2",
    title: "Customer Service",
    description:
      "Enhance your communication skills and build rapport with clients.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500",
    type: "free",
    progress: 100,
  },
  {
    id: "3",
    title: "Safety Standards",
    description:
      "Understand and apply safety protocols to ensure a safe working environment.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500",
    type: "premium",
    progress: 0,
  },
];

const upcomingEvents = [
  {
    id: "1",
    title: "Live Session: Advanced Cleaning Methods",
    date: "July 15, 2024",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500",
    type: "workshop",
  },
  {
    id: "2",
    title: "Workshop: Client Communication",
    date: "August 20, 2024",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500",
    type: "seminar",
  },
];

export default function Trainings() {
  const [selectedType, setSelectedType] = useState<CourseType>("all");

  const renderCourseCard = (course: any) => (
    <TouchableOpacity
      key={course.id}
      style={styles.courseCard}
      onPress={() => {
        router.push("/screens/user/training-details/training-details");
      }}
    >
      <Image source={{ uri: course.image }} style={styles.courseImage} />

      <View style={styles.courseContent}>
        <View style={styles.courseHeader}>
          <Text style={styles.courseTitle}>{course.title}</Text>
          {course.type === "premium" && (
            <MaterialCommunityIcons
              name="star"
              size={20}
              color={COLORS.primaryDarkGreen}
            />
          )}
        </View>
        <Text style={styles.courseDescription}>{course.description}</Text>
        {course.progress > 0 && (
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View
                style={[styles.progressFill, { width: `${course.progress}%` }]}
              />
            </View>
            <Text style={styles.progressText}>{course.progress}% Complete</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  const renderEventCard = (event: any) => (
    <TouchableOpacity
      key={event.id}
      style={styles.eventCard}
      onPress={() => {}}
    >
      <Image source={{ uri: event.image }} style={styles.eventImage} />
      <View style={styles.eventContent}>
        <Text style={styles.eventTitle}>{event.title}</Text>
        <View style={styles.eventDateContainer}>
          <MaterialCommunityIcons
            name="calendar"
            size={16}
            color={COLORS.dustyMint}
          />
          <Text style={styles.eventDate}>{event.date}</Text>
        </View>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Training</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course Catalog</Text>
          <View style={styles.filterContainer}>
            {["all", "free", "premium"].map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.filterButton,
                  selectedType === type && styles.filterButtonActive,
                ]}
                onPress={() => setSelectedType(type as CourseType)}
              >
                <Text
                  style={[
                    styles.filterButtonText,
                    selectedType === type && styles.filterButtonTextActive,
                  ]}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {courses
            .filter(
              (course) => selectedType === "all" || course.type === selectedType
            )
            .map(renderCourseCard)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          {upcomingEvents.map(renderEventCard)}
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
    fontSize: 22,
    fontFamily: FONTS.semiBold,
    color: COLORS.primaryDarkGreen,
    marginBottom: 16,
  },
  filterContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: COLORS.backgroundCream,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
  },
  filterButtonActive: {
    backgroundColor: COLORS.primaryDarkGreen,
    borderColor: COLORS.primaryDarkGreen,
  },
  filterButtonText: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: COLORS.primaryDarkGreen,
  },
  filterButtonTextActive: {
    color: COLORS.backgroundCream,
  },
  courseCard: {
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
    overflow: "hidden",
  },
  courseImage: {
    width: "100%",
    height: 160,
    backgroundColor: COLORS.softSageGreen,
  },
  courseContent: {
    padding: 16,
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  courseTitle: {
    fontSize: 18,
    fontFamily: FONTS.semiBold,
    color: COLORS.primaryDarkGreen,
  },
  courseDescription: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.charcoal,
    opacity: 0.8,
    marginBottom: 12,
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: COLORS.dustyMint,
    borderRadius: 2,
    marginBottom: 4,
  },
  progressFill: {
    height: "100%",
    backgroundColor: COLORS.primaryDarkGreen,
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    fontFamily: FONTS.medium,
    color: COLORS.primaryDarkGreen,
  },
  eventCard: {
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
    flexDirection: "row",
    overflow: "hidden",
  },
  eventImage: {
    width: 100,
    height: "100%",
    backgroundColor: COLORS.softSageGreen,
  },
  eventContent: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },
  eventTitle: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
    color: COLORS.primaryDarkGreen,
    marginBottom: 8,
  },
  eventDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 12,
  },
  eventDate: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.charcoal,
    opacity: 0.8,
  },
  registerButton: {
    backgroundColor: COLORS.softSageGreen,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  registerButtonText: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: COLORS.primaryDarkGreen,
  },
});
