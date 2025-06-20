import { COLORS, FONTS } from "@/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Calendar, DateData } from "react-native-calendars";

type OnboardingStep = "welcome" | "services" | "verification" | "availability";

export default function CleanerOnboarding() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("welcome");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const services = [
    { id: "regular", title: "Regular House Cleaning" },
    { id: "deep", title: "Deep Cleaning" },
    { id: "office", title: "Commercial/Office Cleaning" },
    { id: "move", title: "Move In/Out Cleaning" },
    { id: "airbnb", title: "Airbnb/Rental Turnover" },
  ];

  const handleDateSelect = (day: DateData) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day.dateString);
      setEndDate(null);
    } else {
      if (day.dateString < startDate) {
        setEndDate(startDate);
        setStartDate(day.dateString);
      } else {
        setEndDate(day.dateString);
      }
    }
  };

  const getMarkedDates = () => {
    const marked: any = {};

    if (startDate) {
      marked[startDate] = {
        selected: true,
        startingDay: true,
        color: COLORS.primaryDarkGreen,
      };
    }

    if (startDate && endDate) {
      let currentDate = new Date(startDate);
      const lastDate = new Date(endDate);

      while (currentDate < lastDate) {
        currentDate.setDate(currentDate.getDate() + 1);
        const dateString = currentDate.toISOString().split("T")[0];

        if (dateString === endDate) {
          marked[dateString] = {
            selected: true,
            endingDay: true,
            color: COLORS.primaryDarkGreen,
          };
        } else {
          marked[dateString] = {
            selected: true,
            color: COLORS.primaryDarkGreen,
          };
        }
      }
    }

    return marked;
  };

  const handleNext = () => {
    switch (currentStep) {
      case "welcome":
        setCurrentStep("services");
        break;
      case "services":
        setCurrentStep("verification");
        break;
      case "verification":
        setCurrentStep("availability");
        break;
      case "availability":
        router.push("/(tabs)");
        break;
    }
  };

  const handleBack = () => {
    switch (currentStep) {
      case "services":
        setCurrentStep("welcome");
        break;
      case "verification":
        setCurrentStep("services");
        break;
      case "availability":
        setCurrentStep("verification");
        break;
    }
  };

  const renderHeader = () => (
    <View style={styles.header}>
      {currentStep !== "welcome" && (
        <View style={styles.backButtonContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBack}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color={COLORS.primaryDarkGreen}
            />
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${
                  ((currentStep === "welcome"
                    ? 1
                    : currentStep === "services"
                    ? 2
                    : currentStep === "verification"
                    ? 3
                    : 4) /
                    4) *
                  100
                }%`,
              },
            ]}
          />
        </View>
        <Text style={styles.stepText}>
          Step{" "}
          {currentStep === "welcome"
            ? "1"
            : currentStep === "services"
            ? "2"
            : currentStep === "verification"
            ? "3"
            : "4"}{" "}
          of 4
        </Text>
      </View>
    </View>
  );

  const renderContent = () => {
    switch (currentStep) {
      case "welcome":
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Welcome to TidyLinker!</Text>
            <Text style={styles.subtitle}>
              Join our community of professional cleaners. Complete your profile
              to start receiving job opportunities and grow your business.
            </Text>
          </View>
        );

      case "services":
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Your Cleaning Services</Text>
            <Text style={styles.subtitle}>
              Select the cleaning services you specialize in. This helps us
              match you with the right clients.
            </Text>
            {services.map((service) => (
              <TouchableOpacity
                key={service.id}
                style={[
                  styles.serviceItem,
                  selectedServices.includes(service.id) &&
                    styles.serviceSelected,
                ]}
                onPress={() => {
                  setSelectedServices((prev) =>
                    prev.includes(service.id)
                      ? prev.filter((id) => id !== service.id)
                      : [...prev, service.id]
                  );
                }}
              >
                <Text
                  style={[
                    styles.serviceText,
                    selectedServices.includes(service.id) &&
                      styles.serviceTextSelected,
                  ]}
                >
                  {service.title}
                </Text>
                {selectedServices.includes(service.id) && (
                  <MaterialCommunityIcons
                    name="check"
                    size={24}
                    color={COLORS.backgroundCream}
                  />
                )}
              </TouchableOpacity>
            ))}
          </View>
        );

      case "verification":
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Professional Verification</Text>
            <Text style={styles.subtitle}>
              Build trust with clients by verifying your identity and
              professional credentials.
            </Text>
            <View style={styles.uploadSection}>
              <View style={styles.uploadItem}>
                <MaterialCommunityIcons
                  name="card-account-details"
                  size={32}
                  color={COLORS.primaryDarkGreen}
                />
                <View style={styles.uploadTextContainer}>
                  <Text style={styles.uploadTitle}>Identity Verification</Text>
                  <Text style={styles.uploadSubtitle}>
                    Upload your ID or passport
                  </Text>
                </View>
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadButtonText}>Upload</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.uploadItem}>
                <MaterialCommunityIcons
                  name="certificate"
                  size={32}
                  color={COLORS.primaryDarkGreen}
                />
                <View style={styles.uploadTextContainer}>
                  <Text style={styles.uploadTitle}>Certifications</Text>
                  <Text style={styles.uploadSubtitle}>
                    Add any cleaning certifications
                  </Text>
                </View>
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadButtonText}>Upload</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );

      case "availability":
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Work Schedule</Text>
            <Text style={styles.subtitle}>
              Set your working hours and availability. You can always update
              this later.
            </Text>
            <Calendar
              onDayPress={handleDateSelect}
              markedDates={getMarkedDates()}
              markingType="period"
              theme={{
                todayTextColor: COLORS.primaryDarkGreen,
                textDayFontFamily: FONTS.regular,
                textMonthFontFamily: FONTS.medium,
                textDayHeaderFontFamily: FONTS.medium,
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 14,
                selectedDayBackgroundColor: COLORS.primaryDarkGreen,
                selectedDayTextColor: COLORS.backgroundCream,
                dotColor: COLORS.primaryDarkGreen,
                selectedDotColor: COLORS.backgroundCream,
              }}
            />
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      {renderHeader()}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {renderContent()}
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.nextButton,
          ((currentStep === "services" && selectedServices.length === 0) ||
            (currentStep === "availability" && !endDate)) &&
            styles.buttonDisabled,
        ]}
        onPress={handleNext}
        disabled={
          (currentStep === "services" && selectedServices.length === 0) ||
          (currentStep === "availability" && !endDate)
        }
      >
        <Text style={styles.nextButtonText}>
          {currentStep === "availability" ? "Complete Setup" : "Continue"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundCream,
    paddingTop: Platform.OS == "android" ? 30 : 0,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    gap: 20,
  },
  backButtonContainer: {
    marginBottom: 4,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  backButtonText: {
    marginLeft: 4,
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.primaryDarkGreen,
  },
  progressContainer: {
    width: "100%",
  },
  progressBar: {
    height: 8,
    backgroundColor: COLORS.dustyMint,
    borderRadius: 4,
  },
  progressFill: {
    height: "100%",
    backgroundColor: COLORS.primaryDarkGreen,
    borderRadius: 4,
  },
  stepText: {
    marginTop: 8,
    color: COLORS.primaryDarkGreen,
    fontFamily: FONTS.medium,
    fontSize: 14,
  },

  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: FONTS.bold,
    color: COLORS.primaryDarkGreen,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.charcoal,
    marginBottom: 24,
    opacity: 0.8,
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
  },
  serviceSelected: {
    backgroundColor: COLORS.primaryDarkGreen,
    borderColor: COLORS.primaryDarkGreen,
  },
  serviceText: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.primaryDarkGreen,
  },
  serviceTextSelected: {
    color: COLORS.backgroundCream,
  },
  uploadSection: {
    gap: 16,
  },
  uploadItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: COLORS.backgroundCream,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.dustyMint,
  },
  uploadTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  uploadTitle: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.primaryDarkGreen,
  },
  uploadSubtitle: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.charcoal,
    opacity: 0.8,
  },
  uploadButton: {
    backgroundColor: COLORS.softSageGreen,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  uploadButtonText: {
    color: COLORS.primaryDarkGreen,
    fontFamily: FONTS.medium,
    fontSize: 14,
  },
  nextButton: {
    backgroundColor: COLORS.primaryDarkGreen,
    margin: 20,
    padding: 16,
    marginBottom: Platform.OS == "android" ? 60 : 30,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  nextButtonText: {
    color: COLORS.backgroundCream,
    fontFamily: FONTS.medium,
    fontSize: 16,
  },
});
