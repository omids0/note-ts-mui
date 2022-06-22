import { Button, Stack, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNoteActionRequest } from "../redux/actions";
import { getDataList } from "../redux/reducers";
import { INoteDataReq } from "../types/DTO/req";

export default function FormsSection() {
  const dispatch = useDispatch();

  const style = {
    bgcolor: "#eeeeee",
    padding: 2,
    borderRadius: "7px",
    minWidth: "25rem",
    minHeight: "20rem",
  };

  const nostsState = useSelector(getDataList);

  const [state, setState] = React.useState<INoteDataReq["req"]>({
    id: Math.random().toString(32).slice(2),
    title: "",
    description: "",
  });

  useEffect(() => {
    console.log("notes state:", nostsState);
  }, [nostsState]);

  //handlers
  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((perv) => ({
      ...perv,
      id: Math.random().toString(32).slice(2),
      [e.target.name]: e.target.value,
    }));
  };

  const handlerAddNote = () => {
    if (!state.title && !state.description) {
      alert("Please fill title or description...");
    } else {
      setState(() => ({
        id: Math.random().toString(32).slice(2),
        title: "",
        description: "",
      }));
      dispatch(addNoteActionRequest(state));
    }
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
