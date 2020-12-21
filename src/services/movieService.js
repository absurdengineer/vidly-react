import _ from 'lodash'
import http from './httpService'
import {apiUrl} from '../config.json'


export function getMovies() {
    return http.get(`${apiUrl}/movies`)
}

export function getMovie(id) {
    return http.get(`${apiUrl}/movies/${id}`)
}

export function saveMovie(movie){
    if(movie.id) {
        const movieData = _.pick(movie,['title','dailyrentalrate','numberinstock','genre_id'])
        return http.put(`${apiUrl}/movies/${movie.id}`, movieData)
    }
    return http.post(`${apiUrl}/movies/`, movie)
}

export function deleteMovie(id) {
    return http.delete(`${apiUrl}/movies/${id}`)
}
