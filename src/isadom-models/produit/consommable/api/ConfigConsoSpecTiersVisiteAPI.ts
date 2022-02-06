import { ConsommableAPI } from ".";
import { TypePrestationAPI } from "../../..";

export interface ConfigConsoSpecTiersVisiteAPI {
  produit: ConsommableAPI;
  sTypeConfig: string;
  configCsoID: number;
  iQuantite: number;
  iFrequence: number;
  dDebut: string;
  dFin: string;
  bPreparation: boolean;
  bTest: boolean;
  sInformation: string;
  bAfficherCR: boolean;
  bAfficherOrdo: boolean;
  bAfficherGED: boolean;
  configCsoVisiteID: number;
  bAjoutConfig: boolean;
  bRetraitConfig: boolean;
  typePrestation: TypePrestationAPI;
  dDerniereLivraison: string;
  iQuantiteDerniereLivraison: number;
}
