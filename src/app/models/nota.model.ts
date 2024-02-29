import { DisciplinaModel } from "./disciplina.model";

export interface NotaModel {
    id?: number;
    valor: number;
    idEstudante: number;
    idDisciplina: number;
    disciplina: DisciplinaModel;
}