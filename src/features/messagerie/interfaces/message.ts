export interface Message {
  typeObjet: {
    typeObjetID: string;
  };
  sObjet: string;
  sMessage: string;
  tDestinatairePrincipal: {
    tiersID: number;
  }[];
}
