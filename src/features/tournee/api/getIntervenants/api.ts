import { TiersFront, TiersBack } from '@/isadom-models/tiers/tiers';
import { tiersBackToFront } from '@/services/tiers/searchTiers/adapter';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { SearchParamsIntervenant } from '../../types/SearchParamsIntervenant';

const getIntervenants = (
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
  build.mutation<TiersFront[], SearchParamsIntervenant>({
    query: (param) => ({
      url: `/tiers/recherche`,
      method: `POST`,
      body: param,
    }),
    transformResponse: (response: TiersBack[]) => {
      return tiersBackToFront(response);
    },
  });

export default getIntervenants;
