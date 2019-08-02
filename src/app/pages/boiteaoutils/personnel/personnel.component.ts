import { Component, OnInit } from '@angular/core';
import {ModalPersonnelComponent} from './modal-personnel/modal-personnel.component';
import {NbWindowService} from '@nebular/theme';
import {PersonnelService} from './personnel.service';

@Component({
  selector: 'ngx-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss'],
})
export class PersonnelComponent implements OnInit {
  source: any;

  constructor(private windowService: NbWindowService, private service: PersonnelService) {
  }

  ngOnInit() {
    this.service.getAllPersonnels().subscribe(
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
      "designation": {
        "title": 'Désignation',
        "type": 'string',
      },
      "code": {
        "title": 'Code',
        "type": 'length',
      },

      "libelle": {
        "title": 'Libellé',
        "type": 'string',
      },
      "reference": {
        "title": 'Référence',
        "type": 'string',
      },
    },
  };

  openWindow() {
    localStorage.removeItem('e');
    localStorage.removeItem('idP');
    localStorage.setItem('e', '0');
    this.windowService.open(ModalPersonnelComponent,
      {"title": 'Nouveau Personnel'});
  }
}
