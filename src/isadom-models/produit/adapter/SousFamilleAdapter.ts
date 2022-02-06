import { Adapter } from '../../_adapter';
import { SousFamilleAPI } from '..';
import { SousFamilleModel } from '../front';

export class SousFamilleAdapter extends Adapter<
  SousFamilleModel,
  SousFamilleAPI
> {
  toClient(src: SousFamilleAPI): SousFamilleModel {
    return {
      sousFamilleId: src.sPKSousFamille,
      famille: src.sFKFamille,
      libelle: src.sLibelle,
      inactif: src.bInactif,
    };
  }

  toAPI(src: SousFamilleModel): SousFamilleAPI {
    return {
      sPKSousFamille: src.sousFamilleId,
      sFKFamille: src.famille,
      sLibelle: src.libelle,
      bInactif: src.inactif,
    };
  }
}
