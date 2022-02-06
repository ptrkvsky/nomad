import { TypePrestationModel } from ".";
import { TiersModel } from "../../..";
import { AdresseModel } from "../../../_front";


export interface PrestationModel {
  id: number;
  type: TypePrestationModel;
  timestampDemandePrestation: number;
  timestampDebutRealisation: number;
  timestampFin: number;
  tiersOrigine: TiersModel;
  medecinExerciceID: number;
  tiersContact: TiersModel;
  informationOrigine: string;
  timestampDemandeAppareillage: number;
  dureeTraitement: number;
  typeDureeTraitement: number;
  adresseAppareillage: AdresseModel;
  information: string;
  isRisqueVital: boolean;
  isALD: boolean;
  isProtocole: boolean;
  informationTraitement: string;
  isCollecteDechet: boolean;
  isAnnule: boolean;
  protocolID: number;
}
