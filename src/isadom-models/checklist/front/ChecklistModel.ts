import { TacheModel } from '.';
export class ChecklistModel {
  reference!: string;
  referenceID!: string;
  taches!: TacheModel[];
  libelle!: string;

  public compareTo(objectToCompare: any): any {
    if (this.libelle < objectToCompare.libelle) {
      return -1;
    } else if (this.libelle > objectToCompare.libelle) {
      return 1;
    } else {
      return 0;
    }
  }
}
