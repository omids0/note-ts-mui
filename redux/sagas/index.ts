import { all, put, takeEvery } from "redux-saga/effects";
import {
  addNoteActionRequest,
  removeNoteActionRequest,
  removeNoteActionSuccess,
} from "../actions";
import ActionCasess from "../types";
import { getNoteActionSuccess } from "./../actions/index";

function* addNoteAction({ payload }: ReturnType<typeof addNoteActionRequest>) {
  try {
    yield put(getNoteActionSuccess(payload));
  } catch (error) {
    console.log("addNoteAction", error);
  }
}

function* removeNoteAction({
  payload,
}: ReturnType<typeof removeNoteActionRequest>) {
  try {
    yield put(removeNoteActionSuccess(payload));
  } catch (error) {
    console.log("removeNoteAction", error);
  }
}

export function* rootSaga() {
  yield all([
    takeEvery(ActionCasess.ADD_NOTE_REQUEST, addNoteAction),
    takeEvery(ActionCasess.REMOVE_NOTE_REQUEST, removeNoteAction),
  ]);
}
