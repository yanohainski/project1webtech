import '../App.css'
import { Box } from '@mui/material'
import MyTextFields from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton1'
import { useNavigate } from 'react-router'

{/*This is our Login component, that will be loaded into our App.
    here we defined the Login form, with the needed fields and buttons.
    We import the needed parts from Material UI, like Box, and also our components MyTextFields, MyPassField and MyButton.
    */}

const Login = () => {

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/calendar')
    }


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
                    <MyButton prop={'Login'} onClick={handleLogin} />
                </Box>

            </Box>
        </div>
    )
}

export default Login;