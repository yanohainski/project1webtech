import * as React from 'react';
import TextField from '@mui/material/TextField';

{/* A Textfield with all the needed inputs to display.*/}

export default function MyTextFields({label, value, name, onChange}) {
  return (
   <div>
      <TextField 
            id="standard-basic" 
            variant="standard" 
            label={label}
            value={value}
            onChange={onChange} 
            name={name}
            fullWidth
            />
    </div>
  );
}