import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Container,
  Paper,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@mui/material";
import axios from "axios";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.grey[200],
    paddingTop: theme.spacing(5),
    height: "100vh",
    width: "100vw",
  },
}));
const Table_comp = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(5);
  const loadUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
    console.log("Data", res.data);
  };
  const onChangeNextPage = (event, nextPage) => {
    setPage(nextPage);
  };
  const onRowsPerPageChange = (event) => {
    setRowPerPage(event.target.value);
  };
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item sm={12}>
            <Typography variant="h2">Hello Tables</Typography>
            <Paper component={Box} className={classes.sidebar}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableCell>NAME</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Company</TableCell>
                    <TableCell>Address</TableCell>
                  </TableHead>
                  <TableBody>
                    {users
                      .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
                      .map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.phone}</TableCell>
                          <TableCell>{item.company.name}</TableCell>
                          <TableCell>{item.address.street}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 15, 20, 25, 50]}
                  count={users.length}
                  rowsPerPage={rowPerPage}
                  page={page}
                  onPageChange={onChangeNextPage}
                  onRowsPerPageChange={onRowsPerPageChange}
                />
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Table_comp;
