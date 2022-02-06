import { Adapter } from '../../_adapter';
import { TypeObjetAPI } from '../api';
import { TypeObjetModel } from '../front';

export class TypeObjetAdapter extends Adapter<TypeObjetModel, TypeObjetAPI> {
  toClient(src: TypeObjetAPI): TypeObjetModel {
    return {
      ID: src.typeObjetID,
      libelle: src.sLibelle,
      corpsMessageParDefaut: src.sTexteParDefaut,
    };
  }

  toAPI(src: TypeObjetModel): TypeObjetAPI {
    return {
      typeObjetID: src.ID,
      sLibelle: src.libelle,
      sTexteParDefaut: src.corpsMessageParDefaut,
    };
  }
}
