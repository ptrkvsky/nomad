export interface TiersBack {
  iPKTiers: number;
  sCodeTiers: string;
  sPrenom: string;
  sNom: string;
  sTypeTiers: string;
  sMail: string;
  sTelgsm: string;
  adressePrincipale: {
    iPKAdresse: number;
    typeLocalisation: null;
    sAdresseComplete: string;
    sAdresseSansCPVille: string;
    sAdresseAvecRC: string;
    sCodePostal: string;
    sVille: string;
    sTelFixe: string;
    sTelAutre: string;
    sTelInformation: string;
    sLibelle: string;
    sNumeroVoie: string;
    sAdresse: string;
    dDebut: string;
    dFin: string;
    bEnCours: false;
    bAdressePrincipale: false;
  };
  tAdresse: any[];
}

export interface TiersFront {
  idTiers: number;
  codeTiers: string;
  prenom: string;
  nom: string;
  idTypeTiers: string;
  sMail: string;
  sTelgsm: string;
  adressePrincipale: {
    iPKAdresse: number;
    typeLocalisation: null;
    sAdresseComplete: string;
    sAdresseSansCPVille: string;
    sAdresseAvecRC: string;
    sCodePostal: string;
    sVille: string;
    sTelFixe: string;
    sTelAutre: string;
    sTelInformation: string;
    sLibelle: string;
    sNumeroVoie: string;
    sAdresse: string;
    dDebut: string;
    dFin: string;
    bEnCours: false;
    bAdressePrincipale: false;
  };
  tAdresse: any[];
}
