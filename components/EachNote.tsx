import { Card, Stack } from "@mui/material";
import React from "react";

export default function EachNote() {
  const style = {
    margin: "1rem",
  };
  return (
    <Card sx={style}>
      <Stack sx={{ padding: "1rem", bgcolor: "#eeeeee" }}>t</Stack>
      <Stack sx={{ padding: "1rem" }}>d</Stack>
    </Card>
  );
}
