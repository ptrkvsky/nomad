import { Adapter } from '../../../_adapter';
import { ConsommableConsommationDTOAPI } from '../api';
import { ConsommableConsommationDTOModel } from '../front';

export class ConsommableConsommationDTOAdapter extends Adapter<
  ConsommableConsommationDTOModel,
  ConsommableConsommationDTOAPI
> {
  toClient(
    src: ConsommableConsommationDTOAPI,
  ): ConsommableConsommationDTOModel {
    return {
      produitID: src.produitID,
      refProduit: src.sRefProduit,
      libelle: src.sLibelle,
      date: src.dMouvement,
      quantite: src.iQuantite,
    };
  }

  toAPI(src: ConsommableConsommationDTOModel): ConsommableConsommationDTOAPI {
    return {
      produitID: src.produitID,
      sRefProduit: src.refProduit,
      sLibelle: src.libelle,
      dMouvement: src.date,
      iQuantite: src.quantite,
    };
  }
}
