import { Adapter } from '../../../_adapter/Adapter';
import { AffectationProduitAPI } from '../api/AffectationProduitAPI';
import { AffectationProduitModel } from '../front/AffectationProduitModel';

export class AffectationProduitAdapter extends Adapter<
  AffectationProduitModel,
  AffectationProduitAPI
> {
  toClients(srcs: any[]): any[] {
    const result: any[] = [];
    for (const src of srcs) {
      result.push(this.toClient(src));
    }
    return result;
  }

  toAPIs(srcs: any[]): any[] {
    const result: any[] = [];
    for (const src of srcs) {
      result.push(this.toAPI(src));
    }
    return result;
  }

  toClient(src: AffectationProduitAPI): AffectationProduitModel {
    return {
      parametreId: src.parametreId,
      table: src.table,
      code: src.code,
      libelle: src.libelle,
    };
  }

  toAPI(src: AffectationProduitModel): AffectationProduitAPI {
    return {
      parametreId: src.parametreId,
      table: src.table,
      code: src.code,
      libelle: src.libelle,
    };
  }
}
