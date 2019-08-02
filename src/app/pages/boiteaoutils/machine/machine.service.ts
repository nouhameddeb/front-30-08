import {PagesComponent} from '../../pages.component';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MachineModel} from './machine.model';

@Injectable({
  providedIn: 'root',
})
export class MachineService {

  url = PagesComponent.urlConfig + '/machines';

  constructor(protected httpClient: HttpClient) {
  }

  getAllMachines() {
    return this.httpClient.get<MachineModel[]>(this.url);
  }

  getMachineById(id: number) {
    return this.httpClient.get<MachineModel>(this.url + '/' + id);
  }

  addMachines(machine: MachineModel) {
    return this.httpClient.post(this.url, machine);
  }

  updateMachines(machine: MachineModel) {
    return this.httpClient.put(this.url + '/' + machine.idM, machine);
  }

  deleteMachines(id: Number) {
    return this.httpClient.delete(this.url + '/' + id);
  }
}
