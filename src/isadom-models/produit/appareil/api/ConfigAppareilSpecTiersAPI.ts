import { AppareilAPI } from "..";
import { LocalisationInterneAPI } from "../../../localisation/api/LocalisationInterneAPI";
import { TiersAPI } from "../../../tiers";
import { AdresseAPI } from "../../../localisation/api/AdresseAPI";
import { TypePrestationAPI } from "../../..";

export interface ConfigAppareilSpecTiersAPI {
  produit: AppareilAPI;
  sTypeConfig: string;
  dateInstallation: string;
  adresseInstallation: AdresseAPI;
  dateRetrait: string;
  localisationRetrait: LocalisationInterneAPI;
  preponderance: string;
  typePrestation: TypePrestationAPI;
  tiers: TiersAPI;
}
