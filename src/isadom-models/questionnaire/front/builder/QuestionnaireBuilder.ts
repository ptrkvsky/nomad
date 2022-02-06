import { QuestionnaireModel, TypeQuestionnaireModel } from '..';
import { TiersModel } from '../../../tiers';
import { QuestionnaireModelStatus } from '../QuestionnaireModel';
import { ThemeModel } from '../ThemeModel';

export class QuestionnaireModelBuilder {
  private questionnaireID!: number;
  private status!: QuestionnaireModelStatus;
  private nautVisiteID!: number;
  private tiersQuestionne?: TiersModel | undefined;
  private dateSaisie!: string;
  private visiteID!: number;
  private visProgrammeID!: number;
  private examenID!: number;
  private score!: number;
  private scoreMax!: number;
  private information!: string;
  private gereValidation!: boolean;
  private tiersValidation?: TiersModel | undefined;
  private dateValidation!: string;
  private themes?: ThemeModel[] | undefined;
  private typeQuestionnaire!: TypeQuestionnaireModel;

  build() {
    return {
      questionnaireID: this.questionnaireID,
      status: this.status,
      dateSaisie: this.dateSaisie,
      dateValidation: this.dateValidation,
      examenID: this.examenID,
      gereValidation: this.gereValidation,
      information: this.information,
      nautVisiteID: this.nautVisiteID,
      score: this.score,
      scoreMax: this.scoreMax,
      typeQuestionnaire: this.typeQuestionnaire,
      visProgrammeID: this.visProgrammeID,
      visiteID: this.visiteID,
      themes: this.themes,
      tiersQuestionne: this.tiersQuestionne,
      tiersValidation: this.tiersValidation,
    } as QuestionnaireModel;
  }

  setTypeQuestionnaire(
    typeQuestionnaire: TypeQuestionnaireModel,
  ): QuestionnaireModelBuilder {
    this.gereValidation = typeQuestionnaire.besoinValidation;
    this.scoreMax = typeQuestionnaire.scoreMax;
    this.typeQuestionnaire = typeQuestionnaire;
    this.themes = typeQuestionnaire.themes;
    return this;
  }

  setStatus(status: QuestionnaireModelStatus): QuestionnaireModelBuilder {
    this.status = status;
    return this;
  }
}
