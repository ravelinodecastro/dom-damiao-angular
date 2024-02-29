import { EstudanteTurmaModel } from "./estudante-turma.model";
import { NotaModel } from "./nota.model";

export interface EstudanteModel {
    id?: number;
    nome: string;
    dataNascimento: string;
    morada: string;
    estudanteTurma: EstudanteTurmaModel;
    notas: NotaModel[]
}