import { ThemeModel } from ".";
import { TiersModel } from "../../tiers";

export interface TypeQuestionnaireModel {
  typeQuestionnaireID: string;
  iCPParGrille: number; //DEPRECATED
  libelle: string;
  evalTherapeutique: boolean;
  gereScore: boolean;
  scoreMax: number;
  publication: boolean;
  inactif: boolean;
  besoinValidation: boolean;
  fonctionValidationID: string;
  tiersValidation?: TiersModel;
  libelleCalcul: string;
  calcul: string;
  typeVisites: string,
  themes?: ThemeModel[];
}
