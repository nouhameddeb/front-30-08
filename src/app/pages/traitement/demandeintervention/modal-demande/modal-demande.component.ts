import { Component, OnInit } from '@angular/core';
import {DemandeModel} from '../demande.model';
import {Router} from '@angular/router';
import {NbWindowRef} from '@nebular/theme';
import {DemandeService} from '../demande.service';
import {MachineModel} from '../../../boiteaoutils/machine/machine.model';
import {MachineService} from '../../../boiteaoutils/machine/machine.service';

@Component({
  selector: 'ngx-modal-demande',
  templateUrl: './modal-demande.component.html',
  styleUrls: ['./modal-demande.component.scss'],
})
export class ModalDemandeComponent implements OnInit {
  selectedItemNgModel: MachineModel;
  machines: MachineModel[];
  machine: MachineModel;
  ARCM: string;
  demande: DemandeModel;

  constructor(private service: DemandeService, private serviceM: MachineService,
              private router: Router, private windowRef: NbWindowRef) {
  }

  ngOnInit() {
    //afficher liste des machines
    this.serviceM.getAllMachines().subscribe(
      (data: any) => { this.machines= data; console.log(this.machines)},
      error => {console.log('error');}
    );

    this.demande = new DemandeModel();
    let e = localStorage.getItem('e');
    console.log(e);
    if (e === '0') {
      this.ARCM = 'Ajouter';
    }
    if (e === '1') {
      let id = localStorage.getItem('idDemande');
      this.ARCM = 'Modifier';
      this.service.getDemandeById(+id).subscribe(
        data => {
          this.demande = data;
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
      this.service.addDemandes(this.demande).subscribe(
        data => {
          localStorage.removeItem('e');
          localStorage.removeItem('idDemande');
          this.windowRef.close();
          this.router.navigate(['/pages/traitement/refreshDemande']);
        },

        error => {console.log('error'); });
    }
    if ( e === '1' ) {
      this.service.updateDemandes(this.demande).subscribe(
        data => {
          localStorage.removeItem('e');
          localStorage.removeItem('idDemande');
          this.windowRef.close();
          this.router.navigate(['/pages/traitement/refreshDemande']);
        },
        error => {console.log('error'); });
    }
  }
  close(){
    this.windowRef.close();
  }
}
