import { SousFamilleModel } from "./SousFamilleModel";
import { TypePrestationModel } from "../..";
export interface FamilleModel {
  idFamille: string;
  libelle: string;
  suiviCompteur: boolean;
  suiviReglage: boolean;
  observance: boolean;
  inactif: boolean;
  sousFamille: SousFamilleModel[];
  tTypePrestation: TypePrestationModel[];
}
