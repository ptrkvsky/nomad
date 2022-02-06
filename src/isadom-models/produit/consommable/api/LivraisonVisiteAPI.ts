import { ConsommableAPI, LotAPI } from ".";
import { AppareilAPI } from "../..";
import { TypePrestationAPI } from "../../..";

export interface LivraisonVisiteAPI {
  ligneLivraisonID: number;
  consommable: ConsommableAPI;
  iQuantite?: number;
  lot?: LotAPI;
  typePrestation?: TypePrestationAPI;
  appareil?: AppareilAPI;
}
