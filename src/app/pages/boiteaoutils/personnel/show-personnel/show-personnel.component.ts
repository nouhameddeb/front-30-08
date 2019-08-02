import { Component, OnInit } from '@angular/core';
import {NbWindowRef} from '@nebular/theme';
import {PersonnelService} from '../personnel.service';
import {PersonnelModel} from '../personnel.model';

@Component({
  selector: 'ngx-show-personnel',
  templateUrl: './show-personnel.component.html',
  styleUrls: ['./show-personnel.component.scss'],
})
export class ShowPersonnelComponent implements OnInit {

  constructor(private windowRef: NbWindowRef, private service: PersonnelService) { }
  personnel: object;

  ngOnInit() {
    this.personnel =null;
    let idP = localStorage.getItem("idP");
    this.service.getPersonnelById(+idP).subscribe(
      personnel =>{this.personnel = personnel;},
      error =>{console.log(error);}
    ); this.personnel = new PersonnelModel();
  }
  close() {
    this.windowRef.close();
  }

}
