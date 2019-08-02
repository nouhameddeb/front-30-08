import {Injectable} from '@angular/core';
import {PagesComponent} from '../../pages.component';
import {HttpClient} from '@angular/common/http';
import {PiecesModel} from './pieces.model';

@Injectable({
  providedIn: 'root',
})
export class PiecesService {

  url = PagesComponent.urlConfig + '/pieces';

  constructor(protected httpClient: HttpClient) {
  }

  getAllPieces() {
    return this.httpClient.get<PiecesModel[]>(this.url);
  }

  getPieceById(id: number) {
    return this.httpClient.get<PiecesModel>(this.url + '/' + id);
  }

  addPieces(pieces: PiecesModel) {
    return this.httpClient.post(this.url, pieces);
  }

  updatePieces(pieces: PiecesModel) {
    return this.httpClient.put(this.url + '/' + pieces.idPi, pieces);
  }

  deletePieces(id: Number) {
    return this.httpClient.delete(this.url + '/' + id);
  }
}
