import * as React from 'react';
import Button from '@mui/material/Button';

{/*Button component for our Login page*/}

export default function MyButton(props, onClick) {
    const text = props
  return (
   
      <Button variant="outlined" className='myButton'>
        {text.prop}
      </Button>
   
  );
}