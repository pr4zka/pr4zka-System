import { Form, Formik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@mui/material";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../../feactures/ciudades/ciudadesSlice";

export default function CiudadesForm() {
  const dispatch = useDispatch();
  // const {ciudad} = useSelector(state => state.ciudades)

  const [ciudad, setCiudad] = useState({
    Ciu_descripcion: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        // const city = await getCiudades(params.id);
        setCiudad({
          Ciu_descripcion: city.Ciu_descripcion,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <Box noValidate autoComplete="off">
      <ToastContainer />
      <Formik
        initialValues={ciudad}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateCiudades(params.id, values);
            // showNotification.success("Ciudad actualizada");
          } else {
            dispatch(create(values));
          }
          navigate("dashboard/ciudades");
          setCiudad({
            Ciud_id: "",
            Ciu_descripcion: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-100 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Editar Ciudad" : "Crear Ciudad"}
            </h1>
            <TextField
              label="Ciudad"
              sx={{ m: 1, width: "40ch" }}
              variant="outlined"
              id="outlined-basic"
              color="warning"
              name="Ciu_descripcion"
              required
              onChange={handleChange}
              value={values.Ciu_descripcion}
            />
            <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                sx={{
                    backgroundColor: "#4B5563",
                    color: "#F3F4F6",
                    width: "100%",
                    marginTop: "4px",
                    borderRadius: "0.375rem",
                    "&:hover": {
                    backgroundColor: "#1F2937",
                    },
                }}
                >
                {isSubmitting ? "Registrando..." : "Registrar"}
                </Button>
                <Button
                type="submit"
                sx={{
                    backgroundColor: "#4B5563",
                    color: "#F3F4F6",
                    width: "100%",
                    marginTop: "4px",
                    borderRadius: "0.375rem",
                    "&:hover": {
                    backgroundColor: "#1F2937",
                    },
                }}
                onClick={() => {
                    navigate("/ciudades");
                }}
                >
                Volver
                </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
