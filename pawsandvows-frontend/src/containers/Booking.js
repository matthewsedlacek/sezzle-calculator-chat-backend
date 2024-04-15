import React from "react";
import Calendar from 'react-calendar';
import RequestForm from "../components/booking/RequestForm";
import 'react-calendar/dist/Calendar.css';

class Booking extends React.Component {
  state = {
    date: null,
  };

  onDateChange = date => {
    this.setState({ date });
  };

  render() {
    const { date } = this.state;

    return (
      <div>
        <Calendar
          onChange={this.onDateChange}
          value={this.state.date}
        />
        {date && <RequestForm date={date} />}
      </div>
    );
  }
}

export default Booking;