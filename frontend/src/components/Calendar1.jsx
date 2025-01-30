import {React, useEffect, useState} from "react";
import MyCalendar1 from "./calendar_components/calendar_logic";
import AxiosInstance from "./calendar_components/Axios";  
import MyModal from "./UI/Modal";
import daysjs from 'dayjs';


const Calendar1 = () => {

    {/*Modal Data Handeling for Changing Data*/}

    const [formData, setFormData] = useState({ 
        title: '',  
        start: '', 
        end: '',
      })
  

    {/*Display Date via Click on, wird hier eingebaut, damit eigenes Modal angezeigt wird */}
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState([false]);
    const handleOpen = (info) => {
        setOpen(true)
        console.log(info.dateStr)
        console.log(formData)
        setSelectedDate(info.dateStr)
        
    };
    const handleClose = () => setOpen(false);


    {/*Getting the events form Backend */}
    const [events, setEvents] = useState([])
    const GetData = () => {
        AxiosInstance.get(`appointments/`).then((res) =>{
            setEvents(res.data)
            console.log(res.data)
        })          
    }

    useEffect(() => {
        GetData();
    },[])

    {/*Main Calendar*/}

    return (
        <div>
           <MyModal
            open = {open}
            handleClose={handleClose}
            myDate={selectedDate}
            formData={formData}
           />

            <h1></h1>
            <MyCalendar1 
                myEvents={events}
                dayClickAction = {handleOpen}
            />
        </div>
    )
}

export default Calendar1;

{/* */}