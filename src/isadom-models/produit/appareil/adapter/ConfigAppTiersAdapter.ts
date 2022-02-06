import { Adapter } from '../../../_adapter';
import { ConfigAppareilsTiersAPI } from '../api';
import { ConfigAppTiersModel } from '../front';
import { TiersAdapter } from '../../..';
import { ConfigProduitSpecAdapter } from '../..';

export class ConfigAppTiersAdapter extends Adapter<
  ConfigAppTiersModel,
  ConfigAppareilsTiersAPI
> {
  private tiersAdapter = new TiersAdapter();
  private configProduitSpecAdapter = new ConfigProduitSpecAdapter();

  toClient(src: ConfigAppareilsTiersAPI): ConfigAppTiersModel {
    if (!src) {
      return null as unknown as ConfigAppTiersModel;
    }

    return {
      tabTypeConfig: src.tabTypeConfig,
      sTypeConfig: src.sTypeConfig,
      tabconfigProduitSpec: this.configProduitSpecAdapter.toClients(
        src.tabconfigProduitSpec,
      ),
      tiers: this.tiersAdapter.toClient(src.tiers),
    };
  }

  toAPI(src: ConfigAppTiersModel): ConfigAppareilsTiersAPI {
    if (!src) {
      return null as unknown as ConfigAppareilsTiersAPI;
    }

    return {
      tabTypeConfig: src.tabTypeConfig,
      sTypeConfig: src.sTypeConfig,
      tabconfigProduitSpec: this.configProduitSpecAdapter.toAPIs(
        src.tabconfigProduitSpec,
      ),
      tiers: this.tiersAdapter.toAPI(src.tiers),
    };
  }
}
