import { AffectationProduitAdapter } from './AffectationProduitAdapter';
import { BonsLivraisonModel } from './../front/BonsLivraisonModel';
import { Adapter } from '../../../_adapter/Adapter';
import { BonsLivraisonAPI } from '../api/BonsLivraisonAPI';
import { TypePrestationAdapter } from '../../../medical';
import { AppareilAdapter } from '../../../produit/appareil/adapter/AppareilAdapter';
import { ConsommableAdapter } from '../../../produit/consommable/adapter';

export class BonsLivraisonAdapter extends Adapter<
  BonsLivraisonModel,
  BonsLivraisonAPI
> {
  private consommableAdapter = new ConsommableAdapter();
  private affectationProduitAdapter = new AffectationProduitAdapter();
  private typePrestationAdapater = new TypePrestationAdapter();
  private appareilAdapter = new AppareilAdapter();

  toClients(srcs: any[]): any[] {
    const result: any[] = [];
    for (const src of srcs) {
      result.push(this.toClient(src));
    }
    return result;
  }

  toAPIs(srcs: any[]): any[] {
    const result: any[] = [];
    for (const src of srcs) {
      result.push(this.toAPI(src));
    }
    return result;
  }

  toClient(src: BonsLivraisonAPI): BonsLivraisonModel {
    return {
      ligneLivraisonId: src.ligneLivraisonID,
      consommable: this.consommableAdapter.toClient(src.consommable),
      quantite: src.iQuantite,
      affectationProduit: this.affectationProduitAdapter.toClient(
        src.affectationProduit,
      ),
      lot: src.lot,
      typePrestation: this.typePrestationAdapater.toClient(src.typePrestation),
      appareil: src.appareil && this.appareilAdapter.toClient(src.appareil),
    };
  }

  toAPI(src: BonsLivraisonModel): BonsLivraisonAPI {
    return {
      ligneLivraisonID: src.ligneLivraisonId,
      consommable:
        src.consommable && this.consommableAdapter.toAPI(src.consommable),
      iQuantite: src.quantite,
      affectationProduit:
        src.consommable &&
        this.affectationProduitAdapter.toAPI(src.affectationProduit),
      lot: src.lot,
      typePrestation:
        src.typePrestation &&
        this.typePrestationAdapater.toAPI(src.typePrestation),
      appareil: src.appareil && this.appareilAdapter.toAPI(src.appareil),
    };
  }
}
