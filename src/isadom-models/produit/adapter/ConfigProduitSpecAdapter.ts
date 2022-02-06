import { Adapter } from '../../_adapter';
import { AppareilAdapter, ConfigProduitSpecAPI } from '..';
import { ConfigProduitSpecModel } from '..';
// import { ProduitAdapter } from ".";

export class ConfigProduitSpecAdapter extends Adapter<
  ConfigProduitSpecModel,
  ConfigProduitSpecAPI
> {
  // private produitAdapter = new ProduitAdapter();
  private appareilAdapter = new AppareilAdapter();

  toClient(src: ConfigProduitSpecAPI): ConfigProduitSpecModel {
    if (!src) {
      return null as unknown as ConfigProduitSpecModel;
    }

    return {
      produit: this.appareilAdapter.toClient(src.produit),
      sTypeConfig: src.sTypeConfig,
    };
  }

  toAPI(src: ConfigProduitSpecModel): ConfigProduitSpecAPI {
    if (!src) {
      return null as unknown as ConfigProduitSpecAPI;
    }

    return {
      produit: this.appareilAdapter.toAPI(src.produit),
      sTypeConfig: src.sTypeConfig,
    };
  }
}
