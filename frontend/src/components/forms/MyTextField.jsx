import * as React from 'react';
import TextField from '@mui/material/TextField';
import '../../App.css'

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
