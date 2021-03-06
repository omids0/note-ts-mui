import { Reducer } from "react";
import { INoteDataRes } from "../../types/DTO/res";
import TAction from "./../actions/index";
import ActionCasess from "../types";
import { RootState } from "../../types/DTO/redux";
import  Cookies  from 'js-cookie';

const localData = Cookies.get('tsNote') ? JSON.parse(Cookies.get('tsNote')!) : []

const iState: INoteDataRes = {
  data: localData,
};

const reducer: Reducer<INoteDataRes, TAction> = (state = iState, action) => {
  switch (action.type) {
    case ActionCasess.GET_NOTE_SUCCESS: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case ActionCasess.REMOVE_NOTE_SUCCESS: {
      const data = state.data.filter((note) => note.id !== action.payload.id);
      return {
        ...state,
        data,
      };
    }
    case ActionCasess.UPDATE_NOTE_SUCCESS: {
      const data = state.data.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
      return {
        ...state,
        data,
      };
    }
    default:
      return state;
  }
};

const getDataList = (state: RootState) =>
  (state.noteReducer as INoteDataRes).data;

export { reducer as noteReducer, getDataList };
