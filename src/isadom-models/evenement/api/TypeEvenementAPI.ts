import { PPT } from "../../PPT";

export interface TypeEvenementAPI {
  typeEvenementID: string;
  sLibelle: string;
  bPeriodeValidite: boolean;
  bPatient: boolean;
  bReserver: boolean;
  bConsentement: boolean;
  bFinPeriodeObligatoire: boolean;
  bPrecisionObligatoire: boolean;
  tPrecision: PPT[];
}
