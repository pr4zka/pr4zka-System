import axios from "axios";

export const getProveedores = async () => axios.get('http://localhost:4000/provedor');
export const createProveedor = async (proveedor) => axios.post('http://localhost:4000/provedor', proveedor);