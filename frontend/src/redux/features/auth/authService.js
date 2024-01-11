import axios from "axios"



const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/users/`;

// registerUser\

const register = async(userData)=>{
    const responce = await axios.post(API_URL + "register", userData,{
        withCredentials:true,
    })
    return responce.data
}

const registerC = async(userData)=>{
    const responce = await axios.post(API_URL + "registerC", userData,{
        withCredentials:true,
    })
    return responce.data
}

// loginUser\

const login = async(userData)=>{
    const responce = await axios.post(API_URL + "login", userData,)
    return responce.data
}
// logout user
const logout = async()=>{
    const responce = await axios.get(API_URL + "logout")
    return responce.data.message;
}

// Getlogin Status
const getLoginStatus = async()=>{
    const responce = await axios.get(API_URL + "getLoginStatus")
    return responce.data;
}

// Getuser
const getUser = async()=>{
    const responce = await axios.get(API_URL + "getUser")
    return responce.data;
}

// Update User
const updateUser = async(userData)=>{
    const responce = await axios.patch(API_URL + "updateUser",userData)
    return responce.data;
}

// Update User Photo
const updatePhoto = async(userData)=>{
    const responce = await axios.patch(API_URL + "updatePhoto",userData)
    return responce.data;
}

const authService= {
    register,
    registerC,
    login,
    logout,
    getLoginStatus,
    getUser,
    updateUser,
    updatePhoto
}
export default authService;