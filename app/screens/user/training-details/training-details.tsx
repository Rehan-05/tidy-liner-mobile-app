import { COLORS, FONTS } from "@/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TrainingDetails() {
  const [currentModule, setCurrentModule] = useState(0);

  const courseDetails = {
    id: "1",
    title: "Cleaning Techniques",
    description:
      "Learn the best practices for cleaning different surfaces and materials. Master professional-grade cleaning techniques and enhance your service quality.",
    image: "https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg",
    type: "free",
    progress: 75,
    duration: "4 hours",
    instructor: {
      name: "Emily Rodriguez",
      title: "Professional Cleaning Consultant",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    },
    modules: [
      {
        id: 1,
        title: "Introduction to Professional Cleaning",
        duration: "45 mins",
        completed: true,
      },
      {
        id: 2,
        title: "Surface Types and Appropriate Products",
        duration: "1 hour",
        completed: true,
      },
      {
        id: 3,
        title: "Advanced Cleaning Techniques",
        duration: "1.5 hours",
        completed: false,
      },
      {
        id: 4,
        title: "Safety and Best Practices",
        duration: "45 mins",
        completed: false,
      },
    ],
    learningOutcomes: [
      "Master professional cleaning techniques",
      "Understand different surface types",
      "Learn about eco-friendly cleaning products",
      "Implement safety protocols effectively",
    ],
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <Image source={{ uri: courseDetails.image }} style={styles.headerImage} />
      <View style={styles.headerOverlay}>
        <View style={styles.courseTypeContainer}>
          <MaterialCommunityIcons
            name={courseDetails.type === "premium" ? "star" : "book-open"}
            size={20}
            color={COLORS.backgroundCream}
          />
          <Text style={styles.courseType}>
            {courseDetails.type.charAt(0).toUpperCase() +
              courseDetails.type.slice(1)}
          </Text>
        </View>
        <Text style={styles.courseTitle}>{courseDetails.title}</Text>
        <View style={styles.courseStats}>
          <View style={styles.statItem}>
            <MaterialCommunityIcons
              name="clock-outline"
              size={20}
              color={COLORS.backgroundCream}
            />
            <Text style={styles.statText}>{courseDetails.duration}</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialCommunityIcons
              name="progress-check"
              size={20}
              color={COLORS.backgroundCream}
            />
            <Text style={styles.statText}>
              {courseDetails.progress}% Complete
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderInstructor = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Your Instructor</Text>
      <View style={styles.instructorCard}>
        <Image
          source={{ uri: courseDetails.instructor.image }}
          style={styles.instructorImage}
        />
        <View style={styles.instructorInfo}>
          <Text style={styles.instructorName}>
            {courseDetails.instructor.name}
          </Text>
          <Text style={styles.instructorTitle}>
            {courseDetails.instructor.title}
          </Text>
        </View>
      </View>
    </View>
  );

  const renderProgress = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Course Progress</Text>
      <View style={styles.progressCard}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${courseDetails.progress}%` },
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          {courseDetails.progress}% Completed
        </Text>
      </View>
    </View>
  );

  const renderModules = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Course Content</Text>
      <View style={styles.modulesCard}>
        {courseDetails.modules.map((module, index) => (
          <TouchableOpacity
            key={module.id}
            style={[
              styles.moduleItem,
              index === courseDetails.modules.length - 1 && styles.lastModule,
            ]}
            onPress={() => setCurrentModule(index)}
          >
            <View style={styles.moduleHeader}>
              <View style={styles.moduleInfo}>
                <Text style={styles.moduleTitle}>{module.title}</Text>
                <Text style={styles.moduleDuration}>{module.duration}</Text>
              </View>
              <MaterialCommunityIcons
                name={module.completed ? "check-circle" : "play-circle"}
                size={24}
                color={
                  module.completed
                    ? COLORS.primaryDarkGreen
                    : COLORS.primaryDarkGreen
                }
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderLearningOutcomes = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Learning Outcomes</Text>
      <View style={styles.outcomesCard}>
        {courseDetails.learningOutcomes.map((outcome, index) => (
          <View key={index} style={styles.outcomeItem}>
            <MaterialCommunityIcons
              name="check-circle"
              size={20}
              color={COLORS.primaryDarkGreen}
            />
            <Text style={styles.outcomeText}>{outcome}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  const renderActionButton = () => (
    <TouchableOpacity style={styles.actionButton}>
      <Text style={styles.actionButtonText}>Continue Learning</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderHeader()}
        {renderInstructor()}
        {renderProgress()}
        {renderModules()}
        {renderLearningOutcomes()}
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
  courseTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  courseType: {
    color: COLORS.backgroundCream,
    fontSize: 16,
    fontFamily: FONTS.medium,
    marginLeft: 6,
  },
  courseTitle: {
    color: COLORS.backgroundCream,
    fontSize: 24,
    fontFamily: FONTS.bold,
    marginBottom: 12,
  },
  courseStats: {
    flexDirection: "row",
    gap: 16,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  statText: {
    color: COLORS.backgroundCream,
    fontSize: 14,
    fontFamily: FONTS.medium,
    marginLeft: 6,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    color: COLORS.primaryDarkGreen,
    marginBottom: 12,
  },
  instructorCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
  },
  instructorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  instructorInfo: {
    flex: 1,
  },
  instructorName: {
    fontSize: 18,
    fontFamily: FONTS.semiBold,
    color: COLORS.charcoal,
    marginBottom: 4,
  },
  instructorTitle: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.charcoal,
    opacity: 0.8,
  },
  progressCard: {
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
  },
  progressBar: {
    height: 8,
    backgroundColor: COLORS.dustyMint,
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: "100%",
    backgroundColor: COLORS.primaryDarkGreen,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: COLORS.primaryDarkGreen,
  },
  modulesCard: {
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
  },
  moduleItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.dustyMint,
  },
  lastModule: {
    borderBottomWidth: 0,
  },
  moduleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  moduleInfo: {
    flex: 1,
    marginRight: 12,
  },
  moduleTitle: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.charcoal,
    marginBottom: 4,
  },
  moduleDuration: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.charcoal,
    opacity: 0.8,
  },
  outcomesCard: {
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
  },
  outcomeItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  outcomeText: {
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
