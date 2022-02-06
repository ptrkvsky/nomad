import { QuestionAPI } from '../api';
import { QuestionModel } from '../front';
import { ReponseAdapter } from './ReponseAdapter';

export class QuestionAdapter {
  private reponseAdapater = new ReponseAdapter();

  toClients(srcs: any[]): any[] {
    const result: any[] = [];
    for (const src of srcs) {
      result.push(this.toClient(src));
    }
    return result;
  }

  toAPIs(srcs: any[]): any[] {
    const result: any[] = [];
    for (const src of srcs) {
      result.push(this.toAPI(src));
    }
    return result;
  }

  toClient(src: QuestionAPI): QuestionModel {
    return {
      questionID: src.iPKQuestionnaireDetail,
      comptabilise: src.bComptabilise,
      itemPrioritaire: src.bItemPrioritaire,
      libelle: src.sLibelle,
      ordre: src.iOrdre,
      reponseSaisie: this.reponseAdapater.toClient(src.reponseSaisie),
      reponsesPossibles: this.reponseAdapater.toClients(src.tabReponsePossible),
    } as QuestionModel;
  }

  toAPI(src: QuestionModel): QuestionAPI {
    return {
      iPKQuestionnaireDetail: src.questionID,
      bComptabilise: src.comptabilise,
      bItemPrioritaire: src.itemPrioritaire,
      iOrdre: src.ordre,
      sLibelle: src.libelle,
      reponseSaisie: this.reponseAdapater.toAPI(src.reponseSaisie),
      tabReponsePossible: this.reponseAdapater.toAPIs(src.reponsesPossibles),
    } as QuestionAPI;
  }
}
