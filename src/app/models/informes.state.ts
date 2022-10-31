import {InformeTecnico} from "./informe-tecnico";

export interface InformesState {
  loading: boolean,
  error: string,
  list: ReadonlyArray<InformeTecnico>;
  detail: Readonly<InformeTecnico>;
}
