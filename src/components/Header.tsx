import React, { FC } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useActions } from "../hooks/useActions";
import HeaderTime from "./UI/HeaderTime";

const Header: FC = () => {
  const phone = useMediaQuery("(max-width:600px)");
  const { getCurrencies } = useActions();
  const updateCurrency = () => {
    getCurrencies();
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "grey" }}>
      <Toolbar>
        <Typography variant="h6" component="div" flexGrow={1}>
          KozhinDev Converter
        </Typography>
        <Button
          variant="outlined"
          color="inherit"
          sx={{ marginRight: "10px" }}
          onClick={updateCurrency}
        >
          Update
        </Button>
        <HeaderTime type={phone && "phone"} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
