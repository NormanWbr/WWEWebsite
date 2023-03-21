import {Component, OnInit} from '@angular/core';
import {TeamService} from "../../../shared/services/team/team.service";
import {superstar} from "../../../shared/models/superstar";
import {team} from "../../../shared/models/team";

@Component({
  selector: 'app-read-all-team',
  templateUrl: './read-all-team.component.html',
  styleUrls: ['./read-all-team.component.scss']
})
export class ReadAllTeamComponent implements OnInit{

  teams: team[] = [];

  constructor(private _teamService: TeamService) { }

  ngOnInit(): void {
    this._teamService.getAllTeams().subscribe(
      (data : team[]) => {
        this.teams = data;
      }
    )
  }

}
