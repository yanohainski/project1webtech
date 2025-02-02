import * as React from 'react';
import TextField from '@mui/material/TextField';
import '../../App.css'

{/*A Textfield with all the needed inputs for our Login Page*/}

export default function MyTextFields(props) {
    const text = props
  return (

      <TextField 
        id="outlined-basic" 
        label= {text.prop} 
        variant="outlined" 
        className={"myForm"}
        />
  );
}
