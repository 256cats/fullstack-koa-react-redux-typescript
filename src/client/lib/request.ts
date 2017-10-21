import axios from 'axios'
import { DEFAULT_REQUEST_TIMEOUT } from '../constants'
export function post(url: string, data: any) {
  return axios({
    url,
    data,
    timeout: DEFAULT_REQUEST_TIMEOUT,
    method: 'post',
    responseType: 'json'
  })
}
