import http from  './httpService'
import {apiUrl} from '../config.json'

const apiEndpoint = apiUrl + '/users'

export const register = async (user) => {
    const {headers} = await http.post(apiEndpoint,{
        email : user.username,
        name : user.name,
        password : user.password
    })
    localStorage.setItem('token',headers['x-auth-token'])
}