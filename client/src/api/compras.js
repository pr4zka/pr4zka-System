import axios from 'axios';


export const getCompras = () =>  axios.get('http://localhost:4000/compras');
export const createComrpas = () => axios.post('http://localhost:4000/compras');
export const updateCompras = () => axios.put('http://localhost:4000/compras');
export const deleteCompras = () => axios.delete('http://localhost:4000/compras');
