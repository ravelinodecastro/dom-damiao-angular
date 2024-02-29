import { Component, Input } from '@angular/core';
import { EstudanteModel } from 'src/app/models/estudante.model';
import { NotaModel } from 'src/app/models/nota.model';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.scss']
})
export class EstudanteComponent {

  @Input() estudante!: EstudanteModel;


  calcularMedia(notas: NotaModel[]): number {
    return notas.map( nota => nota.valor)
    .reduce((notaAnterior: number, notaActual: number) => notaAnterior + notaActual) / notas.length
  }

  situacao(media: number) : string {
    return media >= 10 ? 'Aprovado' : 'Reprovado'
  }

  get isAprovado () : boolean {
    return this.calcularMedia(this.estudante.notas) >= 10
  }

}
