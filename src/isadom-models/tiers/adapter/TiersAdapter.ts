import { TiersAPI, TiersModel } from '..';
import { Adapter } from '../../_adapter';
import { AdresseAdapter } from '../../localisation/adapter/AdresseAdapter';

export class TiersAdapter extends Adapter<TiersModel, TiersAPI> {
  private adresseAdapter = new AdresseAdapter();

  toClient(src: TiersAPI): TiersModel {
    return {
      tiersID: src.iPKTiers,
      codeTiers: src.sCodeTiers,
      mail: src.sMail,
      nom: src.sNom,
      prenom: src.sPrenom,
      telgsm: src.sTelgsm,
      typeTiers: src.sTypeTiers,
      adressePrincipale:
        src.adressePrincipale &&
        this.adresseAdapter.toClient(src.adressePrincipale),
      tAdresse: src.tAdresse && this.adresseAdapter.toClients(src.tAdresse),
    } as TiersModel;
  }

  toAPI(src: TiersModel): TiersAPI {
    return {
      iPKTiers: src.tiersID,
      adressePrincipale:
        src.adressePrincipale &&
        this.adresseAdapter.toAPI(src.adressePrincipale),
      sCodeTiers: src.codeTiers,
      sMail: src.mail,
      sNom: src.nom,
      sPrenom: src.prenom,
      sTelgsm: src.telgsm,
      sTypeTiers: src.typeTiers && src.typeTiers,
      tAdresse: src.tAdresse && this.adresseAdapter.toAPIs(src.tAdresse),
    } as TiersAPI;
  }
}
