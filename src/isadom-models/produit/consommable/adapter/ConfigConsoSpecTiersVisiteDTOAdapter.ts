import { Adapter } from '../../../_adapter';
import { ConfigConsoSpecTiersVisiteDTOAPI } from '../api';
import { ConfigConsoSpecTiersVisiteDTOModel } from '../front';

export class ConfigConsoSpecTiersVisiteDTOAdapter extends Adapter<
  ConfigConsoSpecTiersVisiteDTOModel,
  ConfigConsoSpecTiersVisiteDTOAPI
> {
  toClient(
    src: ConfigConsoSpecTiersVisiteDTOAPI,
  ): ConfigConsoSpecTiersVisiteDTOModel {
    return {
      produitID: src.produit.IDproduit,
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
      typePrestationID: src.typePrestation?.sPKTypePrestation || ``,
      dDerniereLivraison: src.dDerniereLivraison,
      iQuantiteDerniereLivraison: src.iQuantiteDerniereLivraison,
    };
  }

  toAPI(
    src: ConfigConsoSpecTiersVisiteDTOModel,
  ): ConfigConsoSpecTiersVisiteDTOAPI {
    return {
      produit: { IDproduit: src.produitID },
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
      typePrestation: { sPKTypePrestation: src.typePrestationID || `` },
      dDerniereLivraison: src.dDerniereLivraison,
      iQuantiteDerniereLivraison: src.iQuantiteDerniereLivraison,
    };
  }
}
