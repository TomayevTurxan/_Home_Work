import { getAllCategories } from "../../../services/requests/categoryRequest";
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Categories = () => {
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
      console.log(res);
    });
  }, []);
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories && categories.map((category,idx) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {category.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {category.name}
                </TableCell>
                <TableCell >{category.description}</TableCell>
                <TableCell >
                    <Button color="warning" variant="contained">
                          <Link style={{
                            textDecoration: "none",
                            color: "black"
                          }}  to={`/admin/CategoryDetail/${category.id}`}>Info</Link>
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default Categories