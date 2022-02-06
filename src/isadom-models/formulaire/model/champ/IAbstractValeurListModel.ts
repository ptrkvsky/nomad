import { IAbstractValeurModel } from "./IAbstractValeurModel";

export interface IAbstractValeurListModel<TypeValeur> extends IAbstractValeurModel<TypeValeur> {
    score: number
}