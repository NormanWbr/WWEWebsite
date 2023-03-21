import {superstar} from "./superstar";

export interface championship {
  id: number;
  name: string;
  description: string;
  image: string;

  superstars: superstar[];
}
