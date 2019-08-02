import { Component, OnInit } from '@angular/core';
import {PiecesModel} from '../pieces.model';
import {PiecesService} from '../pieces.service';
import {Router} from '@angular/router';
import {NbWindowRef} from '@nebular/theme';

@Component({
  selector: 'ngx-modal-piece',
  templateUrl: './modal-piece.component.html',
  styleUrls: ['./modal-piece.component.scss'],
})
export class ModalPieceComponent implements OnInit {
  ARCM: string;
  piece: PiecesModel;

  constructor(private service: PiecesService,
              private router: Router, private windowRef: NbWindowRef) {
  }

  ngOnInit() {
    this.piece = new PiecesModel();
    let e = localStorage.getItem('e');
    console.log(e);
    if (e === '0') {
      this.ARCM = 'Ajouter';
    }
    if (e === '1') {
      let id = localStorage.getItem('idPi');
      this.ARCM = 'Modifier';
      this.service.getPieceById(+id).subscribe(
        data => {
          this.piece = data;
        },
        error => {
          console.log('error');
        }
      );
    }

  }

  onAddRCM() {
    let e = localStorage.getItem('e');
    if (e === '0') {
      this.service.addPieces(this.piece).subscribe(
        data => {
          localStorage.removeItem('e');
          localStorage.removeItem('idPi');
          this.windowRef.close();
          this.router.navigate(['/pages/boiteaoutils/refreshPiece']);
        },
        error => {
          console.log('error');
        });
    }
    if (e === '1') {
      this.service.updatePieces(this.piece).subscribe(
        data => {
          localStorage.removeItem('e');
          localStorage.removeItem('idPi');
          this.windowRef.close();
          this.router.navigate(['/pages/boiteaoutils/refreshPiece']);
        },
        error => {
          console.log('error');
        });
    }
  }
  close(){
    this.windowRef.close();
  }
}
