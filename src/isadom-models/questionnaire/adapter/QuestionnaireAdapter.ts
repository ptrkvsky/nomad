import { TiersAdapter } from '../../tiers';
import { Adapter } from '../../_adapter';
import { QuestionnaireAPI } from '../api';
import { QuestionnaireModel } from '../front';
import { ThemeAdapter } from './ThemeAdapter';
import { TypeQuestionnaireAdapter } from './TypeQuestionnaireAdapter';

export class QuestionnaireAdapter extends Adapter<
  QuestionnaireModel,
  QuestionnaireAPI
> {
  toClient(src: QuestionnaireAPI): QuestionnaireModel {
    const questionnaire = {
      dateSaisie: src.dGrille,
      dateValidation: src.dValide,
      examenID: src.iFKExamen,
      gereValidation: src.bValide,
      information: src.sInformation,
      nautVisiteID: src.iFKNautVisite,
      questionnaireID: src.iPKQuestionnaire,
      score: src.iScore,
      scoreMax: src.iScoreMax,
      themes: src.tabTheme && new ThemeAdapter().toClients(src.tabTheme),
      tiersQuestionne:
        src.tiersQuestionne && new TiersAdapter().toClient(src.tiersQuestionne),
      tiersValidation:
        src.tiersValidation && new TiersAdapter().toClient(src.tiersValidation),
      typeQuestionnaire: new TypeQuestionnaireAdapter().toClient(
        src.questionnaireDefinition,
      ),
      visProgrammeID: src.iFKVisProgramme,
      visiteID: src.iFKVisite,
    } as QuestionnaireModel;

    //Les réponses possible ne sont qu'au niveau du type
    //=> on ajoute les réponses possible au niveau du questionnaire
    if (
      questionnaire.typeQuestionnaire.themes &&
      (!questionnaire.themes || questionnaire.themes.length === 0)
    ) {
      questionnaire.themes = questionnaire.typeQuestionnaire.themes;
    } else if (questionnaire.themes && questionnaire.typeQuestionnaire.themes) {
      for (let i = 0; i < questionnaire.themes.length; i++) {
        for (let j = 0; j < questionnaire.themes[i].questions.length; j++) {
          for (
            let k = 0;
            k < questionnaire.typeQuestionnaire.themes.length;
            k++
          ) {
            for (
              let l = 0;
              l < questionnaire.typeQuestionnaire.themes[k].questions.length;
              l++
            ) {
              if (
                questionnaire.themes[i].questions[j].libelle ===
                questionnaire.typeQuestionnaire.themes[k].questions[l].libelle
              ) {
                questionnaire.themes[i].questions[j].reponsesPossibles =
                  questionnaire.typeQuestionnaire.themes[k].questions[
                    l
                  ].reponsesPossibles;
              }
            }
          }
        }
      }
    }

    return questionnaire;
  }

  toAPI(src: QuestionnaireModel): QuestionnaireAPI {
    const type = new TypeQuestionnaireAdapter().toAPI(src.typeQuestionnaire);
    return {
      bValide: src.gereValidation,
      dGrille: src.dateSaisie,
      dValide: src.dateValidation,
      iFKExamen: src.examenID,
      iFKNautVisite: src.nautVisiteID,
      iFKVisProgramme: src.visProgrammeID,
      iFKVisite: src.visiteID,
      iPKQuestionnaire: src.questionnaireID,
      iScore: src.score,
      iScoreMax: src.scoreMax,
      questionnaireDefinition: type,
      sFKGrille: type.sPKGrille, // TODO FBR check this with back,
      sInformation: src.information,
      sInsert: '', // TODO FBR check this with back
      sUpdate: '', // TODO FBR check this with back
      tabTheme: src.themes && new ThemeAdapter().toAPIs(src.themes),
      tiersQuestionne:
        src.tiersQuestionne && new TiersAdapter().toAPI(src.tiersQuestionne),
      tiersValidation:
        src.tiersValidation && new TiersAdapter().toAPI(src.tiersValidation),
    } as QuestionnaireAPI;
  }
}
