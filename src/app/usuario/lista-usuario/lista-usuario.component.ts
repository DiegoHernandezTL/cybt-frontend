import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../models/usuario";
import {UsuarioService} from "../../service/usuario.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.scss']
})
export class ListaUsuarioComponent implements OnInit {

  userLogged?: Usuario;
  userRol: string;
  userCanAccess: boolean = false;

  usuarios: Usuario[];
  usuariosMostrando: Usuario[] = [];
  usuariosBusqueda: Usuario[] = [];
  bsqColumna: string = '';
  bsqValor: string = '';
  isSearch: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.cargarUsuarios();
    this.verifyUserAccess();
  }

  verifyUserAccess(): void {
    this.usuarioService.detalleSub(this.cookieService.get('user-sub')).subscribe(
      data => {
        this.userLogged = data;
        this.userRol = data.rol;
        if(this.userLogged.rol == 'administrador' || this.userRol == 'desarrollador') {
          this.userCanAccess = true;
        } else {
          this.userCanAccess = false;
        }
      },
      error => {
        this.userCanAccess = false;
        this.toastr.error(error.error.mensaje, 'Falló al cargar sesión', {
          timeOut:3000, positionClass:'toast-top-center'
        });
      }
    );
  }

  toggleSearch(): void {
    this.isSearch = !this.isSearch;
    this.ngOnInit();
  }

  buscar(): void {
    this.usuariosBusqueda = [];
    switch (this.bsqColumna) {
      case 'nombre':
        for (let usuario of this.usuarios) {
          if(usuario.nombre.includes(this.bsqValor) || usuario.apellido.includes(this.bsqValor)) {
            this.usuariosBusqueda.push(usuario);
          }
        }
        break;
      case 'area':
        for (let usuario of this.usuarios) {
          if(usuario.area.includes(this.bsqValor)) {
            this.usuariosBusqueda.push(usuario);
          }
        }
        break;
      case 'cargo':
        for (let usuario of this.usuarios) {
          if(usuario.cargo.includes(this.bsqValor)) {
            this.usuariosBusqueda.push(usuario);
          }
        }
        break;
      case 'telefono':
        for (let usuario of this.usuarios) {
          if(usuario.telefono.toString().includes(this.bsqValor)) {
            this.usuariosBusqueda.push(usuario);
          }
        }
        break;
      case 'rol':
        for (let usuario of this.usuarios) {
          if(usuario.rol.includes(this.bsqValor)) {
            this.usuariosBusqueda.push(usuario);
          }
        }
        break;
      case 'estado':
        for (let usuario of this.usuarios) {
          if(usuario.area.includes(this.bsqValor)) {
            this.usuariosBusqueda.push(usuario);
          }
        }
        break;
      case 'correo':
        for (let usuario of this.usuarios) {
          if(usuario.correo.includes(this.bsqValor)) {
            this.usuariosBusqueda.push(usuario);
          }
        }
        break;
      default:
        this.toastr.error('Parámetros de búsqueda incorrectos', 'Error', {
          timeOut:3000, positionClass:'toast-top-center'
        });
        break;
    }
    this.usuariosMostrando = this.usuariosBusqueda;
    this.ngOnInit();
  }


  cargarUsuarios(): void {
    this.usuarioService.lista().subscribe(
      data => {
        this.usuarios = data;
        if(!this.isSearch) {
          this.usuariosMostrando = this.usuarios;
        }
      },
      error => {
        this.toastr.error(error.error.mensaje, 'Algo ha fallado', {
          timeOut:3000, positionClass:'toast-top-center'
        });
      }
    )
  }

}
