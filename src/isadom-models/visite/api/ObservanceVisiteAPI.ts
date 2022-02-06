import { ObservanceAPI, ObservanceDeambulationAPI } from ".";

export interface ObservanceVisiteAPI extends ObservanceAPI {
  observanceDeambulation: ObservanceDeambulationAPI;
}
