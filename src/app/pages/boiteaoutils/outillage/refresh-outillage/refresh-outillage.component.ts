import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-refresh-outillage',
  templateUrl: './refresh-outillage.component.html',
  styleUrls: ['./refresh-outillage.component.scss'],
})
export class RefreshOutillageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/pages/boiteaoutils/outillage']);
  }

}
