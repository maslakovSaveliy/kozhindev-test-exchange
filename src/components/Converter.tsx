import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { convert } from "../utils/convert";
import { rule } from "../regularExpressions/validateRule";
import { CODES } from "../constants/valuteCodes";
import CurrencySelect from "./UI/CurrencySelect";

export interface CurrencyInputState {
  name: string;
  price: string;
}

enum LOCAL_STORAGE_CURRENCY_NAME {
  FROM = "CURRENCY_FROM_NAME",
  TO = "CURRENCY_TO_NAME",
}

const Converter: FC = () => {
  const [fromCurrency, setFromCurrency] = useState<CurrencyInputState>({
    name: localStorage.getItem(LOCAL_STORAGE_CURRENCY_NAME.FROM) || CODES.USD,
    price: "",
  });
  const [toCurrency, setToCurrency] = useState<CurrencyInputState>({
    name: localStorage.getItem(LOCAL_STORAGE_CURRENCY_NAME.TO) || CODES.RUB,
    price: "",
  });

  const phone = useMediaQuery("(max-width:600px)");

  const { currencies, error } = useAppSelector((state) => state);

  const handleChangeFromPrice = (inputValue: string) => {
    if (rule.test(inputValue) || inputValue === "") {
      const result = convert(
        inputValue,
        fromCurrency,
        toCurrency,
        currencies,
        "from"
      );
      setToCurrency({
        ...toCurrency,
        price: result == 0 ? "" : String(result?.toFixed(2)).replace(".", ","),
      });
      setFromCurrency({
        ...fromCurrency,
        price: inputValue,
      });
      if (result === Infinity) {
        setToCurrency({ ...fromCurrency, price: "" });
      }
    }
  };

  const handleChangeToPrice = (inputValue: string) => {
    if (rule.test(inputValue) || inputValue === "") {
      const result = convert(
        inputValue,
        fromCurrency,
        toCurrency,
        currencies,
        "to"
      );
      setToCurrency({
        ...toCurrency,
        price: inputValue,
      });
      setFromCurrency({
        ...fromCurrency,
        price: result == 0 ? "" : String(result.toFixed(2)).replace(".", ","),
      });
      if (result === Infinity) {
        setFromCurrency({ ...fromCurrency, price: "" });
      }
    }
  };

  const handleChangeFromName = (value: string) => {
    localStorage.setItem(LOCAL_STORAGE_CURRENCY_NAME.FROM, value);
    setFromCurrency({ ...fromCurrency, name: value });
  };

  const handleChangeToName = (value: string) => {
    localStorage.setItem(LOCAL_STORAGE_CURRENCY_NAME.TO, value);
    setToCurrency({ ...toCurrency, name: value });
  };

  useEffect(() => {
    handleChangeFromPrice(fromCurrency.price);
  }, [fromCurrency.name, currencies]);

  useEffect(() => {
    handleChangeToPrice(toCurrency.price);
  }, [toCurrency.name, currencies]);

  return (
    <Box margin={5}>
      <Typography variant="h4">Конвертер</Typography>
      <Divider />
      {error ? (
        <Typography color="red" variant="h5">
          {error}
        </Typography>
      ) : (
        <Box
          justifyContent="space-around"
          gap={2}
          sx={{
            display: "flex",
            flexDirection: `${phone ? `column` : `row`}`,
          }}
          marginTop={2}
        >
          <CurrencySelect
            currency={fromCurrency}
            handleChangePrice={handleChangeFromPrice}
            handleChangeName={handleChangeFromName}
          />
          <CurrencySelect
            currency={toCurrency}
            handleChangePrice={handleChangeToPrice}
            handleChangeName={handleChangeToName}
          />
        </Box>
      )}
    </Box>
  );
};

export default Converter;
