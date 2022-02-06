export interface CompteurAPI {
  iFKProduitDM: number;
  sFKTypeIntervention: string;
  iCompteurPrecedent: number;
  iCompteurActuel: number;
  iCompteurCumule: number;
  dCompteurPrecedent: string;
  bCompteurHS: boolean;
  bTermine: boolean;
}
