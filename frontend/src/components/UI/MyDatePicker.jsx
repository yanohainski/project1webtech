import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/de';


export default function MyDateTimePicker({label, value, name, onChange}) 
{
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker 
                sx={{width: '100%'}}
                inputFormat="DD-MM-YYYY HH:mm"
                value = {value}
                onChange={onChange}
                name={name}
                label={label}
         />
      </DemoContainer>
    </LocalizationProvider>
  );
}
