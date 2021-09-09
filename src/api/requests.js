import axios from 'axios'

const baseURL = 'http://api.github.com'

export const makeRequest = ({ url, method = 'get', data = {}, headers = {} }) => axios({
  url,
  method,
  data,
  baseURL,
  headers
})
