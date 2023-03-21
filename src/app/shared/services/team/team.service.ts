import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private _httpClient : HttpClient) { }
  getAllTeams(): any {
    return this._httpClient.get('http://localhost:8080/team/all');
  }

}
