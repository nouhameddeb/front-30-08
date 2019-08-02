import { Component, OnInit } from '@angular/core';
import {ModalDemandeComponent} from './modal-demande/modal-demande.component';
import {ShowDemandeComponent} from './show-demande/show-demande.component';
import {NbWindowService} from '@nebular/theme';
import {DemandeService} from './demande.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'ngx-demandeintervention',
  templateUrl: './demandeintervention.component.html',
  styleUrls: ['./demandeintervention.component.scss'],
})
export class DemandeinterventionComponent implements OnInit {
  source: any;
  constructor(private windowService: NbWindowService, private service: DemandeService) { }

  ngOnInit() {
    this.service.getAllDemandes().subscribe(
      data => { this.source = data;
      console.log(this.source);},
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
      "emission": {
        "title": 'N° émission',
        "type": 'length',

      },
      "dateDemande": {
        "title": 'Date demande',
        "type": 'Date',
        filter: true,
        valuePrepareFunction: (date) => {
          var raw = new Date(date);
          var formatted = new DatePipe('en-EN').transform(raw, 'dd MMM yyyy');
          return formatted;
        },
      },

      "machine": {
        "title": 'Machine',
        "type": 'string',

          valuePrepareFunction: (machine) => {
          var raw = machine.designation;
          return raw;
          },
      },
    },
  };

  openWindow() {
    localStorage.removeItem('e');
    localStorage.removeItem('idDemande');
    localStorage.setItem('e', '0');
    this.windowService.open(ModalDemandeComponent,
      {"title": 'Ajouter une demande'});
  }

  onCustom(event) {
    if (event.action === 'showAction') {
      localStorage.removeItem('e');
      localStorage.removeItem('idDemande');
      localStorage.setItem('idDemande', event.data.idDemande.toString());
      this.windowService.open(ShowDemandeComponent,
        {
          "title": 'Aficher les informations de la demande',
          "context": event.data.id});
    }
    if (event.action === 'editAction') {
      localStorage.removeItem('e');
      localStorage.removeItem('idDemande');
      localStorage.setItem('e', '1');
      localStorage.setItem('idDemande', event.data.idDemande.toString());
      this.windowService.open(ModalDemandeComponent,
        {"title": 'Modifier la machine', "context": event.data.id});
    }
  }
  onDeleteConfirm(event): void {
    if (window.confirm(`Vous êtes sur de supprimer cette machine?`)) {
      event.confirm.resolve(this.service.deleteDemandes(event.data.idDemande).subscribe(
        data => {
          this.source.filter(p => p !== event.data);
        }),
      );
    } else {
      event.confirm.reject();
    }
  }

}
