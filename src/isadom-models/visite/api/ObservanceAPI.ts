import { TypePrestationAPI } from "../..";

export interface ObservanceAPI {
  observanceVisiteID: number;
  typePrestation: TypePrestationAPI;
  rDureeTP: number;
  rDureeCalculee: number;
  rDureeEstimee: number;
  sInformation: string;
  bInfoMedecin: boolean;
  dDebutUtilisation: string;
  dFinUtilisation: string;
  iDureeUtilisation: number;
  iDureeMediane: number;
  dDernierReleve: string;
  rDerniereDuree: number;
}
