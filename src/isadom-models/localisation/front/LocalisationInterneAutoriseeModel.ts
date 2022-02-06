import { LocalisationInterneModel } from ".";

export interface LocalisationInterneAutoriseeModel
  extends LocalisationInterneModel {
  bLocalisationPreleveDMC: boolean;
  bLocalisationRetourDMC: boolean;
  bLocalisationPreleveDM: boolean;
  bLocalisationRetourDM: boolean;
}
