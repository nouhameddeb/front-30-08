import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-refresh-machine',
  templateUrl: './refresh-machine.component.html',
  styleUrls: ['./refresh-machine.component.scss'],
})
export class RefreshMachineComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/pages/boiteaoutils/machine']);
  }

}
