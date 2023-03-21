import {superstar} from "./superstar";

export interface team {
  id: number;
  name: string;
  heel: boolean,
  superstars: superstar[]
}
