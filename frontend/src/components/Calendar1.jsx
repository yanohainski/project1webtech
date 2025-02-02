import {React, useEffect, useState} from "react";
import MyCalendar1 from "./calendar_components/calendar_layout";
import AxiosInstance from "./calendar_components/Axios";  
import MyModal from "./UI/Modal";
import dayjs from "dayjs";

{/*This is our Calendar Page, that will be shown. This file handles the logic of our calendar
    We import the needed parts from react, like useEffect, useState and also our components MyCalendar1, AxiosInstance and MyModal.
    */}


const Calendar1 = () => {

    {/*Modal Data Handeling for Changing Data
        with this constant named formData we can store the Data for our Appointments temporarily before they get send to the backend
        it hass the attributes title, start and end, which are the attributes of our Appointments, and named the same way in the backend
        */}

    const [formData, setFormData] = useState({ 
        title: '',  
        start: '', 
        end: '',
      })

      {/*This function handles the change of the data in the form*/}

      const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({ 
            ...formData, 
            [name]: value
        })
      }

    {/*Log inside the Console of our Browser to check if the Data is correct*/}

      console.log('data from my form', formData)
  

    {/*Display Date via Click on, this is used here to use our own Modal
        handles the click to open and close mechanism */}

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

    {/*Getting the events form Backend, they will be stored inside the "events" constant, which we will load into our calendar UI*/}
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
            {/*This is our Modal with all the necessary imported data, which was defined before*/}
           <MyModal
            open = {open}
            handleClose={handleClose}
            myDate={selectedDate}
            formData={formData}
            handleChange={handleChange}
           />

            <h1></h1>
            {/*This is our calendar component which we imported. We will pass the "events" imported from the backend
            and also the function "handleOpen" which will be used to open the Modal for changing the data of the appointments
            */}
            <MyCalendar1 
                myEvents={events}
                dayClickAction = {handleOpen}
            />
        </div>
    )
}

export default Calendar1;

{/* */}