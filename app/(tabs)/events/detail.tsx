import React, { useState, useEffect } from "react";
import { IconSymbol } from "@/components/ui/IconSymbol";
import * as Calendar from "expo-calendar";
import { Platform } from "react-native";
import { Button, Image, ScrollView, Text, View, Select, Sheet } from "tamagui";

export default function Detail() {
  const [calendars, setCalendars] = useState([]);
  const [selectedCalendar, setSelectedCalendar] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    fetchCalendars();
  }, []);

  async function fetchCalendars() {
    try {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const fetchedCalendars = await Calendar.getCalendarsAsync(
          Calendar.EntityTypes.EVENT
        );

        // Filter for modifiable calendars
        const modifiableCalendars = fetchedCalendars.filter(
          (cal) => cal.allowsModifications
        );

        setCalendars(modifiableCalendars);

        // Auto-select first calendar or a specific one if exists
        const defaultCalendar =
          modifiableCalendars.find((cal) => cal.name === "Samsung Calendar") ||
          modifiableCalendars.find(
            (cal) => cal.name === "isiagigeofrey0@gmail.com"
          ) ||
          modifiableCalendars[0];

        setSelectedCalendar(defaultCalendar);
      }
    } catch (error) {
      console.error("Error fetching calendars:", error);
      alert(`Failed to fetch calendars: ${error.message}`);
    }
  }

  async function createEventInCalendar() {
    if (!selectedCalendar) {
      alert("Please select a calendar");
      return;
    }

    try {
      const eventId = await Calendar.createEventAsync(selectedCalendar.id, {
        title: "Woman's Day Event",
        startDate: new Date(2025, 2, 8, 7, 0), // March 8, 2025 at 7:00 AM
        endDate: new Date(2025, 2, 8, 9, 0), // March 8, 2025 at 9:00 AM
        notes: "Climate action event focused on empowering women in Uganda",
        location: "Physical, In Person",
      });

      alert(`Event added to ${selectedCalendar.name}! Event ID: ${eventId}`);
    } catch (error) {
      console.error("Full Error Details:", error);
      alert(`Failed to add event: ${error.message}`);
    }
  }

  return (
    <View flex={1} backgroundColor={"white"}>
      <ScrollView flex={1}>
        <Image
          source={{
            uri: "https://loveugandafoundation.org/wp-content/uploads/2022/03/Pink-White-International-Womens-Day-Instagram-Post-1024x1024.png",
          }}
          style={{ width: "100%", height: 320 }}
        />
        <View paddingHorizontal={20}>
          <Text
            fontSize={20}
            fontWeight="bold"
            color={"$green9"}
            paddingVertical={20}
          >
            Woman's Day Event
          </Text>
          <Text fontSize={15} lineHeight={24} color={"$gray11"}>
            Join us for a special International Women's Day event focused on
            climate action in Uganda! This engaging gathering will empower
            participants to understand the vital role women play in protecting
            the environment.
          </Text>

          <View marginTop={25} flexDirection="row">
            <View
              padding={4}
              marginRight={10}
              backgroundColor={"#f2f2f2"}
              width={50}
              justifyContent="center"
              alignItems="center"
            >
              <IconSymbol size={32} name="book.fill" color={"$green9"} />
            </View>
            <View>
              <Text lineHeight={24} color={"$yellow8"}>
                SAT, Mar 08, 7:00 AM
              </Text>
              <Text lineHeight={24} color={"$gray9"}>
                Physical
              </Text>
              <Text lineHeight={24} color={"$gray9"}>
                In Person
              </Text>
            </View>
          </View>

          {/* Calendar Selection */}
          <View marginTop={25}>
            <Text marginBottom={10} fontWeight="bold">
              Select Calendar
            </Text>
            <Button
              backgroundColor={"$yellow4"}
              onPress={() => setIsSheetOpen(true)}
              borderRadius={20}
              color={"$green9"}
            >
              {selectedCalendar ? selectedCalendar.name : "Choose Calendar"}
            </Button>
          </View>

          {/* Add to Calendar Button */}
          <View marginTop={20}>
            <Button
              borderRadius={20}
              onPress={createEventInCalendar}
              disabled={!selectedCalendar}
              backgroundColor={"$green9"}
              color={"white"}
            >
              Add to Calendar
            </Button>
          </View>
        </View>
      </ScrollView>

      {/* Calendar Selection Sheet */}
      <Sheet
        modal
        open={isSheetOpen}
        onOpenChange={setIsSheetOpen}
        snapPoints={[80]}
      >
        <Sheet.Overlay />
        <Sheet.Frame>
          {/* <Sheet.Title>Select Calendar</Sheet.Title> */}
          <Text>Select Calendar</Text>
          <ScrollView>
            {calendars.map((calendar) => (
              <Button
                key={calendar.id}
                onPress={() => {
                  setSelectedCalendar(calendar);
                  setIsSheetOpen(false);
                }}
                marginVertical={5}
                backgroundColor={
                  selectedCalendar?.id === calendar.id ? "$blue5" : "$gray5"
                }
              >
                {calendar.name}
              </Button>
            ))}
          </ScrollView>
        </Sheet.Frame>
      </Sheet>
    </View>
  );
}
