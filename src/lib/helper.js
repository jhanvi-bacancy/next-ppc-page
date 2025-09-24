import React from "react";

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

export { renderHighlightedText, formatDateWithDay };
