import React from "react";
import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getDataList } from "../redux/reducers";
import EachNote from "./EachNote";

export default function ListSection() {
  const style = {
    minWidth: "40rem",
    padding: 2,
    display: "flex",
    flexDirection: "column",
  };

  const notesState = useSelector(getDataList);

  return (
    <Stack sx={style}>
      {notesState && notesState.length === 0 && (
        <Typography variant="h2">No Notes To Show...</Typography>
      )}
      {notesState &&
        notesState.length > 0 &&
        notesState.map((note) => <EachNote key={note.id} {...note} />)}
    </Stack>
  );
}
