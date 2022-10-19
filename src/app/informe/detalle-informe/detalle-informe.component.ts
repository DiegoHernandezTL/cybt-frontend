import {Component, OnInit, ViewChild} from '@angular/core';
import {InformeTecnicoService} from "../../service/informe-tecnico.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {InformeTecnico} from "../../models/informe-tecnico";

@Component({
  selector: 'app-detalle-informe',
  templateUrl: './detalle-informe.component.html',
  styleUrls: ['./detalle-informe.component.scss']
})
export class DetalleInformeComponent implements OnInit {

  informeTecnico: InformeTecnico;
  tipoServicio: string = '';
  retiroFecha: string = '';
  retiroHora: string = '';
  entregaFecha: string = '';
  entregaHora: string = '';
  detallesActividad: string[] = [];
  observaciones: string[] = [];
  logo: string = 'assets/images/cybertronica.png';
  firma: string = 'assets/images/firma.png';

  constructor(
    private informeTecnicoService: InformeTecnicoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.informeTecnicoService.detalleId(id).subscribe(
      data => {
        this.informeTecnico = data;
        switch (data.tipo) {
          case 1:
            this.tipoServicio = 'Preventivo';
            break;
          case 2:
            this.tipoServicio = 'Correctivo';
            break;
          case 3:
            this.tipoServicio = 'Hardware';
            break;
          default:
            this.tipoServicio = 'Erróneo';
            break;
        }
        this.detallesActividad = data.servicioDetalle.split(';');
        this.observaciones = data.observaciones.split(';');
        this.datesToString(data);
      },
      error => {
        this.toastr.error(error.error.mensaje, 'Algo ha fallado', {
          timeOut:3000, positionClass:'toast-top-center'
        });
        this.router.navigate(['/informe']);
      }
    );
  }

  datesToString(informe: InformeTecnico) {
    const fechaRetiro = informe.fechaRetiro.split('T');
    this.retiroFecha = fechaRetiro[0];
    this.retiroHora = fechaRetiro[1].slice(0, 8);
    if(informe.fechaRecibe.length > 5) {
      const fechaRecibe = informe.fechaRecibe.split('T');
      this.entregaFecha = fechaRecibe[0];
      this.entregaHora = fechaRecibe[1].slice(0, 8);
    }
  }

}
