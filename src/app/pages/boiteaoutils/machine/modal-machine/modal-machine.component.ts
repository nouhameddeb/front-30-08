import { Component, OnInit } from '@angular/core';
import {MachineModel} from '../machine.model';
import {MachineService} from '../machine.service';
import {Router} from '@angular/router';
import {NbWindowRef} from '@nebular/theme';


@Component({
  selector: 'ngx-modal-machine',
  templateUrl: './modal-machine.component.html',
  styleUrls: ['./modal-machine.component.scss'],
})
export class ModalMachineComponent implements OnInit {
  ARCM: string;
  machine: MachineModel;
  constructor(private service: MachineService,
              private router: Router, private windowRef: NbWindowRef) { }

  ngOnInit() {

    this.machine = new MachineModel();
    let e = localStorage.getItem('e');
    console.log(e);
    if ( e === '0' ) {
      this.ARCM = 'Ajouter';
    }
    if ( e === '1' ) {
      let id = localStorage.getItem('idM');
      this.ARCM = 'Modifier';
      this.service.getMachineById(+id).subscribe(
        data => { this.machine = data; },
        error => { console.log('error'); }
      );
    }
  }
  onAddRCM(){
    let e = localStorage.getItem('e');
    if ( e === '0' ) {
      this.service.addMachines(this.machine).subscribe(
        data => {
          localStorage.removeItem('e');
          localStorage.removeItem('idM');
          this.windowRef.close();
          this.router.navigate(['/pages/boiteaoutils/refreshMachine']);
        },
        error => {console.log('error'); });
    }
    if ( e === '1' ) {
      this.service.updateMachines(this.machine).subscribe(
        data => {
          localStorage.removeItem('e');
          localStorage.removeItem('idM');
          this.windowRef.close();
          this.router.navigate(['/pages/boiteaoutils/refreshMachine']);
        },
        error => {console.log('error'); });
    }
  }
  close(){
    this.windowRef.close();
  }
}

