import { AppareilModel, RetraitModel } from ".";
import {
  AdresseModel,
  LocalisationInterneModel,
  TiersModel,
  TypePrestationModel,
} from "../../..";

export interface ConfigAppSpecTiersVisiteModel {
  produit: AppareilModel;
  sTypeConfig: string;
  dateInstallation: string;
  adresseInstallation: AdresseModel;
  dateRetrait: string;
  localisationRetrait: LocalisationInterneModel;
  preponderance: string;
  typePrestation: TypePrestationModel;
  bAbsent: boolean;
  bPresent: boolean;
  bAjout: boolean;
  bRetrait: boolean;
  retrait: RetraitModel;
  tiers: TiersModel;
}
