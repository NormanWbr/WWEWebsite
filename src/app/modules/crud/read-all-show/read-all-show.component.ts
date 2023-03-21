import {Component, OnInit} from '@angular/core';
import {ShowService} from "../../../shared/services/show/show.service";
import {show} from "../../../shared/models/show";

@Component({
  selector: 'app-read-all-show',
  templateUrl: './read-all-show.component.html',
  styleUrls: ['./read-all-show.component.scss']
})
export class ReadAllShowComponent implements OnInit {

  shows: show[] = [];

  constructor(private _showService: ShowService) {
  }

  ngOnInit(): void {
    this._showService.getAllShows().subscribe(
      (data: show[]) => {
        this.shows = data;
      }
    );
  }


}
