import { Container, Grid } from "@mui/material";
import React, { FC } from "react";
import Converter from "./Converter";
import Currencies from "./Currencies";

const Main: FC = () => {
  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Converter />
        <Currencies />
      </Grid>
    </Container>
  );
};

export default Main;
