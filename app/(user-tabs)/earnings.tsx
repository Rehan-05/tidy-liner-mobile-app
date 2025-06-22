import { COLORS, FONTS } from "@/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Earnings() {
  const earningsData = {
    currentLevel: 3,
    points: 750,
    pointsNeeded: 1000,
    totalEarned: 2500,
    pendingPayments: 350,
    levelBonus: 150,
    nextMilestone: {
      jobs: 5,
      reviews: 3,
    },
  };

  const renderEarningsCard = () => (
    <View style={styles.earningsCard}>
      <View style={styles.earningsHeader}>
        <Text style={styles.earningsTitle}>Total Earnings</Text>
        <MaterialCommunityIcons
          name="currency-gbp"
          size={24}
          color={COLORS.primaryDarkGreen}
        />
      </View>
      <Text style={styles.earningsAmount}>£{earningsData.totalEarned}</Text>
      <View style={styles.earningsGrid}>
        <View style={styles.earningsGridItem}>
          <Text style={styles.gridLabel}>Pending</Text>
          <Text style={styles.gridValue}>£{earningsData.pendingPayments}</Text>
        </View>
        <View style={styles.earningsGridItem}>
          <Text style={styles.gridLabel}>Bonus</Text>
          <Text style={styles.gridValue}>£{earningsData.levelBonus}</Text>
        </View>
      </View>
    </View>
  );

  const renderLevelProgress = () => (
    <View style={styles.levelCard}>
      <View style={styles.levelHeader}>
        <View>
          <Text style={styles.levelTitle}>
            Level {earningsData.currentLevel}
          </Text>
          <Text style={styles.levelPoints}>
            {earningsData.points}/{earningsData.pointsNeeded} points
          </Text>
        </View>
        <View style={styles.levelBadge}>
          <MaterialCommunityIcons
            name="shield-star"
            size={24}
            color={COLORS.primaryDarkGreen}
          />
        </View>
      </View>
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${
                (earningsData.points / earningsData.pointsNeeded) * 100
              }%`,
            },
          ]}
        />
      </View>
      <Text style={styles.progressText}>
        {earningsData.pointsNeeded - earningsData.points} points to next level
      </Text>
    </View>
  );

  const renderMilestones = () => (
    <View style={styles.milestonesSection}>
      <Text style={styles.sectionTitle}>Current Milestones</Text>
      <View style={styles.milestoneCard}>
        <View style={styles.milestone}>
          <View style={styles.milestoneIcon}>
            <MaterialCommunityIcons
              name="briefcase-check"
              size={24}
              color={COLORS.primaryDarkGreen}
            />
          </View>
          <View style={styles.milestoneInfo}>
            <Text style={styles.milestoneTitle}>Job Completion</Text>
            <Text style={styles.milestoneSubtitle}>
              Complete {earningsData.nextMilestone.jobs} more jobs
            </Text>
            <View style={styles.milestoneProgress}>
              <View style={[styles.milestoneProgressFill, { width: "60%" }]} />
            </View>
          </View>
        </View>

        <View style={styles.milestone}>
          <View style={styles.milestoneIcon}>
            <MaterialCommunityIcons
              name="star"
              size={24}
              color={COLORS.primaryDarkGreen}
            />
          </View>
          <View style={styles.milestoneInfo}>
            <Text style={styles.milestoneTitle}>5-Star Reviews</Text>
            <Text style={styles.milestoneSubtitle}>
              Receive {earningsData.nextMilestone.reviews} more reviews
            </Text>
            <View style={styles.milestoneProgress}>
              <View style={[styles.milestoneProgressFill, { width: "40%" }]} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Earnings</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {renderEarningsCard()}
        {renderLevelProgress()}
        {renderMilestones()}
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
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 24,
  },
  earningsCard: {
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
  },
  earningsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  earningsTitle: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    color: COLORS.charcoal,
  },
  earningsAmount: {
    fontSize: 36,
    fontFamily: FONTS.bold,
    color: COLORS.primaryDarkGreen,
    marginBottom: 16,
  },
  earningsGrid: {
    flexDirection: "row",
    gap: 16,
  },
  earningsGridItem: {
    flex: 1,
    backgroundColor: COLORS.softSageGreen,
    padding: 12,
    borderRadius: 12,
  },
  gridLabel: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: COLORS.charcoal,
    opacity: 0.8,
    marginBottom: 4,
  },
  gridValue: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    color: COLORS.primaryDarkGreen,
  },
  levelCard: {
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
  },
  levelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  levelTitle: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.primaryDarkGreen,
    marginBottom: 4,
  },
  levelPoints: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.charcoal,
    opacity: 0.8,
  },
  levelBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.softSageGreen,
    alignItems: "center",
    justifyContent: "center",
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
    color: COLORS.charcoal,
    opacity: 0.8,
  },
  milestonesSection: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    color: COLORS.primaryDarkGreen,
  },
  milestoneCard: {
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
    gap: 20,
  },
  milestone: {
    flexDirection: "row",
    gap: 16,
  },
  milestoneIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.softSageGreen,
    alignItems: "center",
    justifyContent: "center",
  },
  milestoneInfo: {
    flex: 1,
  },
  milestoneTitle: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
    color: COLORS.primaryDarkGreen,
    marginBottom: 4,
  },
  milestoneSubtitle: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.charcoal,
    opacity: 0.8,
    marginBottom: 8,
  },
  milestoneProgress: {
    height: 4,
    backgroundColor: COLORS.dustyMint,
    borderRadius: 2,
  },
  milestoneProgressFill: {
    height: "100%",
    backgroundColor: COLORS.primaryDarkGreen,
    borderRadius: 2,
  },
});
