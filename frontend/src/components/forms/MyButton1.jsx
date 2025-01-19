import * as React from 'react';
import Button from '@mui/material/Button';

export default function MyButton(props) {
    const text = props
  return (
   
      <Button variant="outlined" className='myButton'>
        {text.prop}
      </Button>
   
  );
}