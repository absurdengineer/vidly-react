import http from  './httpService'
import {apiUrl} from '../config.json'

const apiEndpoint = apiUrl + '/auth'

export const login = (user) => {
    return http.post(apiEndpoint, {
        email : user.username,
        password : user.password
    })
}
