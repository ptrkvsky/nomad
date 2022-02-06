import { ThemeAPI } from ".";
import { TiersAPI } from "../../tiers";

export interface QuestionnaireDefinitionAPI {
  sPKGrille: string;
  sLibelle: string;
  bEvalTherapeutique: boolean;
  bScore: boolean;
  iTotalScore: number;
  iCPParGrille: number;
  sListesFKTypeVisite: string;
  bValidation: boolean;
  tiersValidation: TiersAPI;
  sFKFonctionValidation: string;
  sLibelleCalcul: string;
  sCalcul: string;
  bInactif: boolean;
  bPublication: boolean;
  tabTheme: ThemeAPI[];
}
