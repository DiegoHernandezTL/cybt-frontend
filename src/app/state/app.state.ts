import { InformesState } from "../models/informes.state";
import {ActionReducerMap} from "@ngrx/store";
import {informesReducer} from "./reducers/informe-tecnico.reducers";

// Almacenamiento local de la aplicación

export interface AppState {
  informes: InformesState
}

// Asignación de Reducers a cada State dentro del almacenamiento local
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  informes: informesReducer
}
