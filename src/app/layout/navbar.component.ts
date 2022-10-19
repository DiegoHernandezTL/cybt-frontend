import {Component, Input, OnInit} from '@angular/core';
import {SocialUser} from "angularx-social-login";
import {MenuOption} from "../models/menu-option";
import {Usuario} from "../models/usuario";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() usuario?: Usuario;
  logo: string = 'assets/images/cybertronica.png';
  menuList: MenuOption[] = [
    {
      nombre: "Inicio",
      descripcion: "Ir a la página principal",
      path: "/",
      access: ["everyone"]
    },
    {
      nombre: "Informes técnico",
      descripcion: "Ver listado de informes",
      path: "/informe",
      access: ["everyone"]
    },
    {
      nombre: "Usuarios",
      descripcion: "Gestionar usuarios",
      path: "/usuario",
      access: ["administrador", "desarrollador"]
    }
  ]

  constructor(
    private cookieService: CookieService
  ) {
  }

  ngOnInit(): void {
    console.log(this.usuario);
  }

  reloadContent() {
    this.cookieService.set('user-sub', 'default');
    window.location.reload();
  }

}
