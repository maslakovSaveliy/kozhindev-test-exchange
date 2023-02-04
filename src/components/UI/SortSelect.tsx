import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { Dispatch, FC } from "react";

interface Props {
  sortMethod: string;
  setSortMethod: Dispatch<React.SetStateAction<string>>;
}

const SortSelect: FC<Props> = ({ sortMethod, setSortMethod }) => {
  return (
    <FormControl
      sx={{
        width: "200px",
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "rgb(128,128,128)",
          },
        },
      }}
      size="small"
    >
      <InputLabel
        sx={{
          "&.Mui-focused ": {
            color: "rgb(128,128,128)",
          },
        }}
      >
        Сортировка
      </InputLabel>
      <Select
        value={sortMethod}
        label="Сортировка"
        onChange={(e) => setSortMethod(e.target.value)}
      >
        <MenuItem value={"code"}>По коду</MenuItem>
        <MenuItem value={"name"}>По названию</MenuItem>
        <MenuItem value={"rubCourse"}>По курсу рубля</MenuItem>
        <MenuItem value={"eurCourse"}>По курсу евро</MenuItem>
        <MenuItem value={"usdCourse"}>По курсу доллара</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortSelect;
