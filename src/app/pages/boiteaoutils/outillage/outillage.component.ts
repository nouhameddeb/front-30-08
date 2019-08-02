import { Component, OnInit } from '@angular/core';
import {ModalOutillageComponent} from './modal-outillage/modal-outillage.component';
import {NbWindowService} from '@nebular/theme';
import {OutillageService} from './outillage.service';
import {ShowOutillageComponent} from './show-outillage/show-outillage.component';
import {ModalMachineComponent} from "../machine/modal-machine/modal-machine.component";

@Component({
  selector: 'ngx-outillage',
  templateUrl: './outillage.component.html',
  styleUrls: ['./outillage.component.scss'],
})
export class OutillageComponent implements OnInit {
source: any;
  constructor(private windowService: NbWindowService, private service: OutillageService) { }

  ngOnInit() {
   this.service.getAllOutillages().subscribe(
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
      "designationO": {
        "title": 'Désignation',
        "type": 'string',
      },
      "refO": {
        "title": 'Référence',
        "type": 'string',
      },

      "libelleO": {
        "title": 'Libellé',
        "type": 'string',
      },
      "typeO": {
        "title": 'Type outils',
        "type": 'length',
      },

    },
  };
  openWindow() {
    localStorage.removeItem('e');
    localStorage.removeItem('idO');
    localStorage.setItem('e', '0');
    this.windowService.open(ModalOutillageComponent,
      {"title": 'Ajouter un outillage'});
  }

  onCustom(event) {
    if (event.action === 'showAction') {
      localStorage.removeItem('e');
      localStorage.removeItem('idO');
      localStorage.setItem('idO', event.data.idO.toString());
      this.windowService.open(ShowOutillageComponent,
        {
          "title": 'Aficher les informations de la machine',
          "context": event.data.id});
    }
    if (event.action === 'editAction') {
      localStorage.removeItem('e');
      localStorage.removeItem('idO');
      localStorage.setItem('e', '1');
      localStorage.setItem('idO', event.data.idO.toString());
      this.windowService.open(ModalOutillageComponent,
        {"title": 'Modifier la machine', "context": event.data.idO});
    }
  }
  onDeleteConfirm(event): void {
    if (window.confirm(`Vous êtes sur de supprimer cette machine?`)) {
      event.confirm.resolve(this.service.deleteOutillages(event.data.idO).subscribe(
        data => {
          this.source.filter(p => p !== event.data);
        }),
      );
    } else {
      event.confirm.reject();
    }
  }

}
