import axios from 'axios'


export const login = async (data) => await axios.post('http://localhost:4000/login', data).then(res => res.data).catch(err => err.response)
export const register = async (data) => await axios.post('/register', data)
export const profileReques = async () => await axios.get('http://localhost:4000/profile')
