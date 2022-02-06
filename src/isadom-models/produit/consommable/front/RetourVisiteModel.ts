import { ConsommableModel, LotModel } from ".";
import { LocalisationInterneModel } from "../../..";

export interface RetourVisiteModel {
  ligneRetourID: number;
  consommable: ConsommableModel;
  iQuantite?: number;
  lot?: LotModel;
  localisationRetour?: LocalisationInterneModel;
}
