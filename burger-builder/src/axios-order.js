import axios from 'axios';



const instance = axios.create({
    baseURL : 'https://react-my-burger-a7ae6.firebaseio.com/'
})

export default instance;