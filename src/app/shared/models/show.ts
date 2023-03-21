import {superstar} from "./superstar";

export interface show {
  id: number;
  name: string;
  frequency: string;
  image: string;
  superstars: superstar[];
}
