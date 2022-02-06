import { TypeProduitAPI } from "./TypeProduitAPI";
import { FamilleAPI } from "./FamilleAPI";
import { MotifRetraitDMAPI } from "../appareil/api/MotifRetraitDMAPI";

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
