import http from './httpService'
const endPoint = 'http://127.0.0.1:8080/api/movies'

export function getMovies() {
    return http.get(`${endPoint}`)
}

export function deleteMovie(id) {
    return http.delete(`${endPoint}/${id}`)
}
