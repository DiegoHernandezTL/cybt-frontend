import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {InformeTecnicoService} from "../../service/informe-tecnico.service";
import {catchError, exhaustMap, map, mergeMap} from "rxjs/operators";
import {EMPTY} from "rxjs";

@Injectable()
export class InformesEffects {

  constructor(
    private actions$: Actions,
    private informeTecnicoService: InformeTecnicoService
  ) {}

  // Carga de la lista de informes
  loadInformes$ = createEffect(() => this.actions$.pipe(
    ofType('[Informes List] Load informes'),
    mergeMap(() => this.informeTecnicoService.lista().pipe(
      map(list => ({
        type: '[Informes List] Loaded informes',
        list
      })),
      catchError(() => EMPTY)
    ))
  ));

  // Carga de detalles de informe
  loadInformeDetail$ = createEffect(() => this.actions$.pipe(
    ofType('[Informes List] Load informe detail'),
    exhaustMap(action =>
      // @ts-ignore
      this.informeTecnicoService.detalleId(action.id).pipe(
        map(detail => ({
          type: '[Informes List] Loaded informe detail',
          detail
        })),
        catchError(() => EMPTY)
      )
    )
  ));

}
