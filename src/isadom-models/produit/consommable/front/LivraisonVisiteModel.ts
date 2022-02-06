import { ConsommableModel, LotModel } from ".";
import { AppareilModel } from "../../..";
import { TypePrestationModel } from "../../..";

export interface LivraisonVisiteModel {
  ligneLivraisonID: number;
  consommable: ConsommableModel;
  iQuantite?: number;
  lot?: LotModel;
  typePrestation?: TypePrestationModel;
  appareil?: AppareilModel;
}
