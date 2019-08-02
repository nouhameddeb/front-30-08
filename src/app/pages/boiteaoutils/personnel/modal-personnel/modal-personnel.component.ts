import { Component, OnInit } from '@angular/core';
import {PersonnelModel} from '../personnel.model';
import {PersonnelService} from '../personnel.service';
import {Router} from '@angular/router';
import {NbWindowRef} from '@nebular/theme';


@Component({
  selector: 'ngx-modal-personnel',
  templateUrl: './modal-personnel.component.html',
  styleUrls: ['./modal-personnel.component.scss'],
})
export class ModalPersonnelComponent implements OnInit {
  ARCM: string;
  personnel: PersonnelModel;
  constructor(private service: PersonnelService,
              private router: Router, private windowRef: NbWindowRef) { }

  ngOnInit() {
    this.personnel = new PersonnelModel();
    let e = localStorage.getItem('e');
    console.log(e);
    if ( e === '0' ) {
      this.ARCM = 'Ajouter';
    }
    if ( e === '1' ) {
      let id = localStorage.getItem('idP');
      this.ARCM = 'Modifier';
      this.service.getPersonnelById(+id).subscribe(
        data => { this.personnel = data; },
        error => { console.log('error'); }
      );
    }
  }
  onAddRCM(){
    let e = localStorage.getItem('e');
    if ( e === '0' ) {
      this.service.addPersonnels(this.personnel).subscribe(
        data => {
          localStorage.removeItem('e');
          localStorage.removeItem('idP');
          this.windowRef.close();
          this.router.navigate(['/pages/boiteaoutils/refreshPersonnel']);
        },
        error => {console.log('error'); });
    }
    if ( e === '1' ) {
      this.service.updatePersonnels(this.personnel).subscribe(
        data => {
          localStorage.removeItem('e');
          localStorage.removeItem('idP');
          this.windowRef.close();
          this.router.navigate(['/pages/boiteaoutils/refreshPersonnel']);
        },
        error => {console.log('error'); });
    }
  }
}
