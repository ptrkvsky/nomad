import { TypePrestationAPI } from "../..";

export interface TypeVisiteAPI {
  sPKTypeVisite: string;
  sLibelle: string;
  bLivraisonPossible: boolean;
  bDesappareillage: boolean;
  bPrestationObligatoire: boolean;
  iDelaiControleRdv: number;
  bSuiviCompteur: boolean;
  bSaisieSmart: boolean;
  bInactif: boolean;
  tTypePrestation: TypePrestationAPI[];
}
