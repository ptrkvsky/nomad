import { Adapter } from '../../_adapter';
import { TypeLocalisationAdapter } from '.';
import { LocalisationInterneAPI } from '../api';
import { LocalisationInterneModel } from '../front';

export class LocalisationInterneAdapter extends Adapter<
  LocalisationInterneModel,
  LocalisationInterneAPI
> {
  private typeLocalisationAdapter = new TypeLocalisationAdapter();

  toClient(src: LocalisationInterneAPI): LocalisationInterneModel {
    if (!src) {
      return null as unknown as LocalisationInterneModel;
    }

    return {
      sNature: src.sNature,
      localisationId: src.localisationId,
      sLibelle: src.sLibelle,
      sComplement: src.sComplement,
      typeLocalisation: this.typeLocalisationAdapter.toClient(
        src.typeLocalisation,
      ),
      bEmplacement: src.bEmplacement,
      iFKEmplacementParDefaut: src.iFKEmplacementParDefaut,
      bUtilisableEnVisite: src.bUtilisableEnVisite,
    };
  }

  toAPI(src: LocalisationInterneModel): LocalisationInterneAPI {
    if (!src) {
      return null as unknown as LocalisationInterneAPI;
    }

    return {
      sNature: src.sNature,
      localisationId: src.localisationId,
      sLibelle: src.sLibelle,
      sComplement: src.sComplement,
      typeLocalisation: this.typeLocalisationAdapter.toAPI(
        src.typeLocalisation,
      ),
      bEmplacement: src.bEmplacement,
      iFKEmplacementParDefaut: src.iFKEmplacementParDefaut,
      bUtilisableEnVisite: src.bUtilisableEnVisite,
    };
  }
}
