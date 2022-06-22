import { INoteDataReq } from "../../types/DTO/req";
import ActionCasess from "../types";

//GET LIST
export const getNoteActionSuccess = (payload: INoteDataReq["req"]) => ({
  type: ActionCasess.GET_NOTE_SUCCESS,
  payload,
});

//ADD NOTE
export const addNoteActionRequest = (payload: INoteDataReq["req"]) => ({
  type: ActionCasess.ADD_NOTE_REQUEST,
  payload,
});

type TAction =
  | ReturnType<typeof getNoteActionSuccess>
  | ReturnType<typeof addNoteActionRequest>;

export default TAction;
