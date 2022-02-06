import { ConsommableModel } from ".";
import { TypePrestationModel } from "../../..";

export interface ConfigConsoSpecTiersVisiteModel {
  produit: ConsommableModel;
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
  typePrestation: TypePrestationModel;
  dDerniereLivraison: string;
  iQuantiteDerniereLivraison: number;
}
