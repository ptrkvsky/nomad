import { Adapter } from '../../../_adapter';
import { LotAPI } from '../api';
import { LotModel } from '../front';

export class LotAdapter extends Adapter<LotModel, LotAPI> {
  toClient(src: LotAPI): LotModel {
    if (!src) {
      return null as unknown as LotModel;
    }

    return src;
  }

  toAPI(src: LotModel): LotAPI {
    if (!src) {
      return null as unknown as LotAPI;
    }

    return src;
  }
}
