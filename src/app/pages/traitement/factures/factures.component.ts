import { Component, OnInit } from '@angular/core';
import {ModalFactureComponent} from './modal-facture/modal-facture.component';
import {NbWindowService} from '@nebular/theme';
import {FacturesService} from './factures.service';
import {ShowFactureComponent} from './show-facture/show-facture.component';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'ngx-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.scss'],
})
export class FacturesComponent implements OnInit {
source: any;
  constructor(private windowService: NbWindowService, private service: FacturesService) { }

  ngOnInit()  {
    this.service.getAllFactures().subscribe(
      data => { this.source = data; },
      error => { console.log('erreur'); });
  }

  settings = {

    "delete": {
      "deleteButtonContent": '<i class="nb-trash" title="Delete"></i>',
      "confirmDelete": true,
    },
    "actions": {
      "add": false,
      "edit": false,
      "position": 'right',
      "custom": [
        {
          "name": 'showAction',
          "title": '<i class="nb-sunny" title="Show"></i>',
        },
        {
          "name": 'editAction',
          "title": '<i class="nb-edit" title="Edit"></i>',
        },
      ],
    },
    "columns": {
      "numFacture": {
        "title": 'N° Facture',
        "type": 'length',
      },
      "dateF": {
        "title": 'Date facture',
        "type": 'Date',
        /*valuePrepareFunction: (date) => {
          var raw = new Date(date);
          var formatted = new DatePipe('en-EN').transform(raw, 'dd MMM yyyy');
          return formatted;*/
      },
    },
  };

  openWindow() {
    localStorage.removeItem('e');
    localStorage.removeItem('idF');
    localStorage.setItem('e', '0');
    this.windowService.open(ModalFactureComponent,
      {"title": 'Ajouter une facture'});
  }

  onCustom(event) {
    if (event.action === 'showAction') {
      localStorage.removeItem('e');
      localStorage.removeItem('idF');
      localStorage.setItem('idF', event.data.idF.toString());
      this.windowService.open(ShowFactureComponent,
        {
          "title": 'Aficher les informations de la demande',
          "context": event.data.id});
    }
    if (event.action === 'editAction') {
      localStorage.removeItem('e');
      localStorage.removeItem('idF');
      localStorage.setItem('e', '1');
      localStorage.setItem('idF', event.data.idF.toString());
      this.windowService.open(ModalFactureComponent,
        {"title": 'Modifier la machine', "context": event.data.id});
    }
  }
  onDeleteConfirm(event): void {
    if (window.confirm(`Vous êtes sur de supprimer cette machine?`)) {
      event.confirm.resolve(this.service.deleteFactures(event.data.idF).subscribe(
        data => {
          this.source.filter(p => p !== event.data);
        }),
      );
    } else {
      event.confirm.reject();
    }
  }


}
