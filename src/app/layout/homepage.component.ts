import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SignaturePad} from "angular2-signaturepad";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit{

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  images: string[] = [];

  public signaturePadOptions: Object = {
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300,
  }

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 5);
    this.signaturePad.clear()
  }

  drawComplete() {
    this.images.push(this.signaturePad.toDataURL('png', 100));
    this.router.navigate(['/']);

  }

  drawStart() {
    console.log('begin drawing');
  }
}
