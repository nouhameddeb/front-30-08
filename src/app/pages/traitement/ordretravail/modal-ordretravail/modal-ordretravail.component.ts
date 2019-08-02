import { Component, OnInit } from '@angular/core';
import {OrdreModel} from '../ordre.model';
import {OrdreService} from '../ordre.service';
import {Router} from '@angular/router';
import {NbWindowRef} from '@nebular/theme';
import {DemandeModel} from '../../demandeintervention/demande.model';
import {DemandeService} from '../../demandeintervention/demande.service';
import {MachineModel} from '../../../boiteaoutils/machine/machine.model';
import {MachineService} from '../../../boiteaoutils/machine/machine.service';
import {PiecesModel} from '../../../boiteaoutils/pieces/pieces.model';
import {PiecesService} from '../../../boiteaoutils/pieces/pieces.service';

@Component({
  selector: 'ngx-modal-ordretravail',
  templateUrl: './modal-ordretravail.component.html',
  styleUrls: ['./modal-ordretravail.component.scss'],
})
export class ModalOrdretravailComponent implements OnInit {
  ordre: OrdreModel;
  ARCM: string;
  demandes: DemandeModel[];
  demande: DemandeModel;
  //selectedItemNgModel: MachineModel;
  //selectedItemNgModel: DemandeModel;
  machines: MachineModel[];
  machine: MachineModel;
  piece: PiecesModel;
  pieces: PiecesModel[];


  constructor(private service: OrdreService, private router: Router, private serviceD: DemandeService,
              private windowRef: NbWindowRef, private serviceM: MachineService, private serviceP: PiecesService) { }

  ngOnInit() {

    this.serviceD.getAllDemandes().subscribe(
      (data: any) => { this.demandes= data; console.log(this.demandes)},
      error => {console.log('error');}
    );
    this.serviceM.getAllMachines().subscribe(
      (data: any) => { this.machines= data; console.log(this.machines)},
      error => {console.log('error');}
    );
    this.serviceP.getAllPieces().subscribe(
      (data: any) => { this.pieces= data; console.log(this.pieces)},
      error => {console.log('error');}
    );


    this.ordre = new OrdreModel();
    let e = localStorage.getItem('e');
    console.log(e);
    if (e === '0') {
      this.ARCM = 'Ajouter';
    }
    if (e === '1') {
      let id = localStorage.getItem('idOrdre');
      this.ARCM = 'Modifier';
      this.service.getOrdreById(+id).subscribe(
        data => {
          this.ordre = data;
        },
        error => {
          console.log('error');
        }
      );
    }
  }
  onAddRCM(){
    let e = localStorage.getItem('e');
    if ( e === '0' ) {
      this.service.addOrdres(this.ordre).subscribe(
        data => {
          localStorage.removeItem('e');
          localStorage.removeItem('idOrdre');
          this.windowRef.close();
          this.router.navigate(['/pages/traitement/refreshOrdre']);
        },

        error => {console.log('error'); });
    }
    if ( e === '1' ) {
      this.service.updateOrdres(this.ordre).subscribe(
        data => {
          localStorage.removeItem('e');
          localStorage.removeItem('idOrdre');
          this.windowRef.close();
          this.router.navigate(['/pages/traitement/refreshOrdre']);
        },
        error => {console.log('error'); });
    }
  }
  close(){
    this.windowRef.close();
  }
}
