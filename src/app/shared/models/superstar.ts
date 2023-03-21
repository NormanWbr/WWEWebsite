import {show} from "./show";
import {championship} from "./championship";
import {team} from "./team";

export interface superstar{
  id: number;
  name: string;

  gender: string;

  height: number;

  weight: number;

  entranceMusic: string;

  prises: any[];

  team: team;

  shows: show[];

  championships: championship[];

  heel: boolean;

  image: string;

}

// "id": 1,
//   "name": "John Cena",
//   "gender": "MALE",
//   "height": 180.0,
//   "weight": 120.0,
//   "entranceMusic": "You can't see me",
//   "prises": [],
//   "team": null,
//   "shows": [],
//   "championships": [],
//   "heel": false
