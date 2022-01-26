export interface RechercheAppareil {
  estActif?: string;
  estDisponible?: string;
  modeleID?: string;
  familleID?: string;
  sousFamilleID?: string;
  typeProduitID?: string;
  typeLocalisationID?: string;
  localisation?: {
    sNature?: string;
    localisationId?: string;
    sLibelle?: string;
    sComplement?: string;
    typeLocalisation?: {
      typeLocalisationId?: string;
      sLibelle?: string;
      bInterne?: true;
    };
  };
  appareilDeMesure?: string;
  ref_sn?: string;
}
