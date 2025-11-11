import { Component } from '@angular/core';
import { Icone } from '../../components/icones/icone';
import { IconesComponent } from '../../components/icones/icones.component';

interface Formacao {
  src: string;
  nome: string;
  dataInical?: number;
  dataFinal?: number;
  status?: string;
};

@Component({
  selector: 'app-sobre-mim',
  imports: [IconesComponent],
  templateUrl: './sobre-mim.component.html',
  styleUrl: './sobre-mim.component.css'
})
export class SobreMimComponent {
  idade?: string;
  dataNasc: Date = new Date(2006, 4, 2);
  dataAtual = new Date();

  ngOnInit() { this.idade = this.calcularIdade(this.dataNasc).toString(); }

  private calcularIdade(dataNasc: Date): number {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNasc = dataNasc.getMonth();

    if (mesAtual < mesNasc || (mesAtual === mesNasc && hoje.getDate() < dataNasc.getDate())) idade--;

    return idade;
  }

  formacoes: Formacao[] = [
    {
      src: "IFCE.svg",
      nome: "Curso Técnico em Informática",
      dataInical: 2021,
      dataFinal: 2023
    },
    {
      src: "IFCE.svg",
      nome: "Bacharelado em Ciências da Computação",
      status: "em andamento"
    }
  ];

  hobbies: Icone[] = [
    {src: "fi fi-ss-chess-king", label: "Enxadrista"},
    {src: "fi fi-sr-violin", label: "Violinista"},
    {src: "fas fa-palette", label: "Artesã"},
  ];
}
