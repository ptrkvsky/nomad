import { SearchParamsTournee } from './../../types/SearchParamsTournee';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { FeuilleDeRouteAPI } from '@/isadom-models';
import { feuilleDeRouteBackToFront } from './adapter';
import { FeuilleDeRouteFront } from '@/isadom-models/visite/front/FeuilleDeRouteFront';

const getTournee = (
  build: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      // eslint-disable-next-line @typescript-eslint/ban-types
      {},
      FetchBaseQueryMeta
    >,
    never,
    'api'
  >,
) =>
  build.query<FeuilleDeRouteFront, SearchParamsTournee>({
    query: ({ dateTournee, idIntervenant }) =>
      `/intervenants/${idIntervenant}/tournees/${dateTournee}`,
    transformResponse: (response: FeuilleDeRouteAPI) => {
      return feuilleDeRouteBackToFront(response);
    },
  });

export default getTournee;
