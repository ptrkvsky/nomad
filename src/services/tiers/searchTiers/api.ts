import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

import { tiersBackToFront } from './adapter';
import { TiersBack, TiersFront } from '@/interfaces';

interface SearchTiersParam {
  qui: string;
  typeTiers: string;
}

const searchTiers = (
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
  build.mutation<TiersFront[], SearchTiersParam>({
    query: (param) => ({
      url: `/tiers/recherche`,
      method: `POST`,
      body: param,
    }),
    transformResponse: (response: TiersBack[]) => {
      return tiersBackToFront(response);
    },
  });

export default searchTiers;
