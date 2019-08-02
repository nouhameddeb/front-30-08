import {Injectable} from '@angular/core';
import {PagesComponent} from '../../pages.component';
import {HttpClient} from '@angular/common/http';
import {FacturesModel} from './factures.model';

@Injectable({
  providedIn: 'root',
})
export class FacturesService {

  url = PagesComponent.urlConfig + '/factures';

  constructor(protected httpClient: HttpClient) {
  }

  getAllFactures() {
    return this.httpClient.get<FacturesModel[]>(this.url);
  }

  getFactureById(id: number) {
    return this.httpClient.get<FacturesModel>(this.url + '/' + id);
  }

  addFactures(facture: FacturesModel) {
    return this.httpClient.post(this.url, facture);
  }

  updateFactures(facture: FacturesModel) {
    return this.httpClient.put(this.url + '/' + facture.idF, facture);
  }

  deleteFactures(id: Number) {
    return this.httpClient.delete(this.url + '/' + id);
  }
}
