import { AffectationProduitModel } from "./AffectationProduitModel";
import { TypePrestationModel } from "../../../medical";
import { AppareilModel } from "../../../produit/appareil/front";
import { ConsommableModel, LotModel } from "../../../produit/consommable/front";

export interface BonsLivraisonModel {
  ligneLivraisonId: number;
  consommable: ConsommableModel;
  quantite: number;
  affectationProduit: AffectationProduitModel;
  lot: LotModel;
  typePrestation: TypePrestationModel;
  appareil: AppareilModel;
}
