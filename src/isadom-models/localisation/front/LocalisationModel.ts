import { TypeLocalisationModel } from ".";
export interface LocalisationModel {
  nature: string;
  localisationId: number;
  libelle: string;
  complement: string;
  typeLocalisation: TypeLocalisationModel;
}
