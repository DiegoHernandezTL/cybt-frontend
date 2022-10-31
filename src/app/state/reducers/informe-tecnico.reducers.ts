import { createReducer, on } from "@ngrx/store";
import {InformeTecnico} from "../../models/informe-tecnico";
import {
  loadedInformeDetail,
  loadedInformes,
  loadInformeDetail,
  loadInformes
} from "../actions/informe-tecnico.actions";
import {InformesState} from "../../models/informes.state";

// Estado inicial

export const initialState: InformesState = {
  loading: false,
  error: '',
  list: [],
  detail: null,
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
      error: '',
      detail: null,
      list
    }
  }),
  on(loadInformeDetail, (state, {id}) => {
    return {
      ...state,
      loading: true,
    }
  }),
  on(loadedInformeDetail, (state, {detail}) => {
    return {
      ...state,
      loading: false,
      error: '',
      detail
    }
  })
);


