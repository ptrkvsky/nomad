import { TypeLocalisationAPI } from "..";

export interface AdresseAPI {
  iPKAdresse: number;
  typeLocalisation: TypeLocalisationAPI;
  sAdresseComplete: string;
  sAdresseSansCPVille: string;
  sAdresseAvecRC: string;
  sCodePostal: string;
  sVille: string;
  sTelFixe: string;
  sTelAutre: string;
  sTelInformation: string;
  sLibelle: string;
  sNumeroVoie: string;
  sAdresse: string;
  dDebut: string;
  dFin: string;
  bEnCours: boolean;
  bAdressePrincipale: boolean;
}
