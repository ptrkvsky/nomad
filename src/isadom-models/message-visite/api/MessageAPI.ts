import { TypeObjetAPI } from ".";
import { DestinataireAPI } from ".";

export interface MessageAPI {
  messageID: number;
  typeObjet: TypeObjetAPI;
  sObjet: string;
  sMessage: string;
  tDestinatairePrincipal: DestinataireAPI[];
}
