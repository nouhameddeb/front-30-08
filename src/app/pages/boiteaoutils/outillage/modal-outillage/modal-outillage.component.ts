import { Component, OnInit } from '@angular/core';
import {OutillageModel} from '../outillage.model';
import {OutillageService} from '../outillage.service';
import {Router} from '@angular/router';
import {NbWindowRef} from '@nebular/theme';

@Component({
  selector: 'ngx-modal-outillage',
  templateUrl: './modal-outillage.component.html',
  styleUrls: ['./modal-outillage.component.scss'],
})
export class ModalOutillageComponent implements OnInit {
  ARCM: string;
  outillage: OutillageModel;
  constructor(private service: OutillageService, private router: Router,
              private windowRef: NbWindowRef) { }

  ngOnInit() {
    this.outillage = new OutillageModel();
    let e = localStorage.getItem('e');
    console.log(e);
    if ( e === '0' ) {
      this.ARCM = 'Ajouter';
    }
    if ( e === '1' ) {
      let idO = localStorage.getItem('idO');
      this.ARCM = 'Modifier';
      this.service.getOutillageById(+idO).subscribe(
        data => { this.outillage = data; },
        error => { console.log('error'); }
      );
    }

  }
  onAddRCM(){
    let e = localStorage.getItem('e');
    if ( e === '0' ) {
      this.service.addOutillages(this.outillage).subscribe(
        data => {
          localStorage.removeItem('e');
          localStorage.removeItem('idO');
          this.windowRef.close();
          this.router.navigate(['/pages/boiteaoutils/refreshOutillage']);
        },
        error => {console.log('error'); });
    }
    if ( e === '1' ) {
      this.service.updateOutillages(this.outillage).subscribe(
        data => {
          localStorage.removeItem('e');
          localStorage.removeItem('idO');
          this.windowRef.close();
          this.router.navigate(['/pages/boiteaoutils/refreshOutillage']);
        },
        error => {console.log('error'); });
    }
  }

}
