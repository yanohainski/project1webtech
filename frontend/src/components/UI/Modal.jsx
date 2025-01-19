import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MyDateTimePicker from './MyDatePicker';
import MyTextFields from './MyTextform';
import BasicButtons from './MyButton';
import 'dayjs/locale/de'

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

export default function MyModal({open, handleClose, myDate, formData}) 
{
   
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

            <forms>
                <Box sx={{marginBottom: '20px'}}>   
                    <MyTextFields 
                        label="Title"
                        name="title"
                    
                 
                    />
                </Box>
        
                <Box sx={{marginBottom: '20px'}}>   
                    <MyDateTimePicker
                   label="Start"
                   name = "start"
                  

                    />
                </Box>

                <Box sx={{marginBottom: '20px'}}>   
                    <MyDateTimePicker
                     label="End"
                     name= "end"
               
                    />
                </Box>

                <Box sx={{marginBottom: '20px'}}>   
                    <BasicButtons
                        label="Save"
                        type = "submit"
                        
                   
                    />
                </Box>

            </forms>
            
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}