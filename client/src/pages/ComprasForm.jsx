import { Form, Formik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import * as React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { Grid } from "@mui/material";

export default function ComprasForm() {
  const params = useParams();
  const navigate = useNavigate();

  const CenteredHalfContainer = styled(Container)({
    maxWidth: "100%",
    // width: "50%",
    display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center"
    // padding: "50px",
  });

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const ped = await getCompraById(params.id);
        console.log("pedidos", ped);
        setCompra({
          Suc_Id: ped.Suc.Suc_id,
          Us_id: ped.Us_id,
          Ped_Id: ped.Ped_Id,
          fecha: new Date(ped.fecha).toLocaleDateString("en-CA", {
            timeZone: "America/Asuncion",
          }),
          tip_comprobante: ped.tip_comprobante,
          nro_factura: ped.nro_factura,
          observacion: ped.observacion,
          total: ped.total,
          total_exenta: ped.totalexenta,
          totalIva5: ped.titaliva5,
          totalIva10: ped.totaliva10,
          estado: ped.estado,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <CenteredHalfContainer className="bg-red-600 grid gap-4">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <ToastContainer />
        <Formik
          initialValues={""}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updateCiudades(params.id, values);
              showNotification.success("Ciudad actualizada");
            } else {
              await createCiudades(values);
            }
            navigate("/ciudades");
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
                {params.id ? "Editar Compra" : "Crear Compras"}
              </h1>
              <div className="w-auto" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                <TextField
                  label="Sucursal"
                  sx={{ m: 1, width: "40ch" }}
                  variant="outlined"
                  id="outlined-basic"
                  color="warning"
                  name="Ciu_descripcion"
                  required
                  onChange={handleChange}
                />
                <TextField
                  label="Pedido"
                  sx={{ m: 1, width: "40ch" }}
                  variant="outlined"
                  id="outlined-basic"
                  color="warning"
                  name="Ciu_descripcion"
                  required
                  onChange={handleChange}
                />
                <TextField
                  label="Usuario"
                  sx={{ m: 1, width: "40ch" }}
                  variant="outlined"
                  id="outlined-basic"
                  color="warning"
                  name="Ciu_descripcion"
                  required
                  onChange={handleChange}
                />
                <TextField
                  label="Fecha"
                  sx={{ m: 1, width: "40ch" }}
                  variant="outlined"
                  id="outlined-basic"
                  color="warning"
                  name="Ciu_descripcion"
                  required
                  onChange={handleChange}
                />
                <InputLabel id="demo-simple-select-label">
                  Tipo Comprobante
                </InputLabel>
                <Select
                  sx={{ m: 1, width: "40ch" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={handleChange}
                >
                  <MenuItem value="Factura">CONTADO</MenuItem>
                </Select>
                <TextField
                  label="Nro Factura"
                  sx={{ m: 1, width: "40ch" }}
                  variant="outlined"
                  id="outlined-basic"
                  color="warning"
                  name="Ciu_descripcion"
                  required
                  onChange={handleChange}
                />
                <TextField
                  label="Total"
                  sx={{ m: 1, width: "40ch" }}
                  variant="outlined"
                  id="outlined-basic"
                  color="warning"
                  name="Ciu_descripcion"
                  required
                  onChange={handleChange}
                />
                <TextField
                  label="Exenta"
                  sx={{ m: 1, width: "40ch" }}
                  variant="outlined"
                  id="outlined-basic"
                  color="warning"
                  name="Ciu_descripcion"
                  required
                  onChange={handleChange}
                />
                <TextField
                  label="IVA 5"
                  sx={{ m: 1, width: "40ch" }}
                  variant="outlined"
                  id="outlined-basic"
                  color="warning"
                  name="Ciu_descripcion"
                  required
                  onChange={handleChange}
                />
                <TextField
                  label="IVA 10"
                  sx={{ m: 1, width: "40ch" }}
                  variant="outlined"
                  id="outlined-basic"
                  color="warning"
                  name="Ciu_descripcion"
                  required
                  onChange={handleChange}
                />
                <TextField
                  label="Estado"
                  sx={{ m: 1, width: "40ch" }}
                  variant="outlined"
                  id="outlined-basic"
                  color="warning"
                  name="Ciu_descripcion"
                  required
                  onChange={handleChange}
                />
              </div>
              <button
                style={{
                  backgroundColor: "#4B5563",
                  color: "#F3F4F6",
                  width: "50%",
                  marginTop: "4px",
                  borderRadius: "0.375rem",
                  ":hover": {
                    backgroundColor: "#1F2937",
                  },
                }}
              >
                {isSubmitting ? "Registrando..." : "Registrar"}
              </button>
              <button
                style={{
                  backgroundColor: "#4B5563",
                  color: "#F3F4F6",
                  width: "50%",
                  marginTop: "4px",
                  borderRadius: "0.375rem",
                  ":hover": {
                    backgroundColor: "#1F2937",
                  },
                }}
                onClick={() => {
                  navigate("/ciudades");
                }}
              ></button>

              {/* <Button
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
              </Button> */}
            </Form>
          )}
        </Formik>
      </Grid>
    </CenteredHalfContainer>
  );
}
