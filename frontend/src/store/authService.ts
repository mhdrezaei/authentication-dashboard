import axios from "axios";
const API_URL = 'https://localhost:5000/api/users/'
type TuserData  ={
    email: string;
    password: string;
  }

const login = async (userData : TuserData) => {
    const response = await axios.post(API_URL + 'login',userData)
    if(response.data){
        localStorage.setItem('user' , JSON.stringify(response.data))
    }
    return response.data
}

const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    login,
    logout
}

export default authService;