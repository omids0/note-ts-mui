import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormsSection from "./FormsSection";
import ListSection from "./ListSection";
import { useSelector } from "react-redux";
import { getDataList } from "../redux/reducers";
import Cookies from "js-cookie";

export default function HomePage() {
  const styleContainer = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
    margin: "0 auto",
  }

  const style = {
    maxWidth: "90rem",
    minWidth: '80rem',
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
    margin: "0 auto",
  };

  const nostsState = useSelector(getDataList);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Cookies.set("tsNote", JSON.stringify(nostsState));
  }, [nostsState]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  return (
    <Stack sx={styleContainer}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Stack sx={style}>
          <FormsSection />
          <ListSection />
        </Stack>
      )}
    </Stack>
  );
}
