import axios from 'axios'

const request = axios.create({
    // baseURL: 'http://localhost:4000/api/v1/',
    baseURL:'https://kliqr-proxy-service.herokuapp.com/',
    headers: {
        token: 'YXJxZXRnbWVybGtwMzIjNTQjJUA='
    }
})

export default request