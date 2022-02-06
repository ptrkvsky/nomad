import { ObservanceDeambulationModel, ObservanceModel } from ".";

export interface ObservanceVisiteModel extends ObservanceModel {
  observanceDeambulation: ObservanceDeambulationModel;
}
