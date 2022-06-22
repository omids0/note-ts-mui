import { Box, Button, Card, Modal, Stack, TextField } from "@mui/material";
import React, { FC, useState } from "react";
import { INoteDataReq } from "../types/DTO/req";
import { INoteDataRes } from "../types/DTO/res";
import { useDispatch } from "react-redux";
import { removeNoteActionRequest } from "../redux/actions";

interface INoteItemProps {
  id: INoteDataRes["data"][0]["id"];
  title: INoteDataRes["data"][0]["title"];
  description: INoteDataRes["data"][0]["description"];
  key: INoteDataRes["data"][0]["id"];
}

const EachNote: FC<INoteItemProps> = (props) => {
  const dispatch = useDispatch();

  const { id, description, title, ...rest } = props;
  const [state, setState] = React.useState<INoteDataReq["req"]>({
    id,
    description,
    title,
  });

  const [open, setOpen] = useState(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #eee",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
  };

  //handlers
  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((perv) => ({
      ...perv,
      [e.target.name]: e.target.value,
    }));
  };

  const handlerUpdate = () => {
    console.log("update");
  };

  const handlerRemove = () => {
    console.log("remove");
    dispatch(removeNoteActionRequest(state))
  };

  return (
    <Card sx={{ margin: "1rem" }}>
      <Stack sx={{ padding: "1rem", bgcolor: "#eeeeee" }}>{title}</Stack>
      <Stack sx={{ padding: "1rem" }} onClick={() => setOpen(!open)}>
        {description}
      </Stack>
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              sx={{ margin: "3rem 0", bgcolor: "green" }}
              onClick={handlerUpdate}
            >
              Update Note
            </Button>
            <Button
              variant="contained"
              sx={{ margin: "3rem 0", bgcolor: "red" }}
              onClick={handlerRemove}
            >
              Remove Note
            </Button>
          </Box>
        </Box>
      </Modal>
    </Card>
  );
};

export default EachNote;
