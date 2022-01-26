import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { RechercheAppareil } from '../../interfaces/rechercheAppareil';
import { ResultatRechercheAppareil } from '../../interfaces/resulatRechercheAppareil';

const getAppareils = (
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
  build.mutation<ResultatRechercheAppareil[], RechercheAppareil>({
    query: (param) => ({
      url: `/produits/recherche`,
      method: `POST`,
      body: param,
    }),
  });

export default getAppareils;
