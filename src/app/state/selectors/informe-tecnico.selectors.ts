import { createSelector } from "@ngrx/store";
import {AppState} from "../app.state";
import {InformesState} from "../../models/informes.state";

// Recupera toda la lista de informes

export const selectInformesFeature = (state: AppState) => state.informes;

// Recuperar del store ya cargado

export const selectListInformes = createSelector(
  selectInformesFeature,
  (state: InformesState) => state.list
);

export const selectLoadingInformes = createSelector(
  selectInformesFeature,
  (state: InformesState) => state.loading
);

export const selectErrorInformes = createSelector(
  selectInformesFeature,
  (state: InformesState) => state.error
);
