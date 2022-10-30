import axios from "axios";
import { cookies } from 'react-cookie';


export const endpoints = {
    "users": "/Users/",
	"oauth2-info":  "/oauth2-info/",
    "login": "/o/token/",
    "current-user": "/Users/current-user/",
    "signup": "/Users/",
    "sanpham": "/SanPhams"
}

export const authApi = () => {
    return axios.create({
        baseURL: "http://localhost:8000/",
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    })
}

export default axios.create({
    baseURL: "http://127.0.0.1:8000/"
})
