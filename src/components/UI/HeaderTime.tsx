import { Grid, Skeleton, Typography } from "@mui/material";
import React, { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import { date } from "../../utils/date";

interface Props {
  type?: "phone" | "tablet" | false;
}

const HeaderTime: FC<Props> = ({ type }) => {
  const { isLoading, timestamp, error } = useAppSelector((state) => state);
  const updateTime = date(timestamp!);
  if (type == "phone") {
    return (
      <Grid
        sx={{ display: "flex", flexDirection: "column" }}
        maxWidth="250px"
        alignItems="center"
        whiteSpace="nowrap"
      >
        <Typography>Last update:</Typography>
        {isLoading ? (
          <Skeleton>
            <Typography>{updateTime}</Typography>
          </Skeleton>
        ) : (
          <Typography>{error ? error : `${updateTime}`}</Typography>
        )}
      </Grid>
    );
  }
  return (
    <Grid
      maxWidth="250px"
      sx={{ display: "flex", flexDirection: "row" }}
      gap={1}
    >
      <Typography>Last update:</Typography>
      {isLoading ? (
        <Skeleton>
          <Typography>{updateTime}</Typography>
        </Skeleton>
      ) : (
        <Typography>{error ? "error..." : `${updateTime}`}</Typography>
      )}
    </Grid>
  );
};

export default HeaderTime;
