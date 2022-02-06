import { TiersAPI } from "../..";
import { TypeEvenementAPI } from "./TypeEvenementAPI";

export interface EvenementAPI {
  evenementID: number;
  typeEvenement: TypeEvenementAPI;
  dDebut: string;
  dFin: string;
  bAnnule: boolean;
  tiers: TiersAPI;
}
