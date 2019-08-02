import { Component, OnInit } from '@angular/core';
import {ModalFournisseurComponent} from './modal-fournisseur/modal-fournisseur.component';
import {NbWindowService} from '@nebular/theme';
import {ShowFournisseurComponent} from './show-fournisseur/show-fournisseur.component';
import {FournisseurService} from './fournisseur.service';

@Component({
  selector: 'ngx-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss'],
})
export class FournisseurComponent implements OnInit {

  source: any;
  constructor(private windowService: NbWindowService, private service: FournisseurService) { }

  ngOnInit() {
    this.service.getAllFournisseurs().subscribe(
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
      "nomFournisseur": {
        "title": 'Nom et Prénom',
        "type": 'String',

      },

      "entr": {
        "title": 'Société',
        "type": 'String',
      },

      "telF": {
        "title": 'N° Téléphone',
        "type": 'number',
      },

      "mailF": {
        "title": 'E-mail',
        "type": 'email',
      },

      "ville": {
        "title": 'Ville',
        "type": 'String',
      },


    },
  };

  openWindow() {
    localStorage.removeItem('e');
    localStorage.removeItem('idF');
    localStorage.setItem('e', '0');
    this.windowService.open(ModalFournisseurComponent,
      {"title": 'Ajouter un fournisseur'});
  }

  onCustom(event) {
    if (event.action === 'showAction') {
      localStorage.removeItem('e');
      localStorage.removeItem('idFournisseur');
      localStorage.setItem('idFournisseur', event.data.idFournisseur.toString());
      this.windowService.open(ShowFournisseurComponent,
        {
          "title": 'Aficher les informations du Fournisseur',
          "context": event.data.id});
    }
    if (event.action === 'editAction') {
      localStorage.removeItem('e');
      localStorage.removeItem('idFournisseur');
      localStorage.setItem('e', '1');
      localStorage.setItem('idFournisseur', event.data.idFournisseur.toString());
      this.windowService.open(ModalFournisseurComponent,
        {"title": 'Modifier les informations du Fournisseur', "context": event.data.id});
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm(`Vous êtes sur de supprimer ce Fournisseur?`)) {
      event.confirm.resolve(this.service.deleteFournisseurs(event.data.idFournisseur).subscribe(
        data => {
          this.source.filter(p => p !== event.data);
        }),
      );
    } else {
      event.confirm.reject();
    }
  }

}
