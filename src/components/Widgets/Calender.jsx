import React from 'react'
import { useEffect, useState } from 'react';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
function Calender() {
  let dateValue = new Date();
  function disabledDate(args) {
    if (args.date.getDay() === 0 || args.date.getDay() === 6) {
      // set 'true' to disable the weekends
      args.isDisabled = true;
    }
  }
  const [selectedValue, setSelectedValue] = useState(null);
  const onchange = (args) => {
    /*Displays selected date in the label*/
    setSelectedValue(args.value.toLocaleDateString());
  };
  return (<div className=' e-bigger' style={{ overflow: 'auto'}}>
        <CalendarComponent change={onchange}></CalendarComponent>
      </div>
   
  )
}

export default Calender


