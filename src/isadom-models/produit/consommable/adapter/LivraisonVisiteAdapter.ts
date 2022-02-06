import { ConsommableAdapter, LotAdapter } from '.';
import { TypePrestationAdapter } from '../../../medical/prestation/adapter';
import { Adapter } from '../../../_adapter';
import { AppareilAdapter } from '../../appareil/adapter/AppareilAdapter';

import { LivraisonVisiteAPI } from '../api';
import { LivraisonVisiteModel } from '../front';

export class LivraisonVisiteAdapter extends Adapter<
  LivraisonVisiteModel,
  LivraisonVisiteAPI
> {
  private consommableAdapter = new ConsommableAdapter();
  private lotAdapter = new LotAdapter();
  private typePrestationAdapter = new TypePrestationAdapter();
  private appareilAdapter = new AppareilAdapter();

  toClient(src: LivraisonVisiteAPI): LivraisonVisiteModel {
    return {
      ligneLivraisonID: src.ligneLivraisonID,
      consommable: this.consommableAdapter.toClient(src.consommable),
      iQuantite: src.iQuantite,
      lot: src.lot ? this.lotAdapter.toClient(src.lot) : undefined,
      typePrestation: src.typePrestation
        ? this.typePrestationAdapter.toClient(src.typePrestation)
        : undefined,
      appareil: src.appareil
        ? this.appareilAdapter.toClient(src.appareil)
        : undefined,
    };
  }

  toAPI(src: LivraisonVisiteModel): LivraisonVisiteAPI {
    return {
      ligneLivraisonID: src.ligneLivraisonID,
      consommable: this.consommableAdapter.toAPI(src.consommable),
      iQuantite: src.iQuantite,
      lot: src.lot ? this.lotAdapter.toAPI(src.lot) : undefined,
      typePrestation: src.typePrestation
        ? this.typePrestationAdapter.toAPI(src.typePrestation)
        : undefined,
      appareil: src.appareil
        ? this.appareilAdapter.toAPI(src.appareil)
        : undefined,
    };
  }
}
