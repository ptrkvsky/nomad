import { Adapter } from '../../_adapter';
import { TypeTiersAPI } from '../api';
import { TypeTiersModel } from '../front';

export class TypeTiersAdapter extends Adapter<TypeTiersModel, TypeTiersAPI> {
  toClient(src: TypeTiersAPI): TypeTiersModel {
    return {
      typeTiersID: src.typeTiersID,
      libelle: src.sLibelle,
      isInactif: src.bInactif,
      isInterne: src.bInterne,
      isVisMsgOK: src.bVisMsgOK,
    };
  }

  toAPI(src: TypeTiersModel): TypeTiersAPI {
    return {
      typeTiersID: src.typeTiersID,
      sLibelle: src.libelle,
      bInactif: src.isInactif,
      bInterne: src.isInterne,
      bVisMsgOK: src.isVisMsgOK,
    };
  }
}
