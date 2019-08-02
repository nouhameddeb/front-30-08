import {Injectable} from '@angular/core';
import {PagesComponent} from '../../pages.component';
import {HttpClient} from '@angular/common/http';
import {FournisseurModel} from './fournisseur.model';

@Injectable({
  providedIn: 'root',
})
export class FournisseurService {

  url = PagesComponent.urlConfig + '/fournisseurs';

  constructor(protected httpClient: HttpClient) {
  }

  getAllFournisseurs() {
    return this.httpClient.get<FournisseurModel[]>(this.url);
  }

  getFournisseurById(id: number) {
    return this.httpClient.get<FournisseurModel>(this.url + '/' + id);
  }

  addFournisseurs(fournisseur: FournisseurModel) {
    return this.httpClient.post(this.url, fournisseur);
  }

  updateFournisseurs(fournisseur: FournisseurModel) {
    return this.httpClient.put(this.url + '/' + fournisseur.idFournisseur, fournisseur);
  }

  deleteFournisseurs(id: Number) {
    return this.httpClient.delete(this.url + '/' + id);
  }
}
