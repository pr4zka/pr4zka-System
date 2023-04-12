import axios from "axios";

export const getall = () => axios.get('http://localhost:4000/mercaderias');
export const create = () => axios.post('http://localhost:4000/mercaderias');