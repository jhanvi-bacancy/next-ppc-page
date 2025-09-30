import React from "react";
import axios from "axios";

// Render highlighted text
const renderHighlightedText = (text, highlightWord, Tag = "span") => {
  if (!highlightWord) return text;

  const parts = text.split(new RegExp(`(${highlightWord})`, "i"));
  return parts.map((part, index) =>
    part.toLowerCase() === highlightWord.toLowerCase() ? (
      <Tag key={index} className="text-primary">
        {part}
      </Tag>
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    )
  );
};

const formatDateWithDay = (date = new Date(), dayAdjustment = 0) => {
  // Create a new date object and adjust by the specified number of days
  const adjustedDate = new Date(date);
  adjustedDate.setDate(adjustedDate.getDate() + dayAdjustment);

  // Arrays for day names and month names
  const days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  // Get the components
  const dayName = days[adjustedDate.getDay()];
  const monthName = months[adjustedDate.getMonth()];
  const dayOfMonth = adjustedDate.getDate();

  // Return formatted string
  return `${dayName}, ${monthName} ${dayOfMonth}`;
};

// Function to get client IP and format it like PHP version
const getClientIp = async () => {
  try {
    // Get public IP using a reliable service
    const response = await axios.get("https://api.ipify.org?format=json");
    const ip = response.data.ip;
    return ip;
  } catch (error) {
    console.error("Error getting IP:", error);
    return "UNKNOWN";
  }
};

// Function to get location data using browser's Geolocation API
const getLocationData = async () => {
  try {
    // Get coordinates using browser's Geolocation API
    const position = await new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported"));
        return;
      }
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      });
    });

    // Use reverse geocoding to get location details
    const { latitude, longitude } = position.coords;
    const response = await axios.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );

    return {
      city: response.data.city || response.data.locality || "UNKNOWN",
      state: response.data.principalSubdivision || "UNKNOWN",
      country: response.data.countryName || "UNKNOWN",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
  } catch (error) {
    console.error("Error getting location:", error);
    return {
      city: "UNKNOWN",
      state: "UNKNOWN",
      country: "UNKNOWN",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
  }
};

export {
  renderHighlightedText,
  formatDateWithDay,
  getClientIp,
  getLocationData,
};
