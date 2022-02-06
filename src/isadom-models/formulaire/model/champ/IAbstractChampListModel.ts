import { IAbstractChampsModel } from './IAbstractChampsModel';
import { IAbstractValeurPossibleModel } from './IAbstractValeurPossibleModel';
import { IAbstractValeurListModel } from './IAbstractValeurListModel';

export interface IAbstractChampListModel<TypeValeur> extends IAbstractChampsModel<TypeValeur, IAbstractValeurListModel<TypeValeur>>{
    choix: IAbstractValeurPossibleModel<TypeValeur>[]
}