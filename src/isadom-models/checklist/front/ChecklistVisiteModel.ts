import { ChecklistModel } from '.';

export interface ChecklistVisiteModel extends ChecklistModel {
  typeVisiteID: string;
  libelleTypeVisite: string;
  libelleTypePrestation: string;
}
