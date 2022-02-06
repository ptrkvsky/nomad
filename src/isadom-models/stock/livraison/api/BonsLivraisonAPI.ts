import { AffectationProduitAPI } from "./AffectationProduitAPI";
import { TypePrestationAPI } from "../../../medical/prestation/api/TypePrestationAPI";
import { AppareilAPI } from "../../../produit/appareil/api/AppareilAPI";
import { ConsommableAPI } from "../../../produit/consommable/api/ConsommableAPI";
import { LotAPI } from "../../../produit/consommable/api/LotAPI";

export interface BonsLivraisonAPI {
  ligneLivraisonID: number;
  consommable: ConsommableAPI;
  iQuantite: number;
  affectationProduit: AffectationProduitAPI;
  lot: LotAPI;
  typePrestation: TypePrestationAPI;
  appareil: AppareilAPI;
}
