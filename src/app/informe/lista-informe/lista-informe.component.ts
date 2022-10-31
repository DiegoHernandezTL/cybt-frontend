import { Component, OnInit } from '@angular/core';
import {InformeTecnico} from "../../models/informe-tecnico";
import {InformeTecnicoService} from "../../service/informe-tecnico.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {loadInformes} from "../../state/actions/informe-tecnico.actions";
import {Observable} from "rxjs";
import {selectLoadingInformes} from "../../state/selectors/informe-tecnico.selectors";

@Component({
  selector: 'app-lista-informe',
  templateUrl: './lista-informe.component.html',
  styleUrls: ['./lista-informe.component.scss']
})
export class ListaInformeComponent implements OnInit {

  informes: InformeTecnico[] = [];
  informesMostrando: InformeTecnico[] = [];
  informesBusqueda: InformeTecnico[] = [];
  bsqColumna: string = "";
  bsqValor: string = "";
  isSearch: boolean = false;

  // TODO -> Pruebas de NGRX, eliminar al finalizar
  loading$: Observable<boolean> = new Observable();

  constructor(
    private informeTecnicoService: InformeTecnicoService,
    private toastr: ToastrService,
    private router: Router,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.cargarInformes();
    // TODO -> Pruebas de NGRX, eliminar al finalizar
    this.loading$ = this.store.select(selectLoadingInformes);
    this.store.dispatch(loadInformes());
  }

  toggleSearch(): void {
    this.isSearch = !this.isSearch;
    this.ngOnInit();
  }

  buscar() {
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
  }

  cargarInformes(): void {
    this.informeTecnicoService.lista().subscribe(
      data => {
        this.informes = data;
        if(!this.isSearch) {
          this.informesMostrando = this.informes;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  borrar(id: number) {
    this.informeTecnicoService.eliminarId(id).subscribe(
      data => {
        this.toastr.success("Informe eliminado correctamente.", "OK", {
          timeOut:3000, positionClass:'toast-top-center'
        });
        this.router.navigate(['/informe']);
        this.cargarInformes()
      },
      err => {
        this.toastr.error(err.error.mensaje, "Algo ha fallado", {
          timeOut:3000, positionClass:'toast-top-center'
        });
      }
    );
  }


}
