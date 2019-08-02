import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-refresh-personnel',
  templateUrl: './refresh-personnel.component.html',
  styleUrls: ['./refresh-personnel.component.scss'],
})
export class RefreshPersonnelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/pages/boiteaoutils/personnel']);
  }

}
