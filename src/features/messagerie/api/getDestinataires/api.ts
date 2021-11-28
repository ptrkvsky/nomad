import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  DestinataireBack,
  DestinataireFront,
} from '@/features/messagerie/interfaces';
import { destinatairesBackToFront } from './adapter';

const getTypesObjets = (
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
  build.query<DestinataireFront[], string>({
    query: (idTypeObjet) =>
      `messagerie/types-objets/${idTypeObjet}/destinataires?auteur=462118`,
    transformResponse: (response: DestinataireBack[]) => {
      return destinatairesBackToFront(response);
    },
  });

export default getTypesObjets;
