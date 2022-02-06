export interface CompteurModel {
  produitDMId: number;
  typeIntervention: string;
  compteurPrecedent: number;
  compteurActuel: number;
  compteurCumule: number;
  dateCompteurPrecedent: string;
  compteurHS: boolean;
  termine: boolean;
}
