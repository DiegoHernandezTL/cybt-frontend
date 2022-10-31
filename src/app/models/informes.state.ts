import {InformeTecnico} from "./informe-tecnico";

export interface InformesState {
  loading: boolean,
  list: ReadonlyArray<InformeTecnico[]>;
}
