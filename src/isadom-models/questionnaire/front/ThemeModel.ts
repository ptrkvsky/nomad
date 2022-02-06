import { QuestionModel } from ".";

export interface ThemeModel {
  themeID: number;
  libelle: string;
  ordre: number;
  questions: QuestionModel[];
}
