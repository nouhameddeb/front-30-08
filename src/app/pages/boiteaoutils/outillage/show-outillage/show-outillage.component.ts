import { Component, OnInit } from '@angular/core';
import {NbWindowRef} from '@nebular/theme';
import {OutillageService} from '../outillage.service';
import {OutillageModel} from '../outillage.model';

@Component({
  selector: 'ngx-show-outillage',
  templateUrl: './show-outillage.component.html',
  styleUrls: ['./show-outillage.component.scss'],
})
export class ShowOutillageComponent implements OnInit {

  constructor(private windowRef: NbWindowRef, private service: OutillageService) { }
  outillage: object;

  ngOnInit() {
    this.outillage = null;
    let idO = localStorage.getItem("idO");
    this.service.getOutillageById(+idO).subscribe(
      outillage =>{this.outillage = outillage;},
      error =>{console.log(error);}
    ); this.outillage = new OutillageModel();
  }

  close() {
    this.windowRef.close();
  }

}
