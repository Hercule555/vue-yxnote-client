import request from "@/helpers/request"


const URL = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GET_INFO: '/auth'
}

export default {
  register({username, password}) {
    return request(URL.REGISTER, 'POST', {username, password})
  },
  login({username, password}) {
    return request(URL.LOGIN, 'POST', {username,password})
  },
  logout() {
    return request(URL.LOGOUT)
  },
  get_info() {
    return request(URL.GET_INFO)
  }


}