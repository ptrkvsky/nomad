export abstract class Adapter<ModelClient, ModelAPI> {
  toClients(srcs: ModelAPI[]): ModelClient[] {
    const result: ModelClient[] = [];
    if (srcs) {
      for (const src of srcs) {
        if (src) {
          result.push(this.toClient(src));
        }
      }
    }
    return result;
  }

  toAPIs(srcs: ModelClient[]): ModelAPI[] {
    const result: ModelAPI[] = [];
    if (srcs) {
      for (const src of srcs) {
        result.push(this.toAPI(src));
      }
    }
    return result;
  }

  abstract toClient(src: ModelAPI): ModelClient;
  abstract toAPI(src: ModelClient): ModelAPI;
}
