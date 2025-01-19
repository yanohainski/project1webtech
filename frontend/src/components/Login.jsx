import '../App.css'
import { Box } from '@mui/material'
import MyTextFields from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton1'

const Login = () => {
    return (
        <div className={'myBackground'}>
           <Box className={'witheBox'}>

                <Box className={'itemBox'}>
                    <Box className={'title'}> 
                        Login for Calendar
                        </Box>
                </Box>

                <Box className={'itemBox'}>
                  <MyTextFields prop={'Username'} />
                </Box>

                <Box className={'itemBox'}>
                     <MyPassField prop={'Password'} />
                </Box>

                <Box className={'itemBox'}>
                    <MyButton prop={'Login'} />
                </Box>

            </Box>
        </div>
    )
}

export default Login;