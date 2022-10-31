import { createAction, props } from "@ngrx/store";
import {InformeTecnico} from "../../models/informe-tecnico";

// Acciones de carga

export const loadInformes = createAction(
  '[Informes List] Load informes'
);

export const loadedInformes = createAction(
  '[Informes List] Loaded informes',
  props<{list: InformeTecnico[]}>()
);

// Creación de informe

export const createInforme = createAction(
  '[Informes List] Created informe',
  props<{informe: InformeTecnico}>()
);

// Actualización de informe

export const updateInforme = createAction(
  '[Informes List] Updated informe',
  props<{informe: InformeTecnico, id: number}>()
);

// Eliminación de informe

export const deleteInforme = createAction(
  '[Informes List] Delete informe',
  props<{id: number}>()
);
