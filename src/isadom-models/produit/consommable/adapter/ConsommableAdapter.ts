import { FamilleAdapter, TypeProduitAdapter } from '../..';
import { Adapter } from '../../../_adapter';
import { ConsommableAPI } from '../api';
import { ConsommableModel } from '../front';

export class ConsommableAdapter extends Adapter<
  ConsommableModel,
  ConsommableAPI
> {
  private typeProduitAdapter = new TypeProduitAdapter();
  private familleAdapter = new FamilleAdapter();

  toClient(src: ConsommableAPI): ConsommableModel {
    if (!src) {
      return null as unknown as ConsommableModel;
    }

    return {
      IDProduit: src.IDProduit,
      sRefProduit: src.sRefProduit,
      sFKTypeProduit: src.sFKTypeProduit,
      sCodeNatureProduit: src.sCodeNatureProduit,
      sLibelle: src.sLibelle,
      sRefFabricant: src.sRefFabricant,
      bInactif: src.bInactif,
      bPrevisionInactif: src.bPrevisionInactif,
      dArretCdeInterne: src.dArretCdeInterne,
      bArretCommande: src.bArretCommande,
      typeProduit: this.typeProduitAdapter.toClient(src.typeProduit),
      famille: this.familleAdapter.toClient(src.famille),
      iFKCodePriorite: src.iFKCodePriorite,
      sCodePriorite: src.sCodePriorite,
      bSuiviLot: src.bSuiviLot,
      bSuiviDatePeremption: src.bSuiviDatePeremption,
      bSuiviNumeroLot: src.bSuiviNumeroLot,
      bSuiviSortie: src.bSuiviSortie,
      bKit: src.bKit,
      bControleLivraison: src.bControleLivraison,
      iQuantiteConfig: src.iQuantiteConfig,
      iFrequenceConfig: src.iFrequenceConfig,
      iFrequenceInventaire: src.iFrequenceInventaire,
      sFKTypeIntervention: src.sFKTypeIntervention,
      bInfoLivraisonProduitSubstitution: src.bInfoLivraisonProduitSubstitution,
      bIgnoreControleConformite: src.bIgnoreControleConformite,
      iMultipleCdeCatalogue: src.iMultipleCdeCatalogue,
      sTypePeremption: src.sTypePeremption,
    };
  }

  toAPI(src: ConsommableModel): ConsommableAPI {
    if (!src) {
      return null as unknown as ConsommableAPI;
    }

    return {
      IDProduit: src.IDProduit,
      sRefProduit: src.sRefProduit,
      sFKTypeProduit: src.sFKTypeProduit,
      sCodeNatureProduit: src.sCodeNatureProduit,
      sLibelle: src.sLibelle,
      sRefFabricant: src.sRefFabricant,
      bInactif: src.bInactif,
      bPrevisionInactif: src.bPrevisionInactif,
      dArretCdeInterne: src.dArretCdeInterne,
      bArretCommande: src.bArretCommande,
      typeProduit: this.typeProduitAdapter.toAPI(src.typeProduit),
      famille: this.familleAdapter.toAPI(src.famille),
      iFKCodePriorite: src.iFKCodePriorite,
      sCodePriorite: src.sCodePriorite,
      bSuiviLot: src.bSuiviLot,
      bSuiviDatePeremption: src.bSuiviDatePeremption,
      bSuiviNumeroLot: src.bSuiviNumeroLot,
      bSuiviSortie: src.bSuiviSortie,
      bKit: src.bKit,
      bControleLivraison: src.bControleLivraison,
      iQuantiteConfig: src.iQuantiteConfig,
      iFrequenceConfig: src.iFrequenceConfig,
      iFrequenceInventaire: src.iFrequenceInventaire,
      sFKTypeIntervention: src.sFKTypeIntervention,
      bInfoLivraisonProduitSubstitution: src.bInfoLivraisonProduitSubstitution,
      bIgnoreControleConformite: src.bIgnoreControleConformite,
      iMultipleCdeCatalogue: src.iMultipleCdeCatalogue,
      sTypePeremption: src.sTypePeremption,
    };
  }
}
