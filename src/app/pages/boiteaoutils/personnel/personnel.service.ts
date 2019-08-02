import {Injectable} from '@angular/core';
import {PagesComponent} from '../../pages.component';
import {HttpClient} from '@angular/common/http';
import {PersonnelModel} from './personnel.model';


@Injectable({
  providedIn: 'root',
})
export class PersonnelService {

  url = PagesComponent.urlConfig + '/consultants';

  constructor(protected httpClient: HttpClient) {
  }

  getAllPersonnels() {
    return this.httpClient.get<PersonnelModel[]>(this.url);
  }

  getPersonnelById(idP: number) {
    return this.httpClient.get<PersonnelModel>(this.url + '/' + idP);
  }

  addPersonnels(personnel: PersonnelModel) {
    return this.httpClient.post(this.url, personnel);
  }

  updatePersonnels(personnel: PersonnelModel) {
    return this.httpClient.put(this.url + '/' + personnel.idP, personnel);
  }

  deletePersonnels(idP: Number) {
    return this.httpClient.delete(this.url + '/' + idP);
  }
}
