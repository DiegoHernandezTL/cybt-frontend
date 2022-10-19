import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../models/usuario";
import {GsiPayload} from "../models/gsi-payload";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioURL = "http://localhost:8080/user/";


  constructor(
    private httpClient: HttpClient
  ) { }

  // Listados

  public lista(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.usuarioURL + `list/all`);
  }

  public listaNombre(nombre: string): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.usuarioURL + `list/name/${nombre}`);
  }

  public listaApellido(apellido: string): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.usuarioURL + `list/lastname/${apellido}`);
  }

  public listaArea(area: string): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.usuarioURL + `list/area/${area}`);
  }

  public listaCargo(cargo: string): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.usuarioURL + `list/job/${cargo}`);
  }

  public listaRol(rol: string): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.usuarioURL + `list/rol/${rol}`);
  }

  public listaEstado(estado: string): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.usuarioURL + `list/status/${estado}`);
  }

  // Detalles

  public detalleId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.usuarioURL + `find/id/${id}`);
  }

  public detalleCorreo(correo: string): Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.usuarioURL + `find/email/${correo}`);
  }

  public detalleTelefono(telefono: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.usuarioURL + `find/phone/${telefono}`);
  }

  public detalleSub(sub: string): Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.usuarioURL + `find/sub/${sub}`);
  }

  // Eliminar

  public eliminarId(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.usuarioURL + `delete/id/${id}`);
  }

  // Creacion

  public crear(usuario: Usuario): Observable<any>{

    return this.httpClient.post<any>(this.usuarioURL + `create`, usuario);
  }

  // Actualizacion

  public actualizar(id: number, usuario: Usuario): Observable<any>{
    return this.httpClient.put<any>(this.usuarioURL + `update/id/${id}`, usuario);
  }

  // Verificación

  public existeSub(sub: string): Observable<any>{
    return this.httpClient.get<any>(this.usuarioURL + `exists/sub/${sub}`);
  }




}
