import { FamilleAdapter } from '.';
import { TypeProduitAdapter } from '.';
import { ProduitModel } from './../front/ProduitModel';
import { ProduitAPI } from './../api/ProduitAPI';
import { Adapter } from '../../_adapter';

export class ProduitAdapter extends Adapter<ProduitModel, ProduitAPI> {
  private familleAdapter = new FamilleAdapter();
  private typeProduitAdapter = new TypeProduitAdapter();

  toClient(src: ProduitAPI): ProduitModel {
    return {
      produit: src.IDProduit,
      refProduit: src.sRefProduit,
      typeProduitSecondaire: src.sFKTypeProduit,
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
    };
  }

  toAPI(src: ProduitModel): ProduitAPI {
    return {
      IDProduit: src.produit,
      sRefProduit: src.refProduit,
      sFKTypeProduit: src.typeProduitSecondaire,
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
    };
  }
}
