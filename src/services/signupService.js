import http from './httpServices'

export function signupService(data) {
    return http.post("/user/register", data)
}