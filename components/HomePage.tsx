import { Box, Stack } from "@mui/material";
import React from "react";

export default function HomePage() {
  const style = {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };
  
  return (
    <Stack sx={style}>
      <Box>test</Box>
    </Stack>
  );
}
