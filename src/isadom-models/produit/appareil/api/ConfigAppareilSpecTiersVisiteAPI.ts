import { ConfigAppareilSpecTiersAPI } from "../api/ConfigAppareilSpecTiersAPI";
import { RetraitAPI } from "../api/RetraitAPI";

export interface ConfigAppareilSpecTiersVisiteAPI
  extends ConfigAppareilSpecTiersAPI {
  bAbsent: boolean;
  bPresent: boolean;
  bAjout: boolean;
  bRetrait: boolean;
  retrait: RetraitAPI;
}
