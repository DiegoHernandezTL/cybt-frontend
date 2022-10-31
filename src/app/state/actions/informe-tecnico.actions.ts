import { createAction, props } from "@ngrx/store";
import {InformeTecnico} from "../../models/informe-tecnico";

// Acciones de cargar lista de ifnormes

export const loadInformes = createAction(
  '[Informes List] Load informes'
);

export const loadedInformes = createAction(
  '[Informes List] Loaded informes',
  props<{list: InformeTecnico[]}>()
);

// Cargar informe en concreto

export const loadInformeDetail = createAction(
  '[Informes List] Load informe detail',
  props<{id: number}>()
);

export const loadedInformeDetail = createAction(
  '[Informes List] Loaded informe detail',
  props<{detail: InformeTecnico}>()
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
