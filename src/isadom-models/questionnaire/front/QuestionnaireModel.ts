import { ThemeModel, TypeQuestionnaireModel } from ".";
import { TiersModel } from "../../tiers";

export interface QuestionnaireModel {
  questionnaireID: number;
  status: QuestionnaireModelStatus,
  nautVisiteID: number;
  tiersQuestionne?: TiersModel;
  dateSaisie: string;
  visiteID: number;
  visProgrammeID: number;
  examenID: number;
  score: number;
  scoreMax: number;
  information: string;
  gereValidation: boolean;
  tiersValidation?: TiersModel;
  dateValidation: string;
  themes?: ThemeModel[];
  typeQuestionnaire: TypeQuestionnaireModel;
}

export enum QuestionnaireModelStatus {
  TO_CREATE_ON_CLICK, NOTHING
}
