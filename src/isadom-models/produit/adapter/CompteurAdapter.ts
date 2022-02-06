import { CompteurModel } from '../front/CompteurModel';
import { CompteurAPI } from '../api/CompteurAPI';
import { Adapter } from '../../_adapter';

export class CompteurAdapter extends Adapter<CompteurModel, CompteurAPI> {
  toClient(src: CompteurAPI): CompteurModel {
    return {
      produitDMId: src.iFKProduitDM,
      typeIntervention: src.sFKTypeIntervention,
      compteurPrecedent: src.iCompteurPrecedent,
      compteurActuel: src.iCompteurActuel,
      compteurCumule: src.iCompteurCumule,
      dateCompteurPrecedent: src.dCompteurPrecedent,
      compteurHS: src.bCompteurHS,
      termine: src.bTermine,
    };
  }

  toAPI(src: CompteurModel): CompteurAPI {
    return {
      iFKProduitDM: src.produitDMId,
      sFKTypeIntervention: src.typeIntervention,
      iCompteurPrecedent: src.compteurPrecedent,
      iCompteurActuel: src.compteurActuel,
      iCompteurCumule: src.compteurCumule,
      dCompteurPrecedent: src.dateCompteurPrecedent,
      bCompteurHS: src.compteurHS,
      bTermine: src.termine,
    };
  }
}
