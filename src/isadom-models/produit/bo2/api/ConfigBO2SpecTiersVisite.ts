import { ConfigBO2SpecTiers } from ".";

export interface ConfigBO2SpectTiersVisite extends ConfigBO2SpecTiers {
  idConfigBO2Visite: number;
  bAjoutConfig: boolean;
  bRetraitConfig: boolean;
}
