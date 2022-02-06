import { AppareilAPI, RetraitAPI } from ".";
import {
  AdresseAPI,
  LocalisationInterneAPI,
  TiersAPI,
  TypePrestationAPI,
} from "../../..";

export interface ConfigAppSpecTiersVisiteAPI {
  produit: AppareilAPI;
  sTypeConfig: string;
  dateInstallation: string;
  adresseInstallation: AdresseAPI;
  dateRetrait: string;
  localisationRetrait: LocalisationInterneAPI;
  preponderance: string;
  typePrestation: TypePrestationAPI;
  bAbsent: boolean;
  bPresent: boolean;
  bAjout: boolean;
  bRetrait: boolean;
  retrait: RetraitAPI;
  tiers: TiersAPI;
}
