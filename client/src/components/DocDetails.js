import React, { useState } from 'react';
import './DocDetails.css';

function DocDetails() {
  return (

<form class="box" action="#" method="post">
  <h1>Enter your Details</h1>
  <input type="text" name="" placeholder="Full Name" />
  <input type="text" name="" placeholder="Speciality" />
  <input type="text" name="" placeholder="Working Hours start time" />
  <input type="text" name="" placeholder="Working Hours end time" />
  <input type="text" name="" placeholder="Avg. Checkup Time" />
  <input type="text" name="" placeholder="Clinic Address" />
  <input type="text" name="" placeholder="Fees to be Paid" />
  <input type="submit" name="" value="Continue" />
</form>
  )
}
export default DocDetails;