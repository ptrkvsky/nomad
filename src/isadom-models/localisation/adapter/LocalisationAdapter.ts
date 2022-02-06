import { TypeLocalisationAdapter } from '.';
import { Adapter } from '../../_adapter';

import { LocalisationAPI } from '../api';
import { LocalisationModel } from '../front';

export class LocalisationAdapter extends Adapter<
  LocalisationModel,
  LocalisationAPI
> {
  private typeLocalisationAdapter = new TypeLocalisationAdapter();

  toClient(src: LocalisationAPI): LocalisationModel {
    return {
      nature: src.sNature,
      localisationId: src.localisationId,
      libelle: src.sLibelle,
      complement: src.sComplement,
      typeLocalisation:
        src.typeLocalisation &&
        this.typeLocalisationAdapter.toClient(src.typeLocalisation),
    };
  }

  toAPI(src: LocalisationModel): LocalisationAPI {
    return {
      sNature: src.nature,
      localisationId: src.localisationId,
      sLibelle: src.libelle,
      sComplement: src.complement,
      typeLocalisation:
        src.typeLocalisation &&
        this.typeLocalisationAdapter.toAPI(src.typeLocalisation),
    };
  }
}
