import {Injectable} from '@angular/core';
import {PagesComponent} from '../../pages.component';
import {HttpClient} from '@angular/common/http';
import {OrdreModel} from './ordre.model';

@Injectable({
  providedIn: 'root',
})
export class OrdreService {

  url = PagesComponent.urlConfig + '/ordres';

  constructor(protected httpClient: HttpClient) {
  }

  getAllOrdres() {
    return this.httpClient.get<OrdreModel[]>(this.url);
  }

  getOrdreById(id: number) {
    return this.httpClient.get<OrdreModel>(this.url + '/' + id);
  }

  addOrdres(ordre: OrdreModel) {
    return this.httpClient.post(this.url, ordre);
  }

  updateOrdres(ordre: OrdreModel) {
    return this.httpClient.put(this.url + '/' + ordre.idOrdre, ordre);
  }

  deleteOrdres(id: Number) {
    return this.httpClient.delete(this.url + '/' + id);
  }
}
