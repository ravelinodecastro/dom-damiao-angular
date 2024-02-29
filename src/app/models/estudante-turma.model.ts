import { TurmaModel } from "./turma.model";

export interface EstudanteTurmaModel {
    id: number;
    idEstudante: number;
    idTurma: number;
    turma: TurmaModel;
}