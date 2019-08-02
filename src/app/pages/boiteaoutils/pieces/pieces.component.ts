import { Component, OnInit } from '@angular/core';
import {ModalPieceComponent} from './modal-piece/modal-piece.component';
import {NbWindowService} from '@nebular/theme';
import {ShowPieceComponent} from './show-piece/show-piece.component';
import {PiecesService} from './pieces.service';

@Component({
  selector: 'ngx-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.scss'],
})
export class PiecesComponent implements OnInit {
source: any;
  constructor(private windowService: NbWindowService, private service: PiecesService) {
  }

  ngOnInit() {
    this.service.getAllPieces().subscribe(
      data => { this.source = data; },
      error => { console.log('erreur'); });

  }

  settings = {

    "delete": {
      "deleteButtonContent": '<i class="nb-trash"></i>',
      "confirmDelete": true,
    },
    "actions": {
      "add": false,
      "edit": false,
      "position": 'right',
      "custom": [
        {
          "name": 'showAction',
          "title": '<i class="nb-sunny" title="Afficher"></i>',
        },
        {
          "name": 'editAction',
          "title": '<i class="nb-edit" title="Edit"></i>',
        },
      ],
    },
    "columns": {

      "refP": {
        "title": 'Référence',
        "type": 'string',
      },
      "designationP": {
        "title": 'Désignation',
        "type": 'string',
      },
      "libelleP": {
        "title": 'Libellé',
        "type": 'string',
      },
      "quantiteP": {
        "title": 'Quantité en stock',
        "type": 'length',
      },
    },
  };
  openWindow() {
    localStorage.removeItem('e');
    localStorage.removeItem('idPi');
    localStorage.setItem('e', '0');
    this.windowService.open(ModalPieceComponent,
      {"title": 'Ajouter une pièce'});
  }
  onCustom(event) {
    if (event.action === 'showAction') {
      localStorage.removeItem('e');
      localStorage.removeItem('idPi');
      localStorage.setItem('idPi', event.data.idPi.toString());
      this.windowService.open(ShowPieceComponent,
        {
          "title": 'Aficher plus de détails de cette pièce',
          "context": event.data.idPi});
    }
    if (event.action === 'editAction') {
      localStorage.removeItem('e');
      localStorage.removeItem('idPi');
      localStorage.setItem('e', '1');
      localStorage.setItem('idPi', event.data.idPi.toString());
      this.windowService.open(ModalPieceComponent,
        {"title": 'Modifier la pièce', "context": event.data.idPi});
    }
  }

}
