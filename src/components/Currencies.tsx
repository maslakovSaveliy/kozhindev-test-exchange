import { Box, Button, TextField } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { useSortedAndSearched } from "../hooks/useSortedAndSearched";
import { IRow } from "../models/IRow";
import { createRow } from "../utils/createRow";
import CurrenciesList from "./CurrenciesList";
import SortSelect from "./UI/SortSelect";

const Currencies: FC = () => {
  const { currencies } = useAppSelector((state) => state);

  const [rows, setRows] = useState<IRow[]>([]);

  const [limit, setLimit] = useState<boolean>(true);

  const [sortMethod, setSortMethod] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const res: IRow[] = currencies.map((item) => {
      return createRow(item, currencies);
    });
    setRows(res);
  }, [currencies, limit]);

  const sortedAndSearched = useSortedAndSearched(
    rows,
    sortMethod,
    query,
    limit
  );
  return (
    <>
      <Box display="flex" alignSelf="flex-start" marginBottom={1} gap={2}>
        <SortSelect sortMethod={sortMethod} setSortMethod={setSortMethod} />
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "rgb(128,128,128)",
              },
            },
          }}
          placeholder="Поиск..."
          size="small"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>
      <CurrenciesList rows={sortedAndSearched} />
      <Button
        sx={{
          margin: "7px",
          backgroundColor: "grey",
          "&:hover": {
            backgroundColor: "rgb(167, 167, 167)",
          },
        }}
        variant="contained"
        size="large"
        onClick={() => setLimit(!limit)}
      >
        {limit ? "Показать" : "Скрыть"}
      </Button>
    </>
  );
};

export default Currencies;
