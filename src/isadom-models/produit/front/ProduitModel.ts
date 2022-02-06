import { TypeProduitModel } from "../front/TypeProduitModel";
import { FamilleModel } from "../../produit/front/FamilleModel";
export interface ProduitModel {
  produit: number;
  refProduit: string;
  typeProduitSecondaire: string;
  codeNatureProduit: string;
  libelle: string;
  refFabricant: string;
  inactif: boolean;
  previsionInactif: boolean;
  arretCdeInterne: string;
  arretCommande: boolean;
  typeProduit: TypeProduitModel;
  famille: FamilleModel;
}
