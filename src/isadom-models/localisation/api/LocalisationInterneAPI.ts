import { TypeLocalisationAPI } from "./TypeLocalisationAPI";

export interface LocalisationInterneAPI {
  sNature: string;
  localisationId: number;
  sLibelle: string;
  sComplement: string;
  typeLocalisation: TypeLocalisationAPI;
  bEmplacement: boolean;
  iFKEmplacementParDefaut: number;
  bUtilisableEnVisite: boolean;
}
