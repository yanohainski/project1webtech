import axios from 'axios'

{/*Setting up a Axios instance for connecting front- and backend. Here we set up the URL of the backend and also the type of data we recieve and send*/}

const myBaseUrl = 'http://127.0.0.1:8000/'
const AxiosInstance = axios.create({

    baseURL: myBaseUrl,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json"
    }
});

export default AxiosInstance