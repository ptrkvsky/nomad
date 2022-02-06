
import { IAbstractChampsModel } from './IAbstractChampsModel';
import { IAbstractValeurModel } from './IAbstractValeurModel';
export interface IChampModel<TypeValeur> extends IAbstractChampsModel<TypeValeur, IAbstractValeurModel<TypeValeur>>{

}