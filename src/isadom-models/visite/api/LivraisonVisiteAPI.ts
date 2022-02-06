import { TypePrestationAPI } from "../..";
import { AppareilAPI, ConsommableAPI, LotAPI } from "../../produit";

export interface LivraisonVisiteAPI {
  idLigneLivraison: number;
  consommable: ConsommableAPI;
  iQuantite: number;
  lot: LotAPI;
  typePrestation: TypePrestationAPI;
  appareil: AppareilAPI;
}
