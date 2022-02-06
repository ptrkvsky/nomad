import { ReponseAPI } from ".";

export interface QuestionAPI {
  iPKQuestionnaireDetail: number;
  sLibelle: string;
  iOrdre: number;
  bItemPrioritaire: boolean;
  bComptabilise: boolean;
  tabReponsePossible: ReponseAPI[];
  reponseSaisie: ReponseAPI;
}
