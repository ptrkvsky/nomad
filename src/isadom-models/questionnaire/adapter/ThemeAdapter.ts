import { Adapter } from '../../_adapter';
import { ThemeAPI } from '../api';
import { ThemeModel } from '../front';
import { QuestionAdapter } from './QuestionAdapter';

export class ThemeAdapter extends Adapter<ThemeModel, ThemeAPI> {
  private questionAdapter = new QuestionAdapter();

  toClient(src: ThemeAPI): ThemeModel {
    return {
      themeID: src.iPKQuestionnaireDetail,
      libelle: src.sLibelle,
      ordre: src.iOrdre,
      questions: this.questionAdapter.toClients(src.tabQuestion),
    } as ThemeModel;
  }

  toAPI(src: ThemeModel): ThemeAPI {
    return {
      iPKQuestionnaireDetail: src.themeID,
      iOrdre: src.ordre,
      sLibelle: src.libelle,
      tabQuestion: this.questionAdapter.toAPIs(src.questions),
    } as ThemeAPI;
  }
}
