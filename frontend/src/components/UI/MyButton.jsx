import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({label, type}) {
  return (
    <div>
    <Stack spacing={2} direction="row">
      <Button variant="contained" type={type} >{label}</Button>
    </Stack>
    </div>
  );
}
