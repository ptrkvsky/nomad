import { ProduitAPI } from "../../api/ProduitAPI";

export interface ConfigBO2SpecTiers {
  produit: ProduitAPI;
  sTypeConfig: string;
  idConfigBO2: number;
  iQuantite: number;
  sInformation: string;
}
