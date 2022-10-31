import { createReducer, on } from "@ngrx/store";
import {InformeTecnico} from "../../models/informe-tecnico";
import {loadInformes} from "../actions/informe-tecnico.actions";

// Estado inicial

export const initialState: {
  loading: boolean,
  list: ReadonlyArray<InformeTecnico>;
} = {
  loading: false,
  list: []
}

// Reducer -> Funciones

export const informesReducer = createReducer(
  initialState,
  on(loadInformes, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
);


