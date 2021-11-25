import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  TypeObjetBack,
  TypeObjetFront,
} from '@/features/messagerie/interfaces/typeObjet';
import { typesObjetsBackToFront } from './adapter';

const getTypeObjets = (
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
  build.query<TypeObjetFront[], void>({
    query: () => `/messagerie/types-objets`,
    transformResponse: (response: TypeObjetBack[]) => {
      return typesObjetsBackToFront(response);
    },
  });

export default getTypeObjets;
