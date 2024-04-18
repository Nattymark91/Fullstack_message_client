import {$authHost, $host} from "./index";
import {jwtDecode as jwt_decode} from "jwt-decode";

export const registration = async (email, firstname, lastname, password) => {
    try {
        const {data} = await $host.post('api/users/registration', {email, firstname, lastname, password})
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    } catch (error) {
        alert (error.response.data.message)
    } 
}

export const login = async (email, password) => {
    try {
        const {data} = await $host.post('api/users/login', {email, password})
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    } catch (error) {
        alert (error.response.data.message)
    }  
}

export const check = async () => {
    try {
        const {data} = await $authHost.get('api/users/auth' )
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    } catch (error) {
        return
    }
}