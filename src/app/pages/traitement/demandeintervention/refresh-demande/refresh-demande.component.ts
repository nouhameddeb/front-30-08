import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-refresh-demande',
  templateUrl: './refresh-demande.component.html',
  styleUrls: ['./refresh-demande.component.scss'],
})
export class RefreshDemandeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    this.router.navigate(['/pages/traitement/demandeintervention']);
  }

}
