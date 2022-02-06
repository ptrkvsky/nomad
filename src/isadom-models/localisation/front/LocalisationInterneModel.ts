import { TypeLocalisationModel } from ".";

export interface LocalisationInterneModel {
  sNature: string;
  localisationId: number;
  sLibelle: string;
  sComplement: string;
  typeLocalisation: TypeLocalisationModel;
  bEmplacement: boolean;
  iFKEmplacementParDefaut: number;
  bUtilisableEnVisite: boolean;
}
