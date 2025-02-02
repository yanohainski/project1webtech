import {React} from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timegridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import multiMonthPlugin from '@fullcalendar/multimonth'
import interactionPlugin from '@fullcalendar/interaction'


{/*Main Calendar Component, here the layout of the calendar gets defined and exported. 
  We use the FullCalendar component from the FullCalendar library, and import the needed plugins for it.
  Here we can define what will be displayed in the calendar and what happens while clicking on a day.

  in the views part we also defined our own three month view.
  */}


const MyCalendar1 = ({myEvents, dayClickAction}) => {

    return (
      <FullCalendar
        plugins={[ dayGridPlugin, timegridPlugin, listPlugin, multiMonthPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        dateClick={dayClickAction}
       
        
        events={myEvents}

        headerToolbar= {{
          left: 'prev,next,today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,multiMonth3' // user can switch between the two
        }} 


        titleFormat={
          {
            month: 'long',
            year: 'numeric',
            day: '2-digit',
            hour12: false
          }
        }

        views = {{
          multiMonth3:{
             type: 'multiMonth', 
             duration: {months: 3},
             titleFormat: {month: 'short', year: 'numeric'}, 
             columnHeaderFormat: {weekday:'short'},
             buttonText: "3 Months"
          }
          
        }}
 
      />
    );
}

export default MyCalendar1