import { Component, OnInit } from '@angular/core';
import {FacturesService} from '../factures.service';
import {FacturesModel} from '../factures.model';
import {NbWindowRef} from '@nebular/theme';

@Component({
  selector: 'ngx-show-facture',
  templateUrl: './show-facture.component.html',
  styleUrls: ['./show-facture.component.scss'],
})
export class ShowFactureComponent implements OnInit {

  constructor(private service: FacturesService, private windowRef: NbWindowRef) { }
  facture: object;

  ngOnInit() {
    this.facture = null;
    let id = localStorage.getItem("idF");
    this.service.getFactureById(+id).subscribe(
      facture =>{this.facture= facture;},
      error =>{console.log(error);}
    ); this.facture = new FacturesModel();
    }
close() {
  this.windowRef.close();
}
}
