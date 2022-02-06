import { QuestionnaireDefinitionAPI, ThemeAPI } from ".";
import { TiersAPI } from "../../tiers";

export interface QuestionnaireAPI {
  iPKQuestionnaire: number;
  iFKNautVisite: number;
  tiersQuestionne: TiersAPI;
  dGrille: string;
  iFKVisite: number;
  sFKGrille: string;
  iFKVisProgramme: number;
  iFKExamen: number;
  iScore: number;
  iScoreMax: number;
  sInformation: string;
  sInsert: string;
  sUpdate: string;
  bValide: boolean;
  tiersValidation: TiersAPI;
  dValide: string;
  tabTheme: ThemeAPI[];
  questionnaireDefinition: QuestionnaireDefinitionAPI;
}
