import { Box, Stack } from "@mui/material";
import React from "react";
import FormsSection from "./FormsSection";
import ListSection from "./ListSection";

export default function HomePage() {
  const style = {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
  };

  return (
    <Stack sx={style}>
      <FormsSection />
      <ListSection />
    </Stack>
  );
}
