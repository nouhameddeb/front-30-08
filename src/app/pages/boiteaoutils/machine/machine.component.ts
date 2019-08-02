import { Component, OnInit } from '@angular/core';
import {ModalMachineComponent} from './modal-machine/modal-machine.component';
import {NbWindowService} from '@nebular/theme';
import {MachineService} from './machine.service';
import {ShowMachineComponent} from './show-machine/show-machine.component';

@Component({
  selector: 'ngx-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss'],
})
export class MachineComponent implements OnInit {
source: any;
  constructor(private windowService: NbWindowService, private service: MachineService) { }

  ngOnInit() {
    this.service.getAllMachines().subscribe(
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
    localStorage.removeItem('idM');
    localStorage.setItem('e', '0');
    this.windowService.open(ModalMachineComponent,
      {"title": 'Ajouter une machine'});
  }
  onCustom(event) {
    if (event.action === 'showAction') {
      localStorage.removeItem('e');
      localStorage.removeItem('idM');
      localStorage.setItem('idM', event.data.idM.toString());
      this.windowService.open(ShowMachineComponent,
        {
          "title": 'Aficher les informations de la machine',
          "context": event.data.id});
    }
    if (event.action === 'editAction') {
      localStorage.removeItem('e');
      localStorage.removeItem('idM');
      localStorage.setItem('e', '1');
      localStorage.setItem('idM', event.data.idM.toString());
      this.windowService.open(ModalMachineComponent,
        {"title": 'Modifier la machine', "context": event.data.id});
    }
  }
  onDeleteConfirm(event): void {
    if (window.confirm(`Vous êtes sur de supprimer cette machine?`)) {
      event.confirm.resolve(this.service.deleteMachines(event.data.idM).subscribe(
        data => {
          this.source.filter(p => p !== event.data);
        }),
      );
    } else {
      event.confirm.reject();
    }
  }
}
