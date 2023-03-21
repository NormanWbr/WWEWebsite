import {Component, OnInit} from '@angular/core';
import {ChampionshipService} from "../../../shared/services/championship/championship.service";
import {championship} from "../../../shared/models/championship";

@Component({
  selector: 'app-read-all-championship',
  templateUrl: './read-all-championship.component.html',
  styleUrls: ['./read-all-championship.component.scss']
})
export class ReadAllChampionshipComponent implements OnInit{

  championships: championship[] = [];

  constructor(private _championshipService : ChampionshipService) { }

  ngOnInit(): void {
    this._championshipService.getAllChampionships().subscribe((data: championship[]) => {
      this.championships = data;
    });
  }

}
