import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, styled } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useGetPropuestas } from "../../hooks/useGetPropuestas";
import sectores from "../../api/sectores.json";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976d2",
    color: theme.palette.common.white,
  },
}));

const headers = ["Propuesta", "Cliente", "Rubro", "Creación", "Ver"];

export const TablaPropuestas = ({ setPropuestaSelected }) => {
  const { propuestasState } = useGetPropuestas();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header, i) => (
              <StyledTableCell key={i}>{header}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {propuestasState.map((propuesta, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {propuesta.nombre}
              </TableCell>
              <TableCell align="left">{propuesta.cliente}</TableCell>
              <TableCell align="left">
                {sectores.find((sector) => sector.ID == propuesta.ID_Rubro)
                  ?.nombre || ""}
              </TableCell>
              <TableCell align="left">{propuesta.createdAt}</TableCell>
              <TableCell align="left">
                <IconButton
                  onClick={() => setPropuestaSelected(propuesta.ID)}
                  aria-label="delete"
                >
                  <VisibilityIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
