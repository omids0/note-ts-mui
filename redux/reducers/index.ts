import { Reducer } from "react";
import { INoteDataRes } from "../../types/DTO/res";
import TAction from "./../actions/index";
import ActionCasess from "../types";
import { RootState } from "../../types/DTO/redux";

const iState: INoteDataRes = {
    data: []
}

const reducer: Reducer<INoteDataRes, TAction> = (
  state = iState,
  action
) => {
  switch (action.type) {
    case ActionCasess.GET_NOTE_SUCCESS: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    default:
      return state;
  }
};

const getDataList = (state: RootState) =>
  (state.noteReducer as INoteDataRes).data;

export { reducer as noteReducer, getDataList };
