import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private _httpClient : HttpClient) { }

  getAllShows(): any {
    return this._httpClient.get('http://localhost:8080/show/all');
  }

}
