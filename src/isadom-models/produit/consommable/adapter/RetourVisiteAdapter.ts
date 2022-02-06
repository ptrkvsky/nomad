import { Adapter } from '../../../_adapter';
import { ConsommableAdapter, LotAdapter } from '.';

import { RetourVisiteAPI } from '../api';
import { RetourVisiteModel } from '../front';
import { LocalisationInterneAdapter } from '../../../localisation/adapter/LocalisationInterneAdapter';

export class RetourVisiteAdapter extends Adapter<
  RetourVisiteModel,
  RetourVisiteAPI
> {
  private consommableAdapter = new ConsommableAdapter();
  private lotAdapter = new LotAdapter();
  private localisationInterneAdapter = new LocalisationInterneAdapter();

  toClient(src: RetourVisiteAPI): RetourVisiteModel {
    return {
      ligneRetourID: src.ligneRetourID,
      consommable: this.consommableAdapter.toClient(src.consommable),
      iQuantite: src.iQuantite,
      lot: src.lot ? this.lotAdapter.toClient(src.lot) : undefined,
      localisationRetour: src.localisationRetour
        ? this.localisationInterneAdapter.toClient(src.localisationRetour)
        : undefined,
    };
  }

  toAPI(src: RetourVisiteModel): RetourVisiteAPI {
    return {
      ligneRetourID: src.ligneRetourID,
      consommable: this.consommableAdapter.toAPI(src.consommable),
      iQuantite: src.iQuantite,
      lot: src.lot ? this.lotAdapter.toAPI(src.lot) : undefined,
      localisationRetour: src.localisationRetour
        ? this.localisationInterneAdapter.toAPI(src.localisationRetour)
        : undefined,
    };
  }
}
