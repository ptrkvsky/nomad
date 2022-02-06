export interface LotModel {
  iPKProduitDMCLot: number;
  iFKProduit: number;
  sLot: string;
  dLimiteConso: string;
  dLimiteUtilisation: string;
  iPKEmplacement: number;
  sCodeEmplacement: string;
  iPKStock: number;
  iStockTheorique: number;
}
