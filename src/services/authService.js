import jwtDecode from 'jwt-decode'
import http from  './httpService'
import {apiUrl} from '../config.json'

const apiEndpoint = apiUrl + '/auth'
const tokenKey = 'token'

const login = async (user) => {
    const {data : jwt} =  await http.post(apiEndpoint, {
        email : user.username,
        password : user.password
    })
    localStorage.setItem(tokenKey,jwt)
}

const logout = () => {
    localStorage.removeItem(tokenKey)
}

const getJwt = () => {
    return localStorage.getItem(tokenKey)
}

const getCurrentUser = () => {
    try {
        const jwt = localStorage.getItem(tokenKey)
        return jwtDecode(jwt)
    } catch (error) {
        return null
    }
}

export default {
    login,
    logout,
    getJwt,
    getCurrentUser
}