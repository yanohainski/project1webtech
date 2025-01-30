import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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

export default function MyModal({open, handleClose, myDate, formData, handleChange}) 
{

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