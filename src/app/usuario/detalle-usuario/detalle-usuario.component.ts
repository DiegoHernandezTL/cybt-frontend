import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../models/usuario";
import {UsuarioService} from "../../service/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss']
})
export class DetalleUsuarioComponent implements OnInit {

  userLogged?: Usuario;
  userRol: string;
  userCanAccess: boolean;

  usuario: Usuario;
  sub: string;
  correo: string;
  nombre: string;
  apellido: string;
  area: string;
  cargo: string;
  telefono: number;
  rol: string;
  estado: string;

  logo: string = 'assets/image/cybertronica.png'
  isEditing: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private cookieService: CookieService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const sub = this.activatedRoute.snapshot.params.sub;
    this.usuarioService.detalleSub(sub).subscribe(
      data => {
        this.usuario = data;
      },
      error => {
        this.toastr.error(error.error.mensaje, 'Algo ha fallado', {
          timeOut:3000, positionClass:'toast-top=center'
        });
        this.router.navigate(['/usuario']);
      }
    );
    this.verifyUserAccess()
  }

  verifyUserAccess(): void {
    this.usuarioService.detalleSub(this.cookieService.get('user-sub')).subscribe(
      data => {
        this.userLogged = data;
        this.userRol = data.rol;
        if(this.userLogged.rol == 'administrador' || this.userRol == 'desarrollador') {
          this.userCanAccess = true;
        } else if(this.userLogged.sub == this.usuario.sub) {
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

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.ngOnInit();
  }

  onEdit():void {
    this.usuarioService.actualizar(this.usuario.sub, this.usuario).subscribe(
      data => {
        this.toastr.success('Se ha actualizado con éxito.', 'OK', {
          timeOut:3000, positionClass:'toast-top-center'
        });
        this.isEditing = false;
        this.ngOnInit();
      },
      error => {
        this.toastr.error(error.error.mensaje, 'Algo ha fallado', {
          timeOut:3000, positionClass:'toast-top-center'
        });
      }
    );
  }

  onDelete(): void {
    this.usuarioService.eliminarSub(this.usuario.sub).subscribe(
      data => {
        this.toastr.success('Usuario eliminado satisfactoriamente', 'OK', {
          timeOut:3000, positionClass:'toast-top-center'
        });
        this.router.navigate(['/usuario']);
      },
      error => {
        this.toastr.error(error.error.mensaje, 'Algo ha fallado', {
          timeOut:3000, positionClass:'toast-top-center'
        });
      }
    );
  }



}
