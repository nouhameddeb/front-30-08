import { Component, OnInit } from '@angular/core';
import {FacturesModel} from '../factures.model';
import {FacturesService} from '../factures.service';
import {NbWindowRef} from '@nebular/theme';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-modal-facture',
  templateUrl: './modal-facture.component.html',
  styleUrls: ['./modal-facture.component.scss'],
})
export class ModalFactureComponent implements OnInit {
  ARCM: string;
  facture: FacturesModel;

  constructor(private service: FacturesService, private windowRef: NbWindowRef,
              private router: Router) { }

  ngOnInit() {
    this.facture = new FacturesModel();
    let e = localStorage.getItem('e');
    console.log(e);
    if (e === '0') {
      this.ARCM = 'Ajouter';
    }
    if (e === '1') {
      let id = localStorage.getItem('idF');
      this.ARCM = 'Modifier';
      this.service.getFactureById(+id).subscribe(
        data => {
          this.facture = data;
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
      this.service.addFactures(this.facture).subscribe(
        data => {
          localStorage.removeItem('e');
          localStorage.removeItem('idF');
          this.windowRef.close();
          this.router.navigate(['/pages/traitement/refreshFacture']);
        },

        error => {console.log('error'); });
    }
    if ( e === '1' ) {
      this.service.updateFactures(this.facture).subscribe(
        data => {
          localStorage.removeItem('e');
          localStorage.removeItem('idF');
          this.windowRef.close();
          this.router.navigate(['/pages/traitement/refreshFacture']);
        },
        error => {console.log('error'); });
    }
  }
  close(){
    this.windowRef.close();
  }

}
