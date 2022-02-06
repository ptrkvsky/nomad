import { TypePrestationModel } from "../..";

export interface ObservanceModel {
  ID: number;
  typePrestation: TypePrestationModel;
  dureeTP: string;
  dureeCalculee: string;
  dureeEstimee: string;
  information: string;
  estInfoMedecin: boolean;
  debutUtilisation: string;
  finUtilisation: string;
  dureeUtilisation: string;
  dureeMediane: string;
  dernierReleve: string;
  derniereDuree: string;
}
