import { Component, OnInit } from '@angular/core';
import {NbWindowRef} from '@nebular/theme';
import {PiecesService} from '../pieces.service';
import {PiecesModel} from '../pieces.model';

@Component({
  selector: 'ngx-show-piece',
  templateUrl: './show-piece.component.html',
  styleUrls: ['./show-piece.component.scss']
})
export class ShowPieceComponent implements OnInit {

  constructor(private windowRef: NbWindowRef, private service: PiecesService) { }
  piece: object;

  ngOnInit() {
    this.piece = null;
    let id = localStorage.getItem("idPi");
    this.service.getPieceById(+id).subscribe(
      piece =>{this.piece = piece;},
      error =>{console.log(error);}
    ); this.piece = new PiecesModel();
  }
  close() {
    this.windowRef.close();
  }

}
