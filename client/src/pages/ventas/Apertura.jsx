import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { useEffect } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PostAddIcon from "@mui/icons-material/PostAdd";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Container, Button, Hidden, Link, TablePagination } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";

export default function Apertura() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const compras = useSelector((state) => state.compras);

  useEffect(() => {

  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 10,
      fontWeight: "bold",
      letterSpacing: 1,
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
      padding: 10,
      textAlign: "center", // Centrar en el medio horizontal
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 11,
    },
  }));

  const CenteredHalfContainer = styled(Container)({
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    padding: "50px",
  });

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const redirectTo = (url) => {
    // redirect sin navigate;
    return <Link href={url} />;
  };

  return (
    <CenteredHalfContainer>
      <Box>
        <h1 className="text-center text-3xl mb-8 truncate">Apertura y Cierre de caja</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="justify">Caja</StyledTableCell>
                <StyledTableCell align="justify">Fecha</StyledTableCell>
                <StyledTableCell align="justify">Usuario</StyledTableCell>
                <StyledTableCell align="justify">Monto Inicial</StyledTableCell>
                <StyledTableCell align="justify">Monto Actual</StyledTableCell>
                <StyledTableCell align="justify">Monto Tarjeta</StyledTableCell>
                <StyledTableCell align="justify">Monto Cheque</StyledTableCell>
                <StyledTableCell align="justify">Monto Efectivo</StyledTableCell>
                <StyledTableCell align="justify">Cierre Fecha</StyledTableCell>
                <StyledTableCell align="justify"></StyledTableCell>
                <StyledTableCell align="justify"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {compras.map((row) => (
                <StyledTableRow key={row.Com_id}>
                  <StyledTableCell align="justify">{row.Com_id}</StyledTableCell>
                  <StyledTableCell align="justify">{row.Ped.Ped_Id}</StyledTableCell>
                  <StyledTableCell align="justify">{row.Ped.Pro_Id}</StyledTableCell>
                   <StyledTableCell align="justify">{row.U.usuario}</StyledTableCell>
                  <StyledTableCell align="justify">{row.U.Suc_id}</StyledTableCell>
                  <StyledTableCell align="justify">{new Date(row.fecha).toLocaleDateString("es-Es", {
                    timeZone: "UTC",
                  })}</StyledTableCell>
                  <StyledTableCell align="justify">{row.tip_comprobante}</StyledTableCell>
                  <StyledTableCell align="justify">{row.nro_factura}</StyledTableCell>
                  <StyledTableCell align="justify">{row.observacion}</StyledTableCell>
                  <StyledTableCell align="justify">{row.total}</StyledTableCell>
                  <StyledTableCell align="justify">{row.totalexenta}</StyledTableCell>
                  <StyledTableCell align="justify">{row.titaliva5}</StyledTableCell>
                  <StyledTableCell align="justify">{row.totaliva10}</StyledTableCell>
                  <StyledTableCell align="justify">{row.estado}</StyledTableCell>
                  <StyledTableCell onClick={() => {
                      navigate(`/edit/compras/${row.id}`);
                    }}
                  >
                    <EditIcon color="info" className="cursor-pointer" />
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => {
                      deletePedido(row.id);
                    }}
                  >
                    <DeleteIcon color="error" className="cursor-pointer" />
                  </StyledTableCell>
                </StyledTableRow>
              ))} */}
            </TableBody>
            
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ mr: 1, marginTop: "20px", marginLeft: "20px" }}
          ></Button>
          <Button
            variant="contained"
            color="success"
            sx={{ mr: 1, marginTop: "20px", marginLeft: "20px" }}
          ></Button>
          <Link
            to="../new/compras"
            component={RouterLink}
            sx={{ display: "contents" }}
          >
            <PostAddIcon
              color="primary"
              className="cursor-pointer w-20"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                marginTop: "20px",
              }}
            />
          </Link>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => {
              navigate("/");
            }}
            style={{ marginTop: "20px" }}
          >
            Volver
          </Button>
        </Box>
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={compras.length}
        /> */}
      </Box>
    </CenteredHalfContainer>
  );
}
