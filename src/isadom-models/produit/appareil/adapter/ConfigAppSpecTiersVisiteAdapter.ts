import { Adapter } from '../../../_adapter';
import { RetraitAdapter } from '.';
import { ConfigAppSpecTiersVisiteAPI } from '../api';
import { ConfigAppSpecTiersVisiteModel } from '../front';
import { AdresseAdapter, TiersAdapter } from '../../..';
import { AppareilAdapter } from '.';
import { LocalisationInterneAdapter } from '../../../localisation/adapter/LocalisationInterneAdapter';
import { TypePrestationAdapter } from '../../../medical/prestation/adapter';

export class ConfigAppSpecTiersVisiteAdapter extends Adapter<
  ConfigAppSpecTiersVisiteModel,
  ConfigAppSpecTiersVisiteAPI
> {
  private appareilAdapter = new AppareilAdapter();
  private adresseAdapter = new AdresseAdapter();
  private localisationInterneAdapter = new LocalisationInterneAdapter();
  private typePrestationAdapter = new TypePrestationAdapter();
  private retraitAdapter = new RetraitAdapter();
  private tiersAdapter = new TiersAdapter();

  toClient(src: ConfigAppSpecTiersVisiteAPI): ConfigAppSpecTiersVisiteModel {
    if (!src) {
      return null as unknown as ConfigAppSpecTiersVisiteModel;
    }

    return {
      produit: this.appareilAdapter.toClient(src.produit),
      sTypeConfig: src.sTypeConfig,
      dateInstallation: src.dateInstallation,
      adresseInstallation: this.adresseAdapter.toClient(
        src.adresseInstallation,
      ),
      dateRetrait: src.dateRetrait,
      localisationRetrait: this.localisationInterneAdapter.toClient(
        src.localisationRetrait,
      ),
      preponderance: src.preponderance,
      typePrestation: this.typePrestationAdapter.toClient(src.typePrestation),
      bAbsent: src.bAbsent,
      bPresent: src.bPresent,
      bAjout: src.bAjout,
      bRetrait: src.bRetrait,
      retrait: this.retraitAdapter.toClient(src.retrait),
      tiers: this.tiersAdapter.toClient(src.tiers),
    };
  }

  toAPI(src: ConfigAppSpecTiersVisiteModel): ConfigAppSpecTiersVisiteAPI {
    if (!src) {
      return null as unknown as ConfigAppSpecTiersVisiteAPI;
    }

    return {
      produit: this.appareilAdapter.toAPI(src.produit),
      sTypeConfig: src.sTypeConfig,
      dateInstallation: src.dateInstallation,
      adresseInstallation: this.adresseAdapter.toAPI(src.adresseInstallation),
      dateRetrait: src.dateRetrait,
      localisationRetrait: this.localisationInterneAdapter.toAPI(
        src.localisationRetrait,
      ),
      preponderance: src.preponderance,
      typePrestation: this.typePrestationAdapter.toAPI(src.typePrestation),
      bAbsent: src.bAbsent,
      bPresent: src.bPresent,
      bAjout: src.bAjout,
      bRetrait: src.bRetrait,
      retrait: this.retraitAdapter.toAPI(src.retrait),
      tiers: this.tiersAdapter.toAPI(src.tiers),
    };
  }
}
