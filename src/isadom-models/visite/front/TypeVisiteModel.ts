import { TypePrestationModel } from "../..";

export interface TypeVisiteModel {
  sPKTypeVisite: string;
  sLibelle: string;
  bLivraisonPossible: boolean;
  bDesappareillage: boolean;
  bPrestationObligatoire: boolean;
  iDelaiControleRdv: number;
  bSuiviCompteur: boolean;
  bSaisieSmart: boolean;
  bInactif: boolean;
  tTypePrestation: TypePrestationModel[];
}
