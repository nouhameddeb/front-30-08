import {Injectable} from '@angular/core';
import {PagesComponent} from '../../pages.component';
import {HttpClient} from '@angular/common/http';
import {OutillageModel} from './outillage.model';

@Injectable({
  providedIn: 'root',
})
export class OutillageService {

  url = PagesComponent.urlConfig + '/outillages';

  constructor(protected httpClient: HttpClient) {
  }

  getAllOutillages() {
    return this.httpClient.get<OutillageModel[]>(this.url);
  }

  getOutillageById(idO: number) {
    return this.httpClient.get<OutillageModel>(this.url + '/' + idO);
  }

  addOutillages(outillage: OutillageModel) {
    return this.httpClient.post(this.url, outillage);
  }

  updateOutillages(outillage: OutillageModel) {
    return this.httpClient.put(this.url + '/' + outillage.idO, outillage);
  }

  deleteOutillages(idO: Number) {
    return this.httpClient.delete(this.url + '/' + idO);
  }
}
