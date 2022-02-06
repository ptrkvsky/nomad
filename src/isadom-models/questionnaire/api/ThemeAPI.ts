import { QuestionAPI } from ".";

export interface ThemeAPI {
  iPKQuestionnaireDetail: number;
  sLibelle: string;
  iOrdre: number;
  tabQuestion: QuestionAPI[];
}
