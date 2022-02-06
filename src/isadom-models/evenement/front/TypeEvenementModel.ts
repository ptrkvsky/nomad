import { PPT } from "../../PPT";

export interface TypeEvenementModel {
  typeEvenementID: string;
  libelle: string;
  periodeValidite: boolean;
  patient: boolean;
  reserver: boolean;
  consentement: boolean;
  finPeriodeObligatoire: boolean;
  precisionObligatoire: boolean;
  precision: PPT[];
}
