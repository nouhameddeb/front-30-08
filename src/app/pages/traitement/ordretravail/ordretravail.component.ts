import { Component, OnInit } from '@angular/core';
import {ModalOrdretravailComponent} from './modal-ordretravail/modal-ordretravail.component';
import {NbWindowService} from '@nebular/theme';
import {ShowOrdretravailComponent} from './show-ordretravail/show-ordretravail.component';
import {OrdreService} from './ordre.service';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'ngx-ordretravail',
  templateUrl: './ordretravail.component.html',
  styleUrls: ['./ordretravail.component.scss'],
})
export class OrdretravailComponent implements OnInit {
  source: any;

  constructor(private windowService: NbWindowService, private service: OrdreService) { }

  ngOnInit() {
    this.service.getAllOrdres().subscribe(
      data => { this.source = data;
        console.log(this.source);},
      error => { console.log('erreur'); });
  }
  settings = {

    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      add: false,
      edit: false,
      position: 'right',
      custom: [
        {
          name: 'showAction',
          title: '<i class="nb-sunny" title="Afficher"></i>',
        },
        {
          name: 'editAction',
          title: '<i class="nb-edit" title="Edit"></i>',
        },
      ],
    },
    columns: {

      numOrdre: {
        title: 'N° Ordre de travail',
        type: 'length',
      },
      dateOT: {
        title: 'Date Création',
        type: 'Date',
        filter: true,
        valuePrepareFunction: (date) => {
          var raw = new Date(date);
          var formatted = new DatePipe('en-EN').transform(raw, 'dd MMM yyyy');
          return formatted;
        },

      },
    },
  };

  openWindow() {
    localStorage.removeItem('e');
    localStorage.removeItem('idOrdre');
    localStorage.setItem('e', '0');
    this.windowService.open(ModalOrdretravailComponent,
      {title: 'Ajouter un ordre de travail'});
  }

  onCustom(event) {
    if (event.action === 'showAction') {
      localStorage.removeItem('e');
      localStorage.removeItem('idOrdre');
      localStorage.setItem('idOrdre', event.data.idOrdre.toString());
      this.windowService.open(ShowOrdretravailComponent,
        {
          "title": 'Aficher les informations dun ordre de travail',
          "context": event.data.id});
    }
    if (event.action === 'editAction') {
      localStorage.removeItem('e');
      localStorage.removeItem('idOrdre');
      localStorage.setItem('e', '1');
      localStorage.setItem('idOrdre', event.data.idOrdre.toString());
      this.windowService.open(ModalOrdretravailComponent,
        {"title": 'Modifier un ordre', "context": event.data.id});
    }
  }
  onDeleteConfirm(event): void {
    if (window.confirm(`Vous êtes sur de supprimer cette machine?`)) {
      event.confirm.resolve(this.service.deleteOrdres(event.data.idOrdre).subscribe(
        data => {
          this.source.filter(p => p !== event.data);
        }),
      );
    } else {
      event.confirm.reject();
    }
  }

}
