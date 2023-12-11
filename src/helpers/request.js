import axios from "axios"
import configBaseURL from "./config-baseURL"
import { Message } from "element-ui"


console.log(configBaseURL)

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = configBaseURL.baseURL
axios.defaults.withCredentials = true

export default function request(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type,
      validateStatus(status) {
        return (status >= 200 && status < 300) || status === 400
      }
    }
    if (type.toLowerCase() === 'get') {
      option.params = data
    } else {
      option.data = data
    }
    axios(option).then(res => {
      if (res.status === 200) {
        resolve(res.data)
      } else {
        reject(res.data)

        // console.log(error)
        console.log(res.data) 
        Message({
          type: 'error', 
          message: res.data.msg
        })
      }
    }).catch(err => {
      Message({
        type: 'eror',
        message: '网络异常'
      })

      console.log({ msg: '网络异常' })
      reject({ msg: '网络异常' })
    })

  })

}
