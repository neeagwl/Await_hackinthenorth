import React, { useState } from 'react';
import './Detail.css';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Details() {
    const [selectedDate, setSelectedDate] = useState(null)
  return (

<form class="box" action="index.html" method="post">
  <h1>Enter your Details</h1>
  <input type="text" name="" placeholder="Full Name" />
  <input type="text" name="" placeholder="Age" />
  <input type="text" name="" placeholder="Gender" />
  <input type="text" name="" placeholder="Disease Description" />
  <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} 
  dateFormat='dd/MM/yyyy' minDate={new Date()} scrollableMonthYearDropdown
  placeholderText="Date of Appointment" />
  <input type="submit" name="" value="Continue" />
</form>
  )
}
export default Details;