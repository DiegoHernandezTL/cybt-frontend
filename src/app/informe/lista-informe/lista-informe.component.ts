import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {loadedInformeDetail, loadInformeDetail, loadInformes} from "../../state/actions/informe-tecnico.actions";
import {Observable} from "rxjs";
import {selectListInformes, selectLoadingInformes} from "../../state/selectors/informe-tecnico.selectors";
import {AppState} from "../../state/app.state";

@Component({
  selector: 'app-lista-informe',
  templateUrl: './lista-informe.component.html',
  styleUrls: ['./lista-informe.component.scss']
})
export class ListaInformeComponent implements OnInit {

  /** TODO -> Reparar búsqueda, adaptándola a la programación reactiva
  /* Se dejan de utilizar listas de informe al integrar NGRX pero queda inútil la búsqueda */
  /*
  informes: InformeTecnico[] = [];
  informesMostrando: InformeTecnico[] = [];
  informesBusqueda: InformeTecnico[] = [];
   */

  // Parámetros de búsqueda
  bsqColumna: string = "";
  bsqValor: string = "";
  isSearch: boolean = false;

  // Observables de NGRX para manejador de estados y programación reactiva
  loading$: Observable<boolean> = new Observable();
  informes$: Observable<any> = new Observable();


  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // Asignación de Observables desde Store
    this.loading$ = this.store.select(selectLoadingInformes);
    this.informes$ = this.store.select(selectListInformes);
    // Cargar listado de informes
    this.store.dispatch(loadInformes());
  }

  toggleSearch(): void {
    this.isSearch = !this.isSearch;
    this.ngOnInit();
  }

  // TODO -> Reparar búsqueda, adaptándola a la programación reactiva
  buscar() {
    /*
    this.informesBusqueda = [];
    switch (this.bsqColumna) {
      case 'cliente':
        for (let informe of this.informes) {
          if(informe.cliente.includes(this.bsqValor)) {
            this.informesBusqueda.push(informe);
          }
        }
        break;
      case 'dependencia':
        for (let informe of this.informes) {
          if(informe.dependencia.includes(this.bsqValor)) {
            this.informesBusqueda.push(informe);
          }
        }
        break;
      case 'direccionip':
        for (let informe of this.informes) {
          if(informe.direccionIP.includes(this.bsqValor)) {
            this.informesBusqueda.push(informe);
          }
        }
        break;
      case 'equipoMarca':
        for (let informe of this.informes) {
          if(informe.equipoMarca.includes(this.bsqValor)) {
            this.informesBusqueda.push(informe);
          }
        }
        break;
      case 'equipoSN':
        for (let informe of this.informes) {
          if(informe.equipoSN.includes(this.bsqValor)) {
            this.informesBusqueda.push(informe);
          }
        }
        break;
      case 'equipoTipo':
        for (let informe of this.informes) {
          if(informe.equipoTipo.includes(this.bsqValor)) {
            this.informesBusqueda.push(informe);
          }
        }
        break;
      case 'usuario':
        for (let informe of this.informes) {
          if(informe.usuario.includes(this.bsqValor)) {
            this.informesBusqueda.push(informe);
          }
        }
        break;
      case 'recibe':
        for (let informe of this.informes) {
          if(informe.recibe.includes(this.bsqValor)) {
            this.informesBusqueda.push(informe);
          }
        }
        break;
      default:
        this.toastr.error('Parámetros de búsqueda incorrectos', 'Error', {
          timeOut:3000, positionClass:'toast-top-center'
        });
        break;
    }
    this.informesMostrando = this.informesBusqueda;
    this.ngOnInit();
     */
  }

  precargarInforme(id: number) {
    this.store.dispatch(loadInformeDetail({id}));
  }

}
