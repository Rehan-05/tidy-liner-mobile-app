import { COLORS, FONTS } from "@/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Calendar } from "react-native-calendars";
import Modal from "react-native-modal";

const cleaners = [
  {
    id: "1",
    name: "Sophia Carter",
    type: "Deep clean",
    rating: 4.8,
    reviews: 127,
    available: true,
    image:
      "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "£25/hr",
    experience: "5 years",
  },
  {
    id: "2",
    name: "Ethan Bennett",
    type: "Pet-friendly",
    rating: 4.9,
    reviews: 89,
    available: true,
    image:
      "https://plus.unsplash.com/premium_photo-1705018500344-450a9e2d4c56?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "£28/hr",
    experience: "3 years",
  },
  {
    id: "3",
    name: "John Wick",
    type: "Pet-friendly",
    rating: 4.2,
    reviews: 31,
    available: true,
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "£28/hr",
    experience: "3 years",
  },
];

const serviceTypes = [
  "Deep clean",
  "Regular clean",
  "Pet-friendly",
  "Move in/out",
  "Office clean",
];

const experienceLevels = ["Beginner", "Intermediate", "Expert", "Professional"];

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isServiceModalVisible, setServiceModalVisible] = useState(false);
  const [isLevelModalVisible, setLevelModalVisible] = useState(false);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string>("");

  const [selectedDate, setSelectedDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  const filteredCleaners = useMemo(() => {
    return cleaners.filter((cleaner) =>
      cleaner.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const renderCleanerCard = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.cleanerCard}
      onPress={() =>
        router.push("/screens/client/cleaner-details/cleaner-details")
      }
    >
      <View style={styles.cleanerInfo}>
        <View>
          <View style={styles.availabilityContainer}>
            <View style={[styles.dot, { backgroundColor: COLORS.dustyMint }]} />
            <Text style={styles.availabilityText}>Available</Text>
          </View>
          <Text style={styles.cleanerName}>{item.name}</Text>
          <Text style={styles.cleanerType}>{item.type}</Text>
          <View style={styles.ratingContainer}>
            <MaterialCommunityIcons
              name="star"
              size={16}
              color={COLORS.dustyMint}
            />
            <Text style={styles.ratingText}>{item.rating}</Text>
            <Text style={styles.reviewCount}>({item.reviews} reviews)</Text>
          </View>
        </View>
        <Image
          source={{ uri: item.image }}
          style={styles.cleanerImage}
          defaultSource={{
            uri: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find a cleaner</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons
          name="magnify"
          size={24}
          color={COLORS.backgroundCream}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a cleaner"
          placeholderTextColor={COLORS.backgroundCream + "80"}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            showCalendar && styles.filterButtonActive,
          ]}
          onPress={() => setShowCalendar(!showCalendar)}
        >
          <Text style={styles.filterButtonText}>
            {selectedDate
              ? new Date(selectedDate).toLocaleDateString()
              : "Date"}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={COLORS.backgroundCream}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setServiceModalVisible(true)}
        >
          <Text style={styles.filterButtonText}>Type</Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={COLORS.backgroundCream}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setLevelModalVisible(true)}
        >
          <Text style={styles.filterButtonText}>{"Level"}</Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={COLORS.backgroundCream}
          />
        </TouchableOpacity>
      </View>

      {/* Cleaners List */}
      <FlatList
        data={filteredCleaners}
        ListHeaderComponent={() => {
          return (
            <>
              {showCalendar && (
                <View style={styles.calendarContainer}>
                  <Calendar
                    onDayPress={(day) => {
                      setSelectedDate(day.dateString);
                      setShowCalendar(false);
                    }}
                    markedDates={{
                      [selectedDate]: {
                        selected: true,
                        selectedColor: COLORS.dustyMint,
                      },
                    }}
                    theme={{
                      backgroundColor: "transparent",
                      calendarBackground: "transparent",
                      textSectionTitleColor: COLORS.backgroundCream,
                      selectedDayBackgroundColor: COLORS.dustyMint,
                      selectedDayTextColor: COLORS.primaryDarkGreen,
                      todayTextColor: COLORS.dustyMint,
                      dayTextColor: COLORS.backgroundCream,
                      textDisabledColor: COLORS.backgroundCream + "40",
                      monthTextColor: COLORS.backgroundCream,
                      textMonthFontFamily: FONTS.bold,
                      textDayFontFamily: FONTS.regular,
                      textDayHeaderFontFamily: FONTS.medium,
                      textMonthFontSize: 16,
                      textDayFontSize: 14,
                      textDayHeaderFontSize: 14,
                    }}
                  />
                </View>
              )}
            </>
          );
        }}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 50,
              }}
            >
              <Text style={{ ...styles.cleanerName, fontSize: 14 }}>
                No results found
              </Text>
            </View>
          );
        }}
        renderItem={renderCleanerCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Service Type Modal */}
      <Modal
        isVisible={isServiceModalVisible}
        onBackdropPress={() => setServiceModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Service Type</Text>
          {serviceTypes.map((service, index) => (
            <TouchableOpacity
              key={service}
              style={{
                ...styles.modalOption,
                borderBottomWidth: index == serviceTypes.length - 1 ? 0 : 1,
              }}
              onPress={() => {
                const isSelected = selectedServices.includes(service);
                setSelectedServices(
                  isSelected
                    ? selectedServices.filter((s) => s !== service)
                    : [...selectedServices, service]
                );
              }}
            >
              <Text style={styles.modalOptionText}>{service}</Text>
              {selectedServices.includes(service) && (
                <MaterialCommunityIcons
                  name="check"
                  size={20}
                  color={COLORS.dustyMint}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </Modal>

      {/* Level Modal */}
      <Modal
        isVisible={isLevelModalVisible}
        onBackdropPress={() => setLevelModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Experience Level</Text>
          {experienceLevels.map((level, index) => (
            <TouchableOpacity
              key={level}
              style={{
                ...styles.modalOption,
                borderBottomWidth: index == experienceLevels.length - 1 ? 0 : 1,
              }}
              onPress={() => {
                setSelectedLevel(level);
                setLevelModalVisible(false);
              }}
            >
              <Text style={styles.modalOptionText}>{level}</Text>
              {selectedLevel === level && (
                <MaterialCommunityIcons
                  name="check"
                  size={20}
                  color={COLORS.dustyMint}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
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
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.backgroundCream,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    marginHorizontal: 20,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    color: COLORS.backgroundCream,
    fontFamily: FONTS.regular,
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 20,
  },
  filterButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 25,
    gap: 5,
  },
  filterButtonText: {
    color: COLORS.backgroundCream,
    fontFamily: FONTS.medium,
    fontSize: 14,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  cleanerCard: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  cleanerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  availabilityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  availabilityText: {
    color: COLORS.backgroundCream,
    fontFamily: FONTS.regular,
    fontSize: 14,
    opacity: 0.8,
  },
  cleanerName: {
    color: COLORS.backgroundCream,
    fontFamily: FONTS.bold,
    fontSize: 18,
    marginBottom: 4,
  },
  cleanerType: {
    color: COLORS.backgroundCream,
    fontFamily: FONTS.regular,
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    color: COLORS.backgroundCream,
    fontFamily: FONTS.medium,
    fontSize: 14,
    marginLeft: 4,
  },
  reviewCount: {
    color: COLORS.backgroundCream,
    fontFamily: FONTS.regular,
    fontSize: 14,
    opacity: 0.7,
    marginLeft: 4,
  },
  cleanerImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: COLORS.backgroundCream,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    paddingBottom: 35,
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.primaryDarkGreen,
    marginBottom: 20,
  },
  modalOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  modalOptionText: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.primaryDarkGreen,
  },
  modalButton: {
    backgroundColor: COLORS.dustyMint,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  modalButtonText: {
    color: COLORS.primaryDarkGreen,
    fontFamily: FONTS.semiBold,
    fontSize: 16,
  },
  calendarContainer: {
    marginBottom: 20,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 10,
  },
  filterButtonActive: {
    backgroundColor: COLORS.dustyMint,
  },
});
