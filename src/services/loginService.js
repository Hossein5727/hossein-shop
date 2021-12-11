import http from './httpServices'

export function loginService(data) {
    return http.post("/user/login", data)
}