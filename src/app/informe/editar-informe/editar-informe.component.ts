import {Component, OnInit, ViewChild} from '@angular/core';
import {InformeTecnicoService} from "../../service/informe-tecnico.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {InformeTecnico} from "../../models/informe-tecnico";
import {SignaturePad} from "angular2-signaturepad";

@Component({
  selector: 'app-editar-informe',
  templateUrl: './editar-informe.component.html',
  styleUrls: ['./editar-informe.component.scss']
})
export class EditarInformeComponent implements OnInit {

  id: number;
  cliente: string;
  responsable: string;
  tipo: number;
  usuario: string;
  usuarioCargo: string;
  dependencia: string;
  fechaRetiro: string;
  fechaRecibe: string;
  equipoTipo: string;
  equipoNombre: string;
  equipoMarca: string;
  equipoSN: string;
  officeVersion: string;
  officeKEY: string;
  windowsVersion: string;
  windowsKEY: string;
  contadorHojas: number;
  direccionIP: string;
  monitorNombre: string;
  monitorMarca: string;
  monitorSN: string;
  tecladoNombre: string;
  tecladoMarca: string;
  tecladoSN: string;
  mouseNombre: string;
  mouseMarca: string;
  mouseSN: string;
  recibe: string;
  recibeCargo: string;
  firmaRecibe: string;
  servicioDetalle: string;
  observaciones: string;

  constructor(
    private informeTecnicoService: InformeTecnicoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.informeTecnicoService.detalleId(this.id).subscribe(
      data => {
        this.cliente = data.cliente;
        this.responsable = data.responsable;
        this.tipo = data.tipo;
        this.usuario = data.usuario;
        this.usuarioCargo = data.usuarioCargo;
        this.dependencia = data.dependencia;
        this.fechaRetiro = this.formatearFecha(data.fechaRetiro);
        this.fechaRecibe = this.formatearFecha(data.fechaRecibe);
        this.equipoTipo = data.equipoTipo;
        this.equipoNombre = data.equipoNombre;
        this.equipoMarca = data.equipoMarca;
        this.equipoSN = data.equipoSN;
        this.officeVersion = data.officeVersion;
        this.officeKEY = data.officeKEY;
        this.windowsVersion = data.windowsVersion;
        this.windowsKEY = data.windowsKEY;
        this.contadorHojas = data.contadorHojas;
        this.direccionIP = data.direccionIP;
        this.monitorNombre = data.monitorNombre;
        this.monitorMarca = data.monitorMarca;
        this.monitorSN = data.monitorSN;
        this.tecladoNombre = data.tecladoNombre;
        this.tecladoMarca = data.tecladoMarca;
        this.tecladoSN = data.tecladoSN;
        this.mouseNombre = data.mouseNombre;
        this.mouseMarca = data.mouseMarca;
        this.mouseSN = data.mouseSN;
        this.recibe = data.recibe;
        this.recibeCargo = data.recibeCargo;
        this.firmaRecibe = data.firmaRecibe;
        this.servicioDetalle = data.servicioDetalle;
        this.observaciones = data.observaciones;
      },
      error => {
        this.toastr.error(error.error.mensaje, 'Algo ha fallado', {
          timeOut:3000, positionClass:'toast-top-center'
        });
        this.router.navigate(['/informe'])
      }
    );
  }

  formatearFecha(timestamp: String) {
    // "2022-09-24T20:00:00.000+00:00"
    // "24/09/2022 15:00:00"
    const value = timestamp.split('T');
    const date = value[0].split('-');
    const time = value[1].slice(0, 8);
    const year = date[0];
    const month = date[1];
    const day = date[2];
    return ""+day+"/"+month+"/"+year+" "+time;
  }

  onUpdate() {
    this.equipoTipo = this.equipoTipo.charAt(0).toUpperCase() + this.equipoTipo.slice(1).toLowerCase();
    const informe = new InformeTecnico(
      this.cliente,
      this.responsable,
      this.tipo ,
      this.usuario,
      this.usuarioCargo,
      this.dependencia,
      this.fechaRetiro,
      this.fechaRecibe,
      this.equipoTipo,
      this.equipoNombre,
      this.equipoMarca,
      this.equipoSN,
      this.officeVersion,
      this.officeKEY,
      this.windowsVersion,
      this.windowsKEY,
      this.contadorHojas,
      this.direccionIP,
      this.monitorNombre,
      this.monitorMarca,
      this.monitorSN,
      this.tecladoNombre,
      this.tecladoMarca,
      this.tecladoSN,
      this.mouseNombre,
      this.mouseMarca,
      this.mouseSN,
      this.recibe,
      this.recibeCargo,
      this.firmaRecibe,
      this.servicioDetalle,
      this.observaciones
    );
    this.informeTecnicoService.actualizar(informe, this.id).subscribe(
      data => {
        this.toastr.success('Informe actualizado correctamente.', 'OK', {
          timeOut:3000, positionClass:'toast-top-center'
        });
        this.router.navigate(['/informe/'+this.id]);
      }
    );
  }

}
