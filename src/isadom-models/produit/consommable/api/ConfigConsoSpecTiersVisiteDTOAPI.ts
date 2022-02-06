interface ProduitDTO {
  IDproduit: number;
}
interface TypePrestationDTO {
  sPKTypePrestation: string;
}
export interface ConfigConsoSpecTiersVisiteDTOAPI {
  produit: ProduitDTO;
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
  typePrestation?: TypePrestationDTO;
  dDerniereLivraison?: string;
  iQuantiteDerniereLivraison?: number;
}
