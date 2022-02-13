import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "Car Number" },
  { field: "Manufacturer" },
  { field: "Year" },
  { field: "Front Tire" },
  { field: "Back Tire" },
  { field: "Type" },
  { field: "Safety Group" },
  { field: "CO2 Group" },
];

const zihum = [
  { num: 1, color: "#005718" },
  { num: 2, color: "#017020" },
  { num: 3, color: "#008726" },
  { num: 4, color: "#00992b" },
  { num: 5, color: "#00b031" },
  { num: 6, color: "#02cc3a" },
  { num: 7, color: "#02e641" },
  { num: 8, color: "#e6e202" },
  { num: 9, color: "#e6a902" },
  { num: 10, color: "#e69602" },
  { num: 11, color: "#e68702" },
  { num: 12, color: "#e67402" },
  { num: 13, color: "#e65d02" },
  { num: 14, color: "#e63f02" },
  { num: 14, color: "#e62802" },
];

export const DataTable = ({ data }: any) => {
  return (
    <div>
      {data?._id && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((col) => (
                  <TableCell key={col.field}>{col.field}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                key={data._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.mispar_rechev}
                </TableCell>
                <TableCell align="center">
                  {data.tozeret_nm ? data.tozeret_nm : "-"}
                </TableCell>
                <TableCell align="center">
                  {data.shnat_yitzur ? data.shnat_yitzur : "-"}
                </TableCell>
                <TableCell align="center">
                  {data.zmig_kidmi ? data.zmig_kidmi : "-"}
                </TableCell>
                <TableCell align="center">
                  {data.zmig_ahori ? data.zmig_ahori : "-"}
                </TableCell>
                <TableCell align="center">
                  {data.sug_delek_nm ? data.sug_delek_nm : "-"}
                </TableCell>
                <TableCell align="center">
                  {data.ramat_eivzur_betihuty
                    ? data.ramat_eivzur_betihuty
                    : "-"}
                </TableCell>
                {zihum.map((z) => {
                  if (z.num === data.kvutzat_zihum) {
                    return (
                      <TableCell
                        key={data._id}
                        align="center"
                        style={{ backgroundColor: z.color ? z.color : "#fff" }}
                      >
                        {z.num ? z.num : "-"}
                      </TableCell>
                    );
                  }
                })}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
