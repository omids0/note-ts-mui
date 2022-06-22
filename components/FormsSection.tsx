import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import { INoteDataReq } from "../types/DTO/req";

export default function FormsSection() {
  const style = {
    bgcolor: "#eeeeee",
    padding: 2,
    borderRadius: "7px",
    minWidth: "25rem",
    minHeight: "20rem",
  };

  const [state, setState] = React.useState<INoteDataReq["req"]>({
    id: Math.random().toString(32).slice(2),
    title: "",
    description: "",
  });

  //handlers
  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((perv) => ({
      ...perv,
      id: Math.random().toString(32).slice(2),
      [e.target.name]: e.target.value,
    }));
  };

  const handlerAddNote = () => {
    console.log("submit", state);
    setState(()=>({
        id: Math.random().toString(32).slice(2),
        title: '',
        description: ''
    }))
  };

  return (
    <Stack sx={style}>
      <TextField
        id="filled-basic"
        label="Title"
        variant="filled"
        value={state.title}
        name="title"
        onChange={handlerInput}
        sx={{ backgroundColor: "#ffffff", margin: "1rem 0" }}
      />
      <TextField
        id="filled-basic"
        multiline
        label="Description"
        variant="filled"
        value={state.description}
        name="description"
        onChange={handlerInput}
        sx={{ backgroundColor: "#ffffff" }}
      />
      <Button
        variant="contained"
        sx={{ margin: "3rem 0" }}
        onClick={handlerAddNote}
      >
        Add New Note
      </Button>
    </Stack>
  );
}
