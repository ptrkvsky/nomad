import { SousFamilleAPI } from "./SousFamilleAPI";
import { TypePrestationAPI } from "../..";
export interface FamilleAPI {
  sPKFamille: string;
  sLibelle: string;
  bSuiviCompteur: boolean;
  bSuiviReglage: boolean;
  bObservance: boolean;
  bInactif: boolean;
  tSousFamille: SousFamilleAPI[];
  tTypePrestation: TypePrestationAPI[];
}
