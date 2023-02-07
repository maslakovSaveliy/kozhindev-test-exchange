import { Grid, Skeleton, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { date } from "../../utils/date";

interface Props {
  type?: "phone" | "tablet" | false;
}

const HeaderTime: FC<Props> = ({ type }) => {
  const { isLoading, timestamp, error } = useAppSelector((state) => state);
  const [updateTime, setUpdateTime] = useState<string>("");
  useEffect(() => {
    setUpdateTime(date(timestamp!));
    const interval = setInterval(() => {
      setUpdateTime(date(timestamp!));
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  });
  if (type == "phone") {
    return (
      <Grid
        sx={{ display: "flex", flexDirection: "column" }}
        maxWidth="250px"
        alignItems="center"
        whiteSpace="nowrap"
      >
        <Typography>Данные получены</Typography>
        {isLoading ? (
          <Skeleton>
            <Typography>{updateTime}</Typography>
          </Skeleton>
        ) : (
          <Typography>{error ? error : updateTime}</Typography>
        )}
      </Grid>
    );
  }
  return (
    <Grid
      maxWidth="300px"
      sx={{ display: "flex", flexDirection: "row" }}
      gap={1}
    >
      <Typography>Данные получены</Typography>
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
