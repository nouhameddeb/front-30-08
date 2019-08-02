import { Component, OnInit } from '@angular/core';
import {DemandeService} from '../demande.service';
import {DemandeModel} from '../demande.model';

@Component({
  selector: 'ngx-show-demande',
  templateUrl: './show-demande.component.html',
  styleUrls: ['./show-demande.component.scss'],
})
export class ShowDemandeComponent implements OnInit {

  constructor(private service: DemandeService) { }
  demande: object;

  ngOnInit() {
    this.demande = null;
    let id = localStorage.getItem("idDemande");
    this.service.getDemandeById(+id).subscribe(
      demande =>{this.demande = demande;},
      error =>{console.log(error);}
    ); this.demande = new DemandeModel();
  }

}
