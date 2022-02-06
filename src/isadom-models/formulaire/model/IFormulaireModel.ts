import { IGroupeModel } from "./groupe/IGroupeModel";
import { ITypeFormulaire } from "./typeFormulaire/ITypeFormulaire";


export interface IFormulaireModel{
    typeForm : ITypeFormulaire;
    groupes:IGroupeModel[];
    id :string;

}