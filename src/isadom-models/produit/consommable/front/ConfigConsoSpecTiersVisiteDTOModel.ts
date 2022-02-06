export interface ConfigConsoSpecTiersVisiteDTOModel {
  produitID: number;
  sTypeConfig?: string;
  configCsoID?: number;
  iQuantite?: number;
  iFrequence?: number;
  dDebut?: string;
  dFin?: string;
  bPreparation?: boolean;
  bTest?: boolean;
  sInformation?: string;
  bAfficherCR?: boolean;
  bAfficherOrdo?: boolean;
  bAfficherGED?: boolean;
  configCsoVisiteID?: number;
  bAjoutConfig: boolean;
  bRetraitConfig: boolean;
  typePrestationID?: string;
  dDerniereLivraison?: string;
  iQuantiteDerniereLivraison?: number;
}
