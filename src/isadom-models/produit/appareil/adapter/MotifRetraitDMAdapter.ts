import { Adapter } from '../../../_adapter';
import { MotifRetraitDMAPI } from '../api';
import { MotifRetraitDMModel } from '../front';

export class MotifRetraitDMAdapter extends Adapter<
  MotifRetraitDMModel,
  MotifRetraitDMAPI
> {
  toClient(src: MotifRetraitDMAPI): MotifRetraitDMModel {
    return {
      motifRetraitDMId: src.iPKMotifRetraitDM,
      code: src.sCode,
      libelle: src.sLibelle,
      information: src.sInformation,
    };
  }

  toAPI(src: MotifRetraitDMModel): MotifRetraitDMAPI {
    return {
      iPKMotifRetraitDM: src.motifRetraitDMId,
      sCode: src.code,
      sLibelle: src.libelle,
      sInformation: src.information,
    };
  }
}
