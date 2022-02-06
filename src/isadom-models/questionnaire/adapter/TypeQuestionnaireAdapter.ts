import { TiersAdapter } from '../../tiers';
import { QuestionnaireDefinitionAPI } from '../api';
import { TypeQuestionnaireModel } from '../front';
import { ThemeAdapter } from './ThemeAdapter';

export class TypeQuestionnaireAdapter {
  private themeAdapater = new ThemeAdapter();
  private tiersAdapter = new TiersAdapter();

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

  toClient(src: QuestionnaireDefinitionAPI): TypeQuestionnaireModel {
    return {
      typeQuestionnaireID: src.sPKGrille,
      besoinValidation: src.bValidation,
      evalTherapeutique: src.bEvalTherapeutique,
      gereScore: src.bScore,
      iCPParGrille: src.iCPParGrille,
      inactif: src.bInactif,
      libelle: src.sLibelle,
      publication: src.bPublication,
      scoreMax: src.iTotalScore,
      calcul: src.sCalcul,
      fonctionValidationID: src.sFKFonctionValidation,
      libelleCalcul: src.sLibelleCalcul,
      themes: this.themeAdapater.toClients(src.tabTheme),
      tiersValidation: this.tiersAdapter.toClient(src.tiersValidation),
    } as TypeQuestionnaireModel;
  }

  toAPI(src: TypeQuestionnaireModel): QuestionnaireDefinitionAPI {
    return {
      sPKGrille: src.typeQuestionnaireID,
      bEvalTherapeutique: src.evalTherapeutique,
      bInactif: src.inactif,
      bPublication: src.publication,
      bScore: src.gereScore,
      bValidation: src.besoinValidation,
      iCPParGrille: src.iCPParGrille,
      iTotalScore: src.scoreMax,
      sCalcul: src.calcul,
      sFKFonctionValidation: src.fonctionValidationID,
      sLibelle: src.libelle,
      sLibelleCalcul: src.libelleCalcul,
      sListesFKTypeVisite: src.typeVisites,
      tabTheme: src.themes && this.themeAdapater.toAPIs(src.themes),
      tiersValidation:
        src.tiersValidation && this.tiersAdapter.toAPI(src.tiersValidation),
    } as QuestionnaireDefinitionAPI;
  }
}
