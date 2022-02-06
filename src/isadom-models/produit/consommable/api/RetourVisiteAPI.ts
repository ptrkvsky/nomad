import { ConsommableAPI, LotAPI } from ".";
import { LocalisationInterneAPI } from "../../..";

export interface RetourVisiteAPI {
  ligneRetourID: number;
  consommable: ConsommableAPI;
  iQuantite?: number;
  lot?: LotAPI;
  localisationRetour?: LocalisationInterneAPI;
}
