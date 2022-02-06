import { AppareilAPI } from ".";
import { LocalisationAPI } from "../../../localisation/api/LocalisationAPI";

export interface ConfigAppareilHistoriqueSpecTiers {
  produit: AppareilAPI;
  sTypeConfig: string;
  dateInstallation: string;
  dateRetrait: string;
  preponderance: string;
  commentaireInstallation: string;
  commentaireRetrait: string;
  localisationDepartRetrait: LocalisationAPI;
  localisationArriveeRetrait: LocalisationAPI;
  affectation: string;
}
