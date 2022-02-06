import { ChecklistAPI, TacheVisiteAPI } from '.';

export interface ChecklistVisiteAPI extends ChecklistAPI {
  typeVisiteID: string;
  tTacheVisite: TacheVisiteAPI[];
  libelleTypeVisite: string;
  libelleTypePrestation: string;
}
