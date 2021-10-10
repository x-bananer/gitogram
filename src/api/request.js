import axios from 'axios'
const baseURL = 'https://api.github.com'

export const makeRequest = ({
  url, method = 'get', data = {}, withBaseURL = true, headers = {}
}) => axios({
  url,
  method,
  data,
  baseURL: withBaseURL ? baseURL : '',
  headers: {
    Authorization: `token ${localStorage.getItem('token')}`,
    ...headers
  }
})
