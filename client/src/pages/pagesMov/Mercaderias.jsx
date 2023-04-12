import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, Button, Hidden } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getMercaderias } from "../../feactures/mercaderias/mercaderias";
import { useDispatch, useSelector } from "react-redux";

const Mercaderias = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const mercaderias = useSelector((state) => state.mercaderias);
  
  
  useEffect(() => {
    dispatch(getMercaderias());
  }, []);
   
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 16,
      fontWeight: "bold",
      letterSpacing: 5,
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
      padding: 10,
      textAlign: "center", // Centrar en el medio horizontal
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 13,
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
    minHeight: "100vh",
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

  return (
    <CenteredHalfContainer>
      <Box
        alignItems="center"
        height="100%"
        overflow="hidden"
        justifyContent="center"
        maxWidth="md" // maxWidth="md"
        my={20}
      >
        <h1 className="text-center text-3xl mb-8 truncate">
          Registro Mercaderias
        </h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="justify">Codigo</StyledTableCell>
                <StyledTableCell align="justify">Marca</StyledTableCell>
                <StyledTableCell align="justify">Decripcion</StyledTableCell>
                <StyledTableCell align="justify">Precio Compra</StyledTableCell>
                <StyledTableCell align="justify">Precio Venta</StyledTableCell>
                <StyledTableCell align="justify">Impuesto</StyledTableCell>
                <StyledTableCell align="justify">Estado</StyledTableCell>
                <StyledTableCell align="justify"></StyledTableCell>
                <StyledTableCell align="justify"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mercaderias && mercaderias.map((row) => (
                console.log(row),
                <StyledTableRow key={row.Mer_id}>
                  <StyledTableCell align="justify">{row.Mer_id}</StyledTableCell>
                  <StyledTableCell align="justify">{row.Mar.descripcion}</StyledTableCell>
                  <StyledTableCell align="justify">{row.descripcion}</StyledTableCell>
                  <StyledTableCell align="justify">{row.preciocompra}</StyledTableCell>
                  <StyledTableCell align="justify">{row.precioventa}</StyledTableCell>
                  <StyledTableCell align="justify">{row.Mer_impuesto}</StyledTableCell>
                  <StyledTableCell align="justify">{row.estado}</StyledTableCell>

                  <StyledTableCell
                    onClick={() => {
                      navigate(`/edit/ciudades/${row.Ciu_id}`);
                    }}
                  >
                    <EditIcon color="info" className="cursor-pointer" />
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => {
                      deleteCiudades(row.Ciu_id);
                    }}
                  >
                    <DeleteIcon color="error" className="cursor-pointer" />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          variant="contained"
          color="primary"
          sx={{ mr: 1, marginTop: "20px" }}
        ></Button>
        <Button
          variant="contained"
          color="success"
          sx={{ mr: 1, marginTop: "20px" }}
        >
          {/* <PedidosExel /> */}
        </Button>
        <Link to="../new/ciudades" component={RouterLink} sx={{ display: 'contents' }}>
          <PostAddIcon color="primary" className="cursor-pointer w-20" style={{marginLeft:"20px", marginRight:"20px", marginTop:"20px"}}  />
        </Link>
        <Button
          variant="contained"
          color="inherit"
          style={{ position: "absolute", right: "390px", marginTop: "20px" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Volver
        </Button>
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

export default Mercaderias;
