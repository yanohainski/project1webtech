import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MyDateTimePicker from './MyDatePicker';
import MyTextFields from './MyTextform';
import BasicButtons from './MyButton';
import 'dayjs/locale/de'
import AxiosInstance from '../calendar_components/Axios';
import daysjs from 'dayjs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

{/*This is our Modal, that will be loaded into Calendar1
  first we defined some constants, like style, that will be used to style our Modal
  */}

export default function MyModal({open, handleClose, myDate, formData, handleChange}) 
{

  {/*Here the Data gets handled, and with the AxiosInstance we defined in another file, we can send the data to the backend
    we also log the data in the console to check if the data is correct and refresh the window after the data is send
  */}

  const submission =(event) => {
    event.preventDefault()

    const StartDate = daysjs(formData.start["$d"]).format('YYYY-MM-DDTHH:mm')
    const EndDate = daysjs(formData.end["$d"]).format('YYYY-MM-DDTHH:mm')

    AxiosInstance.post('appointments/',{
      title: formData.title,
      start: StartDate,
      end: EndDate
    })
    .then((res) => {
      console.log(res)
      window.location.reload()
    })
  
  }
   

  {/*Here the actual Component is build, with the Modal from Material UI, changed to our design. 
    Inside the Modal we have a Box, with a Typography, that shows the selected Date, and a form, that will be used to send the data to the backend
    We imported other of our own components, like MyTextFields, MyDateTimePicker and BasicButtons which are defined in other files
    We use this components to push the data to the "formData" constant.
  */}

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}

        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Selected {myDate}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

            <form onSubmit ={submission}>
                <Box sx={{marginBottom: '20px'}}>   
                    <MyTextFields 
                        label="Title"
                        name="title" 
                        value = {formData.title}
                        onChange = {handleChange}
                    />
                </Box>
        
                <Box sx={{marginBottom: '20px'}}>   
                    <MyDateTimePicker
                   label="Start Date"
                   name = "start"
                   value={formData.start}
                   onChange = {handleChange}
                    />
                </Box>

                <Box sx={{marginBottom: '20px'}}>   
                    <MyDateTimePicker
                     label="End Date"
                     name= "end"
                     value={formData.end}
                     onChange = {handleChange}
                    />
                </Box>

                <Box sx={{marginBottom: '20px'}}>   
                    <BasicButtons
                        label = {"Submit"}
                        type = {"submit"}
                    />
                </Box>

            </form>
            
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}