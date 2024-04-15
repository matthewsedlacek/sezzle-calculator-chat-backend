import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [date, setDate] = useState(new Date());
  const [unavailableDates, setUnavailableDates] = useState([
    new Date(2023, 5, 10), // Example unavailable date 1
    new Date(2023, 5, 15), // Example unavailable date 2
    // Add more unavailable dates as needed
  ]);

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const tileDisabled = ({ date }) => {
    return unavailableDates.some(
      (unavailableDate) =>
        date.getFullYear() === unavailableDate.getFullYear() &&
        date.getMonth() === unavailableDate.getMonth() &&
        date.getDate() === unavailableDate.getDate()
    );
  };

  return (
    <div className="App">
      <h1>Paws & Vows</h1>
      <div className="legend">
        <div className="unavailable-date"></div>
        <span>Unavailable</span>
      </div>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileDisabled={tileDisabled}
      />
    </div>
  );
}

export default App;
