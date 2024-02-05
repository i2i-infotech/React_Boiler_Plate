import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from "@mui/material";

const SimpleTable = () => {
  const rows = [
    { id: 1, name: "John Doe", age: 25, city: "New York", avatar: "J" },
    { id: 2, name: "Jane Doe", age: 30, city: "Los Angeles", avatar: "J" },
    { id: 3, name: "Bob Smith", age: 22, city: "Chicago", avatar: "B" },
    { id: 3, name: "Bob Smith", age: 22, city: "Chicago", avatar: "B" },
    { id: 3, name: "Bob Smith", age: 22, city: "Chicago", avatar: "B" },
  ];
  const tableContainerStyle = {
    maxHeight: "300px",
    overflowY: "auto",
    minWidth: "500px",
  };
  return (
    <TableContainer component={Paper} style={tableContainerStyle}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Avatar>{row.avatar}</Avatar>
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
