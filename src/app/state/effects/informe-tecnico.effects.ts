import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {InformeTecnicoService} from "../../service/informe-tecnico.service";
import {catchError, map, mergeMap} from "rxjs/operators";
import {EMPTY} from "rxjs";

@Injectable()
export class InformesEffects {

  constructor(
    private actions$: Actions,
    private informeTecnicoService: InformeTecnicoService
  ) {}

  // Carga de la lista de items
  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType('[Informes List] Load informes'),
    mergeMap(() => this.informeTecnicoService.lista().pipe(
      map(list => ({
        type: '[Informes List] Loaded informes',
        list
      })),
      catchError(() => EMPTY)
    ))
  ));

}