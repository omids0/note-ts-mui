import { Box, Stack } from "@mui/material";
import React from "react";
import FormsSection from "./FormsSection";
import ListSection from "./ListSection";

export default function HomePage() {
  const style = {
    maxWidth: '90rem',
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
    margin: '0 auto'
  };

  return (
    <Stack sx={style}>
      <FormsSection />
      <ListSection />
    </Stack>
  );
}
