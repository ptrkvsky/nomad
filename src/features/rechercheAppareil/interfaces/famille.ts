import { SousFamilleAPI } from './sousFamille';
import { TypePrestationAPI } from './typePrestation';

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
