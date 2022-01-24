import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { ModeleAPI } from '../../interfaces/modele';
import { RechercheModele } from '../../interfaces/rechercheModele';

const getModeles = (
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
  build.mutation<ModeleAPI[], RechercheModele>({
    query: (param) => ({
      url: `/produits/recherche`,
      method: `POST`,
      body: param,
    }),
  });

export default getModeles;
