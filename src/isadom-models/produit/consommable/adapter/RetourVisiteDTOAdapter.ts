import { Adapter } from '../../../_adapter';
import { RetourVisiteDTOAPI } from '../api';
import { RetourVisiteDTOModel } from '../front';

export class RetourVisiteDTOAdapter extends Adapter<
  RetourVisiteDTOModel,
  RetourVisiteDTOAPI
> {
  toClient(src: RetourVisiteDTOAPI): RetourVisiteDTOModel {
    return src;
  }

  toAPI(src: RetourVisiteDTOModel): RetourVisiteDTOAPI {
    return src;
  }
}
