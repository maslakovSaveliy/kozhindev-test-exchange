import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Skeleton,
  TextField,
} from "@mui/material";
import React, { ChangeEvent, FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import { CurrencyInputState } from "../Converter";

interface Props {
  currency: CurrencyInputState;
  handleChangePrice: (event: string) => void;
  handleChangeName: (value: string) => void;
}

const CurrencySelect: FC<Props> = ({
  currency,
  handleChangePrice,
  handleChangeName,
}) => {
  const { currencies, isLoading } = useAppSelector((state) => state);
  return (
    <Box component="form" display="flex" flexDirection="column" gap={1}>
      <FormControl
        fullWidth
        margin="none"
        size="small"
        sx={{
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "rgb(128,128,128)",
            },
          },
        }}
      >
        {isLoading ? (
          <Skeleton width="fullWidth" height="40px" />
        ) : (
          <>
            <InputLabel
              sx={{
                "&.Mui-focused ": {
                  color: "rgb(128,128,128)",
                },
              }}
            >
              Valute
            </InputLabel>
            <Select
              value={currency.name}
              label="Valute"
              onChange={(event: SelectChangeEvent) =>
                handleChangeName(event.target.value)
              }
            >
              {currencies.map((item) => (
                <MenuItem key={item.ID} value={item.CharCode}>
                  {item.CharCode}
                </MenuItem>
              ))}
            </Select>
          </>
        )}
      </FormControl>
      {isLoading ? (
        <Skeleton>
          <TextField variant="outlined" size="small" />
        </Skeleton>
      ) : (
        <TextField
          placeholder="0"
          variant="outlined"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "rgb(128,128,128)",
              },
            },
          }}
          value={currency.price}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChangePrice(event.target.value)
          }
        />
      )}
    </Box>
  );
};

export default CurrencySelect;
