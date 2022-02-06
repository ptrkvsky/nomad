import { LocalisationInterneAPI } from "../api/LocalisationInterneAPI";

export interface LocalisationInterneAutoriseeAPI
  extends LocalisationInterneAPI {
  bLocalisationPreleveDMC: boolean;
  bLocalisationRetourDMC: boolean;
  bLocalisationPreleveDM: boolean;
  bLocalisationRetourDM: boolean;
}
