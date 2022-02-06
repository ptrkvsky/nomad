import { LocalisationInterneAutoriseeModel } from "../../..";
import { TypePrestationModel } from "../../..";
import { TypeVisiteModel } from "../../..";
import { AdresseModel } from "../../..";

export interface IntervenantModel {
  iPKTiers: number;
  sCodeTiers: string;
  sPrenom: string;
  sNom: string;
  sTypeTiers: string;
  sMail: string;
  sTelgsm: string;
  adressePrincipale: AdresseModel;
  tAdresse: AdresseModel[];
  sFKFonction: string;
  sFKEquipe: string;
  bReleveCompteur: boolean;
  tLocalisationAutorise: LocalisationInterneAutoriseeModel[];
  tTypePrestaAutorise: TypePrestationModel[];
  tTypeVisiteAutorise: TypeVisiteModel[];
}
