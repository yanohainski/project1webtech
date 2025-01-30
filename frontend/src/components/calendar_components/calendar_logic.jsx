import {React} from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timegridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import multiMonthPlugin from '@fullcalendar/multimonth'
import interactionPlugin from '@fullcalendar/interaction'



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