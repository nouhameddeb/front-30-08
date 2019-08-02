import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-refresh-piece',
  templateUrl: './refresh-piece.component.html',
  styleUrls: ['./refresh-piece.component.scss'],
})
export class RefreshPieceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/pages/boiteaoutils/pieces']);
  }

}
