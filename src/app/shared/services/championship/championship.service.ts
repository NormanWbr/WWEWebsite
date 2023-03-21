import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChampionshipService {

  constructor(private _httpClient: HttpClient) {
  }

  getAllChampionships(): any {
    return this._httpClient.get('http://localhost:8080/championship/all');
  }

}
