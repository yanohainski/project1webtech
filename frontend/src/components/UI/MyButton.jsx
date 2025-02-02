import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

{/*This is our Button component, that will be loaded into our Modal
  we used a button from material UI, and styled it with the variant "contained"
  .*/}

export default function BasicButtons({label, type}) {
  return (
    <div>
    <Stack spacing={2} direction="row">
      <Button variant="contained" type={type} >{label}
        


      </Button>
    </Stack>
    </div>
  );
}
