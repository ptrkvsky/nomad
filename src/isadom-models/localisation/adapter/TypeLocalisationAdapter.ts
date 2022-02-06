import { TypeLocalisationAPI, TypeLocalisationModel } from '..';
import { Adapter } from '../../_adapter/Adapter';

export class TypeLocalisationAdapter extends Adapter<
  TypeLocalisationModel,
  TypeLocalisationAPI
> {
  toClient(src: TypeLocalisationAPI): TypeLocalisationModel {
    if (src) {
      return {
        typeLocalisationID: src.typeLocalisationId,
        interne: src.bInterne,
        libelle: src.sLibelle,
      } as TypeLocalisationModel;
    } else {
      return {} as TypeLocalisationModel;
    }
  }

  toAPI(src: TypeLocalisationModel): TypeLocalisationAPI {
    return {
      typeLocalisationId: src.typeLocalisationID,
      bInterne: src.interne,
      sLibelle: src.libelle,
    } as TypeLocalisationAPI;
  }
}
