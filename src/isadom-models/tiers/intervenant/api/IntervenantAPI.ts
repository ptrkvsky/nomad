import { LocalisationInterneAutoriseeAPI } from "../../../localisation/api/LocalisationInterneAutoriseeAPI";
import { TypeVisiteAPI } from "../../../visite/api/TypeVisiteAPI";
import { AdresseAPI } from "../../../localisation/api/AdresseAPI";
import { TypePrestationAPI } from "../../..";

export interface IntervenantAPI {
  iPKTiers: number;
  sCodeTiers: string;
  sPrenom: string;
  sNom: string;
  sTypeTiers: string;
  sMail: string;
  sTelgsm: string;
  adressePrincipale: AdresseAPI;
  tAdresse: AdresseAPI[];
  sFKFonction: string;
  sFKEquipe: string;
  bReleveCompteur: boolean;
  tLocalisationAutorise: LocalisationInterneAutoriseeAPI[];
  tTypePrestaAutorise: TypePrestationAPI[];
  tTypeVisiteAutorise: TypeVisiteAPI[];
}
