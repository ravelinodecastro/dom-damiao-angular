import { Component } from '@angular/core';
import { EstudanteModel } from './models/estudante.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dom-damiao-angular';

  estudantes: Array<EstudanteModel> = [
    {
      "id": 1,
      "nome": "Pedro",
      "dataNascimento": "2005-06-05",
      "morada": "Luanda",
      "estudanteTurma": {
        "id": 1,
        "idEstudante": 1,
        "idTurma": 1,
        "turma": {
          "id": 1,
          "nome": "Turma A"
        }
      },
      "notas": [
        {
          "id": 1,
          "idDisciplina": 1,
          "idEstudante": 1,
          "valor": 9,
          "disciplina": {
            "id": 1,
            "descricao": "TLP"
          }
        },
        {
          "id": 2,
          "idDisciplina": 2,
          "idEstudante": 1,
          "valor": 15,
          "disciplina": {
            "id": 2,
            "descricao": "TIC"
          }
        }
      ]
  
    },
    {
      "id": 2,
      "nome": "João",
      "dataNascimento": "2006-04-05",
      "morada": "Benguela",
      "estudanteTurma": {
        "id": 1,
        "idEstudante": 2,
        "idTurma": 1,
        "turma": {
          "id": 1,
          "nome": "Turma A"
        }
      },
      "notas": [
        {
          "id": 1,
          "idDisciplina": 1,
          "idEstudante": 2,
          "valor": 1,
          "disciplina": {
            "id": 1,
            "descricao": "TLP"
          }
        },
        {
          "id": 2,
          "idDisciplina": 2,
          "idEstudante": 2,
          "valor": 14,
          "disciplina": {
            "id": 2,
            "descricao": "TIC"
          }
        }
      ]
  
    }
  ]

}
