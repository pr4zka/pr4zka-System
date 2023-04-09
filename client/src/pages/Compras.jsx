import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
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
import { Box, Container, Button, Hidden, Link } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Compras(){
    //  console.log(compras)
   const navigate = useNavigate();

   useEffect(() => {
   }, [])

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
    padding: "50px"
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
        <h1 className="text-center text-3xl mb-8 truncate">
          Registro Compras
        </h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="justify">Codigo</StyledTableCell>
                <StyledTableCell align="justify">Pedido</StyledTableCell>
                <StyledTableCell align="justify">Proveedor</StyledTableCell>
                   <StyledTableCell align="justify">Usuario</StyledTableCell>
                <StyledTableCell align="justify">Sucursal</StyledTableCell>
                <StyledTableCell align="justify">Fecha</StyledTableCell>
                <StyledTableCell align="justify">Tipo Comprobante</StyledTableCell>
                <StyledTableCell align="justify">Nro Factura</StyledTableCell>
                <StyledTableCell align="justify">Observacion</StyledTableCell>
                <StyledTableCell align="justify">Total</StyledTableCell>
                <StyledTableCell align="justify">Total Exenta</StyledTableCell>
                <StyledTableCell align="justify">Total iva5</StyledTableCell>
                <StyledTableCell align="justify">Total iva10</StyledTableCell>
                <StyledTableCell align="justify">Estado</StyledTableCell>
                <StyledTableCell align="justify"></StyledTableCell>
                <StyledTableCell align="justify"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {compras.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="justify">{row.id}</StyledTableCell>
                  <StyledTableCell align="justify">{row.pedido}</StyledTableCell>
                  <StyledTableCell align="justify">{row.proveedor}</StyledTableCell>
                   <StyledTableCell align="justify">{row.usuario}</StyledTableCell>
                  <StyledTableCell align="justify">{row.sucursal}</StyledTableCell>
                  <StyledTableCell align="justify">{row.fecha}</StyledTableCell>
                  <StyledTableCell align="justify">{row.tipoComprobante}</StyledTableCell>
                  <StyledTableCell align="justify">{row.numeroFactura}</StyledTableCell>
                  <StyledTableCell align="justify">{row.observacion}</StyledTableCell>
                  <StyledTableCell align="justify">{row.total}</StyledTableCell>
                  <StyledTableCell align="justify">{row.totalExenta}</StyledTableCell>
                  <StyledTableCell align="justify">{row.totaliva5}</StyledTableCell>
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
        >
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ mr: 1, marginTop: "20px", marginLeft: "20px" }}
        >
        </Button>
        <Link to="../new/compras" component={RouterLink} sx={{ display: 'contents' }}>
          <PostAddIcon color="primary" className="cursor-pointer w-20" style={{marginLeft:"20px", marginRight:"20px", marginTop:"20px"}}  />
        </Link>
        <Button
          variant="contained"
          color="inherit"
          onClick={() => {
            navigate("/");
          }}
          style={{marginTop:"20px"}}
        >

          Volver
        </Button>
      </Box>
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          // rowsPerPage={rowsPerPage}
          // page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Box>
    </CenteredHalfContainer>
  );
};

    