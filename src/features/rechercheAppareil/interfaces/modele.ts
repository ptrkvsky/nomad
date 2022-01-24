import { TypeProduitAPI } from './typeProduit';
import { FamilleAPI } from './famille';
import { MotifRetraitDMAPI } from './motifRetraitDM';

export interface ModeleAPI {
  IDProduit: number;
  sRefProduit: string;
  sFKTypeProduit: string;
  sCodeNatureProduit: string;
  sLibelle: string;
  sRefFabricant: string;
  bInactif: boolean;
  bPrevisionInactif: boolean;
  dArretCdeInterne: string;
  bArretCommande: boolean;
  typeProduit: TypeProduitAPI;
  famille: FamilleAPI;
  iPKModele: number;
  bSuiviCompteur: boolean;
  tabMotifRetraitDM: MotifRetraitDMAPI[];
}
