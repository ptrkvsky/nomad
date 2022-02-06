import { TiersModel } from "../..";
import { TypeEvenementModel } from "./TypeEvenementModel";

export interface EvenementModel {
  evenementID: number;
  typeEvenement: TypeEvenementModel;
  dateDebut: string;
  dateFin: string;
  annule: boolean;
  tiers: TiersModel;
}
