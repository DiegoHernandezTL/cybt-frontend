import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {InformeTecnicoService} from "../../service/informe-tecnico.service";
import {InformeTecnico} from "../../models/informe-tecnico";
import {SignaturePad} from "angular2-signaturepad";

@Component({
  selector: 'app-nuevo-informe',
  templateUrl: './nuevo-informe.component.html',
  styleUrls: ['./nuevo-informe.component.scss']
})
export class NuevoInformeComponent implements OnInit{

  cliente: string = '';
  responsable: string = '';
  tipo: number = 0;
  usuario: string = '';
  usuarioCargo: string = '';
  dependencia: string = '';
  fechaRetiro: string = '';
  fechaRecibe: string = '';
  equipoTipo: string = '';
  equipoNombre: string = '';
  equipoMarca: string = '';
  equipoSN: string = '';
  officeVersion: string = '';
  officeKEY: string = '';
  windowsVersion: string = '';
  windowsKEY: string = '';
  contadorHojas: number = 0;
  direccionIP: string = '';
  monitorNombre: string = '';
  monitorMarca: string = '';
  monitorSN: string = '';
  tecladoNombre: string = '';
  tecladoMarca: string = '';
  tecladoSN: string = '';
  mouseNombre: string = '';
  mouseMarca: string = '';
  mouseSN: string = '';
  recibe: string = '';
  recibeCargo: string = '';
  firma: string = '';
  servicioDetalleList: string[] = [];
  servicioDetalleInput: string = '';
  servicioDetalle: string = '';
  observacionesList: string[] = [];
  observacionesInput: string = '';
  observaciones: string = '';

  constructor(
    private informeTecnicoService: InformeTecnicoService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addDetalle(): void{
    this.servicioDetalleList.push(this.servicioDetalleInput);
    this.servicioDetalle = `${this.servicioDetalle}${this.servicioDetalleInput};`;
    this.servicioDetalleInput = '';
  }

  addObservacion():void {
    this.observacionesList.push(this.observacionesInput);
    this.observaciones = `${this.observaciones}${this.observacionesInput};`;
    this.observacionesInput = '';
  }

  onCreate(): void {
    const informe = new InformeTecnico(
      this.cliente,
      this.responsable,
      this.tipo,
      this.usuario,
      this.usuarioCargo,
      this.dependencia,
      this.fechaRetiro,
      this.fechaRecibe,
      this.equipoTipo.charAt(0).toUpperCase() + this.equipoTipo.slice(1).toLowerCase(),
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
      this.firma,
      this.servicioDetalle.slice(0, -1),
      this.observaciones.slice(0, -1)
    );
    informe.fechaRecibe = this.fechaRecibe;

    this.informeTecnicoService.crear(informe).subscribe(
      data => {
        this.toastr.success("Informe creado correctamente.", "OK", {
          timeOut:3000, positionClass:"toast-top-center"
        });
        this.router.navigate(['/informe']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Algo ha fallado', {
          timeOut:3000, positionClass:'toast-top-center'
        });
      }
    );
  }
}
