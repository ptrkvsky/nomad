import { ConsommableAdapter } from '.';
import { TypePrestationAdapter } from '../../..';
import { Adapter } from '../../../_adapter';
import { ConfigConsoSpecTiersVisiteAPI } from '../api';
import { ConfigConsoSpecTiersVisiteModel } from '../front';

export class ConfigConsoSpecTiersVisiteAdapter extends Adapter<
  ConfigConsoSpecTiersVisiteModel,
  ConfigConsoSpecTiersVisiteAPI
> {
  private consommableAdapter = new ConsommableAdapter();
  private typePrestationAdapter = new TypePrestationAdapter();

  toClient(
    src: ConfigConsoSpecTiersVisiteAPI,
  ): ConfigConsoSpecTiersVisiteModel {
    return {
      produit: this.consommableAdapter.toClient(src.produit),
      sTypeConfig: src.sTypeConfig,
      configCsoID: src.configCsoID,
      iQuantite: src.iQuantite,
      iFrequence: src.iFrequence,
      dDebut: src.dDebut,
      dFin: src.dFin,
      bPreparation: src.bPreparation,
      bTest: src.bTest,
      sInformation: src.sInformation,
      bAfficherCR: src.bAfficherCR,
      bAfficherOrdo: src.bAfficherOrdo,
      bAfficherGED: src.bAfficherGED,
      configCsoVisiteID: src.configCsoVisiteID,
      bAjoutConfig: src.bAjoutConfig,
      bRetraitConfig: src.bRetraitConfig,
      typePrestation:
        src.typePrestation &&
        this.typePrestationAdapter.toClient(src.typePrestation),
      dDerniereLivraison: src.dDerniereLivraison,
      iQuantiteDerniereLivraison: src.iQuantiteDerniereLivraison,
    };
  }

  toAPI(src: ConfigConsoSpecTiersVisiteModel): ConfigConsoSpecTiersVisiteAPI {
    return {
      produit: this.consommableAdapter.toAPI(src.produit),
      sTypeConfig: src.sTypeConfig,
      configCsoID: src.configCsoID,
      iQuantite: src.iQuantite,
      iFrequence: src.iFrequence,
      dDebut: src.dDebut,
      dFin: src.dFin,
      bPreparation: src.bPreparation,
      bTest: src.bTest,
      sInformation: src.sInformation,
      bAfficherCR: src.bAfficherCR,
      bAfficherOrdo: src.bAfficherOrdo,
      bAfficherGED: src.bAfficherGED,
      configCsoVisiteID: src.configCsoVisiteID,
      bAjoutConfig: src.bAjoutConfig,
      bRetraitConfig: src.bRetraitConfig,
      typePrestation:
        src.typePrestation &&
        this.typePrestationAdapter.toAPI(src.typePrestation),
      dDerniereLivraison: src.dDerniereLivraison,
      iQuantiteDerniereLivraison: src.iQuantiteDerniereLivraison,
    };
  }
}
