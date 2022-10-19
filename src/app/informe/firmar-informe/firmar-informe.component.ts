import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SignaturePad} from "angular2-signaturepad";
import {InformeTecnicoService} from "../../service/informe-tecnico.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {InformeTecnico} from "../../models/informe-tecnico";

@Component({
  selector: 'app-firmar-informe',
  templateUrl: './firmar-informe.component.html',
  styleUrls: ['./firmar-informe.component.scss']
})
export class FirmarInformeComponent implements OnInit, AfterViewInit {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  public signaturePadOptions: Object = {
    'minWidth': 5,
    'canvasWidth': 520,
    'canvasHeight': 240
  }

  informe: InformeTecnico;
  id: number;

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
        this.informe = data;
      },
      error => {
        this.toastr.error(error.error.mensaje, "Algo ha fallado", {
          timeOut:3000, positionClass:'toast-top-center'
        });
        this.router.navigate(['/informe/'+this.id]);
      }
    );
  }

  ngAfterViewInit(): void {
    this.signaturePad.set('minWidth', 0.5);
    this.signaturePad.clear();
  }

  drawStart() {
    console.log('Se ha empezado a firmar');
  }

  drawComplete() {
    console.log('Se ha finalizado el trazo.');
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

  clearPad() {
    this.signaturePad.clear();
  }

  onSign() {
    const firma = this.signaturePad.toDataURL('png', 100);
    this.informe.firmaRecibe = firma;
    this.informe.fechaRecibe = this.formatearFecha(this.informe.fechaRecibe);
    this.informe.fechaRetiro = this.formatearFecha(this.informe.fechaRetiro);
    this.informeTecnicoService.actualizar(this.informe, this.informe.id).subscribe(
      data => {
        this.toastr.success('Firmado satisfactoriamente.', 'OK', {
          timeOut:3000, positionClass:'toast-top-center'
        });
        this.router.navigate(['/informe/'+this.id]);
      }, error => {
        this.toastr.error(error.error.mensaje, 'Algo ha fallado', {
          timeOut:3000, positionClass:'toast-top-center'
        });
      }
    );
  }

}
