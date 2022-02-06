import { FamilleModel, TypeProduitModel } from ".";
import { MotifRetraitDMModel } from "..";
export interface ModeleModel {
  produitId: number;
  refProduit: string;
  typeProduitFK: string;
  codeNatureProduit: string;
  libelle: string;
  refFabricant: string;
  inactif: boolean;
  previsionInactif: boolean;
  arretCdeInterne: string;
  arretCommande: boolean;
  typeProduit: TypeProduitModel;
  famille: FamilleModel;
  modeleId: number;
  suiviCompteur: boolean;
  motifRetraitDM: MotifRetraitDMModel[];
}
