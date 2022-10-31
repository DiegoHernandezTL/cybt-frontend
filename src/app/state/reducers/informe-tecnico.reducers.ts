import { createReducer, on } from "@ngrx/store";
import {InformeTecnico} from "../../models/informe-tecnico";
import {loadedInformes, loadInformes} from "../actions/informe-tecnico.actions";
import {InformesState} from "../../models/informes.state";

// Estado inicial

export const initialState: InformesState = {
  loading: false,
  error: '',
  list: []
}

// Reducer -> Funciones

export const informesReducer = createReducer(
  initialState,
  on(loadInformes, (state) => {
    return {
      ...state,
      loading: true,
      error: ''
    }
  }),
  on(loadedInformes, (state, {list}) => {
    return {
      ...state,
      loading: false,
      list,
      error: ''
    }
  })
);


