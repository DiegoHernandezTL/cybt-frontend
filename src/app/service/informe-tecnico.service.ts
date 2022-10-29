import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InformeTecnico} from "../models/informe-tecnico";

@Injectable({
  providedIn: 'root'
})
export class InformeTecnicoService {

  informeTecnicoURL = "http://localhost:8081/inftecnico/"

  constructor(
    private httpClient: HttpClient
  ) { }

  // Listados

  public lista(): Observable<InformeTecnico[]> {
    return this.httpClient.get<InformeTecnico[]>(this.informeTecnicoURL + `list/all`);
  }

  public listaEquipoSN(equipoSN: string): Observable<InformeTecnico[]> {
    return this.httpClient.get<InformeTecnico[]>(this.informeTecnicoURL + `list/sn/${equipoSN}`);
  }

  public listaDireccionIP(direccionIP: string): Observable<InformeTecnico[]> {
    return this.httpClient.get<InformeTecnico[]>(this.informeTecnicoURL + `list/ip/${direccionIP}`);
  }

  public listaCliente(cliente: string): Observable<InformeTecnico[]> {
    return this.httpClient.get<InformeTecnico[]>(this.informeTecnicoURL + `list/client/${cliente}`);
  }

  public listaDependencia(dependencia: string): Observable<InformeTecnico[]> {
    return this.httpClient.get<InformeTecnico[]>(this.informeTecnicoURL + `list/depend/${dependencia}`);
  }

  public listaEquipoMarca(equipoMarca: string): Observable<InformeTecnico[]> {
    return this.httpClient.get<InformeTecnico[]>(this.informeTecnicoURL + `list/comp/brand/${equipoMarca}`);
  }

  public listaEquipoNombre(equipoNombre: string): Observable<InformeTecnico[]> {
    return this.httpClient.get<InformeTecnico[]>(this.informeTecnicoURL + `list/comp/name/${equipoNombre}`);
  }

  public listaEquipoTipo(equipoTipo: string): Observable<InformeTecnico[]> {
    return this.httpClient.get<InformeTecnico[]>(this.informeTecnicoURL + `list/comptype/${equipoTipo}`);
  }

  public listaTipo(tipo: number): Observable<InformeTecnico[]> {
    return this.httpClient.get<InformeTecnico[]>(this.informeTecnicoURL + `list/type/${tipo}`);
  }

  public listaUsuario(usuario: string): Observable<InformeTecnico[]> {
    return this.httpClient.get<InformeTecnico[]>(this.informeTecnicoURL + `list/user/${usuario}`);
  }

  // Detalles

  public detalleId(id: number): Observable<InformeTecnico> {
    return this.httpClient.get<InformeTecnico>(this.informeTecnicoURL + `find/id/${id}`);
  }

  // public detalleEquipoSN(equipoSN: string): Observable<InformeTecnico> {
  //   return this.httpClient.get<InformeTecnico>(this.informeTecnicoURL + `find/sn/${equipoSN}`);
  // }

  // Eliminación

  public eliminarId(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.informeTecnicoURL + `delete/id/${id}`);
  }

  // Creación y actualización

  public crear(informeTecnico: InformeTecnico): Observable<any> {
    return this.httpClient.post<any>(this.informeTecnicoURL + `create`, informeTecnico);
  }

  public actualizar(informeTecnico: InformeTecnico, id: number): Observable<any> {
    return this.httpClient.put<any>(this.informeTecnicoURL + `update/id/${id}`, informeTecnico);
  }

}
