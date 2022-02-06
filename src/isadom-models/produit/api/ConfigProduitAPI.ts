import { ConfigProduitSpecAPI } from "./ConfigProduitSpecAPI";

export interface ConfigProduitAPI {
  abTypeConfig: string[];
  sTypeConfig: string;
  tabconfigProduitSpec: ConfigProduitSpecAPI[];
}
