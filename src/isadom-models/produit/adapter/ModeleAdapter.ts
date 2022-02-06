import { Adapter } from '../../_adapter';
import { ModeleAPI } from '..';
import { ModeleModel } from '../front';
import { TypeProduitAdapter, FamilleAdapter } from '.';
import { MotifRetraitDMAdapter } from '../appareil';
export class ModeleAdapter extends Adapter<ModeleModel, ModeleAPI> {
  private typeProduitAdapter = new TypeProduitAdapter();
  private motifRetraitDMAdapter = new MotifRetraitDMAdapter();
  private familleAdapter = new FamilleAdapter();

  toClient(src: ModeleAPI): ModeleModel {
    return {
      produitId: src.IDProduit,
      refProduit: src.sRefProduit,
      typeProduitFK: src.sFKTypeProduit,
      codeNatureProduit: src.sCodeNatureProduit,
      libelle: src.sLibelle,
      refFabricant: src.sRefFabricant,
      inactif: src.bInactif,
      previsionInactif: src.bPrevisionInactif,
      arretCdeInterne: src.dArretCdeInterne,
      arretCommande: src.bArretCommande,
      typeProduit:
        src.typeProduit && this.typeProduitAdapter.toClient(src.typeProduit),
      famille: src.famille && this.familleAdapter.toClient(src.famille),
      modeleId: src.iPKModele,
      suiviCompteur: src.bSuiviCompteur,
      motifRetraitDM:
        src.tabMotifRetraitDM &&
        this.motifRetraitDMAdapter.toClients(src.tabMotifRetraitDM),
    };
  }

  toAPI(src: ModeleModel): ModeleAPI {
    return {
      IDProduit: src.produitId,
      sRefProduit: src.refProduit,
      sFKTypeProduit: src.typeProduitFK,
      sCodeNatureProduit: src.codeNatureProduit,
      sLibelle: src.libelle,
      sRefFabricant: src.refFabricant,
      bInactif: src.inactif,
      bPrevisionInactif: src.previsionInactif,
      dArretCdeInterne: src.arretCdeInterne,
      bArretCommande: src.arretCommande,
      typeProduit:
        src.typeProduit && this.typeProduitAdapter.toAPI(src.typeProduit),
      famille: src.famille && this.familleAdapter.toAPI(src.famille),
      iPKModele: src.modeleId,
      bSuiviCompteur: src.suiviCompteur,
      tabMotifRetraitDM:
        src.motifRetraitDM &&
        this.motifRetraitDMAdapter.toAPIs(src.motifRetraitDM),
    };
  }
}
