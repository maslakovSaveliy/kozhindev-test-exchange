import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { useAppSelector } from "../hooks/redux";
import { IRow } from "../models/IRow";

interface Props {
  rows: IRow[];
}

const CurrenciesList: FC<Props> = ({ rows }) => {
  const { isLoading, error } = useAppSelector((state) => state);

  if (isLoading) return <CircularProgress sx={{ color: "grey" }} size={200} />;
  if (error)
    return (
      <Typography variant="h5" color="red">
        Ooops...
      </Typography>
    );
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>CODE</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">to RUB</TableCell>
            <TableCell align="right">to USD</TableCell>
            <TableCell align="right">to EUR</TableCell>
            <TableCell align="right">to CNY</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.code}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.rubCourse}</TableCell>
              <TableCell align="right">{row.usdCourse}</TableCell>
              <TableCell align="right">{row.eurCourse}</TableCell>
              <TableCell align="right">{row.cnyCourse}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CurrenciesList;
