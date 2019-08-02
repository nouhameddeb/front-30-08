import { Component, OnInit } from '@angular/core';
import {NbWindowRef} from '@nebular/theme';
import {MachineService} from '../machine.service';
import {MachineModel} from '../machine.model';

@Component({
  selector: 'ngx-show-machine',
  templateUrl: './show-machine.component.html',
  styleUrls: ['./show-machine.component.scss'],
})
export class ShowMachineComponent implements OnInit {

  constructor(private windowRef: NbWindowRef, private service: MachineService) { }
machine : object;
  ngOnInit() {
    this.machine = null;
    let id = localStorage.getItem("idM");
    this.service.getMachineById(+id).subscribe(
      machine =>{this.machine = machine;},
      error =>{console.log(error);}
    ); this.machine = new MachineModel();

  }

  close() {
    this.windowRef.close();
  }

}
