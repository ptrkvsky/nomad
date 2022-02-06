import { Adapter } from '../../../_adapter';
import { LivraisonVisiteDTOAPI } from '../api';
import { LivraisonVisiteDTOModel } from '../front';

export class LivraisonVisiteDTOAdapter extends Adapter<
  LivraisonVisiteDTOModel,
  LivraisonVisiteDTOAPI
> {
  toClient(src: LivraisonVisiteDTOAPI): LivraisonVisiteDTOModel {
    return src;
  }

  toAPI(src: LivraisonVisiteDTOModel): LivraisonVisiteDTOAPI {
    return src;
  }
}
