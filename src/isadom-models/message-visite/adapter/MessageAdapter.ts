import { Adapter } from '../../_adapter';
import { MessageAPI } from '../api';
import { MessageModel } from '../front';

import { TypeObjetAdapter } from '.';

export class MessageAdapter extends Adapter<MessageModel, MessageAPI> {
  toClient(src: MessageAPI): MessageModel {
    return {
      ID: src.messageID,
      typeObjet: new TypeObjetAdapter().toClient(src.typeObjet),
      objet: src.sObjet,
      corps: src.sMessage,
      destinatairesPrincipaux: src.tDestinatairePrincipal,
    };
  }

  toAPI(src: MessageModel): MessageAPI {
    return {
      messageID: src.ID,
      typeObjet: new TypeObjetAdapter().toAPI(src.typeObjet),
      sObjet: src.objet,
      sMessage: src.corps,
      tDestinatairePrincipal: src.destinatairesPrincipaux,
    };
  }
}
