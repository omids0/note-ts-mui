import { all, put, takeEvery } from "redux-saga/effects";
import {
  addNoteActionRequest,
  removeNoteActionRequest,
  removeNoteActionSuccess,
  updateNoteActionRequest,
  updateNoteActionSuccess,
} from "../actions";
import ActionCasess from "../types";
import { getNoteActionSuccess } from "./../actions/index";


//ADD
function* addNoteAction({ payload }: ReturnType<typeof addNoteActionRequest>) {
  try {
    yield put(getNoteActionSuccess(payload));
  } catch (error) {
    console.log("addNoteAction", error);
  }
}


//REMOVE
function* removeNoteAction({
  payload,
}: ReturnType<typeof removeNoteActionRequest>) {
  try {
    yield put(removeNoteActionSuccess(payload));
  } catch (error) {
    console.log("removeNoteAction", error);
  }
}

//UPDATE
function* updateNoteAction({
  payload,
  so,
}: ReturnType<typeof updateNoteActionRequest>) {
  try {
    yield put(updateNoteActionSuccess(payload));
    so?.(false)
  } catch (error) {
    console.log("updateNoteAction", error);
  }
}

export function* rootSaga() {
  yield all([
    takeEvery(ActionCasess.ADD_NOTE_REQUEST, addNoteAction),
    takeEvery(ActionCasess.REMOVE_NOTE_REQUEST, removeNoteAction),
    takeEvery(ActionCasess.UPDATE_NOTE_REQUEST, updateNoteAction),
  ]);
}
