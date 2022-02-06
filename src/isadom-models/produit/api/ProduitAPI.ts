import { TypeProduitAPI, FamilleAPI } from ".";
export interface ProduitAPI {
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
}
