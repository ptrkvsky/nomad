import { MotifRetraitDMAPI } from ".";
import { CompteurAPI } from ".";
import { LocalisationInterneAPI } from "../../../localisation";

export interface RetraitAPI {
  localisation: LocalisationInterneAPI;
  motif: MotifRetraitDMAPI;
  compteur: CompteurAPI;
}
