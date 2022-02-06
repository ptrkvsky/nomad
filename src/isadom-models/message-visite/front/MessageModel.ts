import { TypeObjetModel } from "./TypeObjetModel";
import { DestinataireModel } from "./DestinataireModel";

export interface MessageModel {
  ID: number;
  typeObjet: TypeObjetModel;
  objet: string;
  corps: string;
  destinatairesPrincipaux: DestinataireModel[];
}
