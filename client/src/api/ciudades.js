import axios from "axios";

export const getCiudades = async () => await axios.get("http://localhost:4000/ciudades");
export const generateCiudadPdf = async () => await axios.get("http://localhost:4000/ciudades/pdf");
export const getCiudadById = async (id) => await axios.get(`http://localhost:4000/ciudades/${id}`);
export const createCiudad = async (ciudad) => await axios.post("http://localhost:4000/ciudades", ciudad);
export const updateCiudad = async (id, ciudad) => await axios.patch(`http://localhost:4000/ciudades/${id}`, ciudad);
export const deleteCiudad = async (id) => await axios.delete(`http://localhost:4000/ciudades/${id}`);
