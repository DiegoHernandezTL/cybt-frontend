import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UsuarioService} from "./service/usuario.service";
import {GsiPayload} from "./models/gsi-payload";
import {Usuario} from "./models/usuario";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'cybertronica-frontend';

  // Recursos
  logo: string = 'assets/images/cybertronica.png';
  bgImage: string = 'assets/images/bg.jpg';

  // Login
  isLoggedin: boolean = false;
  showingComponent: string = 'login';
  userLogged?: Usuario;
  gsiPayload?: GsiPayload;

  // Register
  userSub: string;
  userCorreo: string;
  userNombre: string;
  userApellido: string;
  userArea: string;
  userCargo: string;
  userTelefono: number;
  userRol: string;
  userEstado: string;


  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private router: Router,
    private cookieService: CookieService
  ) {
  }

  ngOnInit(): void {
    if(this.cookieService.get('user-sub').length < 1) {
      this.cookieService.set('user-sub', 'default');
    }
    if(this.cookieService.get('user-sub')!='default') {
      this.isLoggedin = true;
      this.usuarioService.detalleSub(this.cookieService.get('user-sub')).subscribe(
        data => {
          this.userLogged = data;
        }
      );
    }
  }

  ngAfterViewInit(): void {
    this.login();
  }

  login() {
    google.accounts.id.initialize({
      client_id: "958249400302-g31g1r24rgi2vg39djd2nru6ou0iuhfo.apps.googleusercontent.com",
      callback: (response: any) => this.handleGoogleSingIn(response)
    });
    google.accounts.id.renderButton(
      document.getElementById("login-button"),
      { size: "large", type: "icon", shape: "pill" }
    );
  }

  register() {
    const registerUser = new Usuario(
      this.userSub,
      this.userCorreo,
      this.userNombre,
      this.userApellido,
      this.userArea,
      this.userCargo,
      this.userTelefono,
      this.userRol,
      this.userEstado
    );

    this.usuarioService.crear(registerUser).subscribe(
      data => {
        this.userLogged = registerUser;
        this.cookieService.delete('user-sub');
        this.cookieService.set('user-sub', this.userLogged.sub);
        this.isLoggedin = true;
        window.location.reload();
      },
      error => {
        this.toastr.error(error.error.mensaje, "Algo ha fallado", {
          timeOut:3000, positionClass:"toast-top-center"
        });
      }
    );


  }

  handleGoogleSingIn(response: any) {
    let base64Url = response.credential.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c){
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    this.gsiPayload= JSON.parse(jsonPayload);

    // Verificar si el usuario existe en la base de datos
    this.usuarioService.detalleSub(this.gsiPayload.sub).subscribe(
      data => {
        // Si existe, va a cargarlo en una variable local, cambia el switch de loggedin a verdadero y recarga el componente
        this.userLogged = data;
        this.cookieService.delete('user-sub');
        this.cookieService.set('user-sub', this.userLogged.sub);
        this.isLoggedin = true;
        window.location.reload();
      },
      error => {
        // Si no existe, deja el switch en falso, cambia el showing component a register
        this.isLoggedin = false;
        this.showingComponent = 'register';
        // Se asignan los datos que no pueden ser odificados por el usuario y se recarga el componente
        this.userSub = this.gsiPayload.sub.toString();
        this.userCorreo = this.gsiPayload.email;
        this.userNombre = this.gsiPayload.given_name;
        this.userRol = "Invitado";
        this.userEstado = "Activo";
        this.ngOnInit();
        this.toastr.info("Finaliza el registro para continuar", "Registrarse", {
          timeOut:3000, positionClass:'toast-top-center'
        });
      }
    );

  }


}
