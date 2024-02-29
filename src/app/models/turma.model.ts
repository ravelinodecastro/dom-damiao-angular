import { EstudanteTurmaModel } from "./estudante-turma.model";

export interface TurmaModel {
    id?: number;
    nome: string;
    estudanteTurma?: Array<EstudanteTurmaModel>;

}