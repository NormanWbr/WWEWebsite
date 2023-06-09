import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SuperstarService {

  constructor(private _httpClient : HttpClient) { }
  getAllSuperstars(): any {
    return this._httpClient.get('http://localhost:8080/superstar/all');
  }
}
