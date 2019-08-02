import {Injectable} from '@angular/core';
import {PagesComponent} from '../../pages.component';
import {HttpClient} from '@angular/common/http';
import {DemandeModel} from './demande.model';
@Injectable({
  providedIn: 'root',
})
export class DemandeService {

  url = PagesComponent.urlConfig + '/demandes';

  constructor(protected httpClient: HttpClient) {
  }

  getAllDemandes() {
    return this.httpClient.get<DemandeModel[]>(this.url);
  }

  getDemandeById(id: number) {
    return this.httpClient.get<DemandeModel>(this.url + '/' + id);
  }

  addDemandes(demande: DemandeModel) {
    return this.httpClient.post(this.url, demande);
  }

  updateDemandes(demande: DemandeModel) {
    return this.httpClient.put(this.url + '/' + demande.idDemande, demande);
  }

  deleteDemandes(id: Number) {
    return this.httpClient.delete(this.url + '/' + id);
  }
}
