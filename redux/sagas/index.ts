import { all, put, takeEvery } from "redux-saga/effects";
import { addNoteActionRequest } from "../actions";
import ActionCasess from "../types";
import { getNoteActionSuccess } from "./../actions/index";

function* addNoteAction({ payload }: ReturnType<typeof addNoteActionRequest>) {
  try {
    yield put(getNoteActionSuccess(payload));
  } catch (error) {
    console.log("addNoteAction", error);
  }
}

export function* rootSaga() {
  yield all([takeEvery(ActionCasess.ADD_NOTE_REQUEST, addNoteAction)]);
}
