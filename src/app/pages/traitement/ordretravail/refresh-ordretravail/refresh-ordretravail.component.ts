import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-refresh-ordretravail',
  templateUrl: './refresh-ordretravail.component.html',
  styleUrls: ['./refresh-ordretravail.component.scss']
})
export class RefreshOrdretravailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/pages/traitement/ordretravail']);
  }

}
