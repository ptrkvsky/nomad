import { TypeLocalisationAPI } from "..";

export interface LocalisationAPI {
  sNature: string;
  localisationId: number;
  sLibelle: string;
  sComplement: string;
  typeLocalisation: TypeLocalisationAPI;
}
