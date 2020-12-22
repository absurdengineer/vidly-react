import jwtDecode from 'jwt-decode'
import http from  './httpService'
import {apiUrl} from '../config.json'

const apiEndpoint = apiUrl + '/auth'

const login = async (user) => {
    const {data : jwt} =  await http.post(apiEndpoint, {
        email : user.username,
        password : user.password
    })
    localStorage.setItem('token',jwt)
}

const logout = () => {
    localStorage.removeItem('token')
}

const getCurrentUser = () => {
    try {
        const jwt = localStorage.getItem('token')
        return jwtDecode(jwt)
    } catch (error) {
        return null
    }
}

export default {
    login,
    logout,
    getCurrentUser

}