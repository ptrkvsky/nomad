export interface ResultatRechercheAppareil {
  IDProduit: number;
  sRefProduit: string;
  sFKTypeProduit: string;
  sCodeNatureProduit: string;
  sLibelle: string;
  sRefFabricant: string;
  bInactif: false;
  bPrevisionInactif: true;
  dArretCdeInterne: string;
  bArretCommande: false;
  typeProduit: {
    idTypeProduit: string;
    sLibelle: string;
    sCodeNatureProduit: string;
    bSuiviTiers: false;
    bSuiviIntervention: true;
    bInactif: false;
  };
  famille: any; // pas le time
  iPKModele: number;
  bSuiviCompteur: boolean;
  tabMotifRetraitDM: any[];
}
