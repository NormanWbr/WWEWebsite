import { Component } from '@angular/core';
import {SuperstarService} from "../../../shared/services/superstar.service";
import {superstar} from "../../../shared/models/superstar";

@Component({
  selector: 'app-read-all-superstar',
  templateUrl: './read-all-superstar.component.html',
  styleUrls: ['./read-all-superstar.component.scss']
})
export class ReadAllSuperstarComponent {

superstars : superstar[] = [];

  constructor(private _superstarService : SuperstarService) { }

  ngOnInit(): void {
    this._superstarService.getAllSuperstars().subscribe(
      (data : superstar[]) => {
        this.superstars = data;
      }
    )
  }

}
