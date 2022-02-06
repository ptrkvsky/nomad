import { ReponseAPI } from '../api';
import { ReponseModel } from '../front';

export class ReponseAdapter {
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

  toClient(src: ReponseAPI): ReponseModel {
    return {
      reponseID: src.iPKQuestionnaireDetail,
      information: src.sInformation,
      libelle: src.sLibelle,
      ordre: src.iOrdre,
      score: src.iScore,
      valeur: src.sValeur,
    } as ReponseModel;
  }

  toAPI(src: ReponseModel): ReponseAPI {
    return {
      iPKQuestionnaireDetail: src.reponseID,
      iOrdre: src.ordre,
      iScore: src.score,
      sInformation: src.information,
      sLibelle: src.libelle,
      sValeur: src.valeur,
    } as ReponseAPI;
  }
}
