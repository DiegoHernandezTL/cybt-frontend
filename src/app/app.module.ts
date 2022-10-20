import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";

//Externas
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { SocialLoginModule, SocialAuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

import { ListaInformeComponent } from './informe/lista-informe/lista-informe.component';
import { DetalleInformeComponent } from './informe/detalle-informe/detalle-informe.component';
import { NuevoInformeComponent } from './informe/nuevo-informe/nuevo-informe.component';
import { EditarInformeComponent } from './informe/editar-informe/editar-informe.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from './layout/navbar.component';
import { HomepageComponent } from './layout/homepage.component';
import { SignaturePadModule } from "angular2-signaturepad";
import { FirmarInformeComponent } from './informe/firmar-informe/firmar-informe.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario/detalle-usuario.component';
import { ListaUsuarioComponent } from './usuario/lista-usuario/lista-usuario.component';
import {environment} from "../environments/environment";
import {CookieService} from "ngx-cookie-service";

@NgModule({
  declarations: [
    AppComponent,
    ListaInformeComponent,
    DetalleInformeComponent,
    NuevoInformeComponent,
    EditarInformeComponent,
    NavbarComponent,
    HomepageComponent,
    FirmarInformeComponent,
    DetalleUsuarioComponent,
    ListaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    SignaturePadModule,
    ReactiveFormsModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('958249400302-g31g1r24rgi2vg39djd2nru6ou0iuhfo.apps.googleusercontent.com')
          },
        ],
      } as SocialAuthServiceConfig,
    },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
