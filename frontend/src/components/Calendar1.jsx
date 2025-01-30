import {React, useEffect, useState} from "react";
import MyCalendar1 from "./calendar_components/calendar_logic";
import AxiosInstance from "./calendar_components/Axios";  
import MyModal from "./UI/Modal";
import daysjs from 'dayjs';
import dayjs from "dayjs";


const Calendar1 = () => {

    {/*Modal Data Handeling for Changing Data*/}

    const [formData, setFormData] = useState({ 
        title: '',  
        start: '', 
        end: '',
      })

      const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({ 
            ...formData, 
            [name]: value
        })
      }

      console.log('data from my form', formData)
  

    {/*Display Date via Click on, wird hier eingebaut, damit eigenes Modal angezeigt wird */}
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState([false]);


    const handleOpen = (info) => {
        setOpen(true)
        setSelectedDate(info.dateStr)
        setFormData({      
            title: '',  
            start: dayjs(info.dateStr), 
            end: dayjs(info.dateStr)})
        
    };
    const handleClose = () => {
        setOpen(false);
        setFormData({      
            title: '',  
            start: '', 
            end: '',})
        }

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

    {/*Main Calendar, all components get put together*/}

    return (
        <div>
           <MyModal
            open = {open}
            handleClose={handleClose}
            myDate={selectedDate}
            formData={formData}
            handleChange={handleChange}
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