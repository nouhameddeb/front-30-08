import { Component, OnInit } from '@angular/core';
import {OrdreModel} from '../ordre.model';
import {OrdreService} from '../ordre.service';

@Component({
  selector: 'ngx-show-ordretravail',
  templateUrl: './show-ordretravail.component.html',
  styleUrls: ['./show-ordretravail.component.scss'],
})
export class ShowOrdretravailComponent implements OnInit {

  constructor(private service: OrdreService) { }
  ordre: object;

  ngOnInit() {
    this.ordre = null;
    let id = localStorage.getItem("idOrdre");
    this.service.getOrdreById(+id).subscribe(
      ordre =>{this.ordre = ordre;},
      error =>{console.log(error);}
    ); this.ordre = new OrdreModel();
  }

}
