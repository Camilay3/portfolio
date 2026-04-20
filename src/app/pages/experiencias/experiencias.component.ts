import { Component, OnInit } from '@angular/core';

interface Experiencia {
  cargo: string
  empresa: string
  data: string
  descricao: string
  voluntario?: boolean
  historico?: Cargo[]
}

interface Cargo {
  nome: string
  data: string
}

interface Curso {
  nome: string
  orgao: string
  dataDeConclusao: string
}

export const meses: { [key: string]: number } = {
  "Jan": 0,
  "Fev": 1,
  "Mar": 2,
  "Abr": 3,
  "Mai": 4,
  "Jun": 5,
  "Jul": 6,
  "Ago": 7,
  "Set": 8,
  "Out": 9,
  "Nov": 10,
  "Dez": 11,
};

function parseDataConclusao(data: string): Date {
  const [mesStr, anoStr] = data.split("/");
  const mes = meses[mesStr];
  const ano = Number.parseInt(anoStr, 10);

  return new Date(ano, mes ?? 0, 1);
}

@Component({
  selector: 'app-experiencias',
  imports: [],
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.css'
})
export class ExperienciasComponent implements OnInit {
  experiencias: Experiencia[] = [
    {
      cargo: "Desenvolvedora Frontend Júnior",
      empresa: "Laboratório de Visão Computacional e Inteligência Artificial (VICIA)",
      data: "08/25 até o momento",
      descricao: "Desenvolvimento de projeto em parceria com o MEC, incluindo a criação de telas, ajustes de componentes e integração com a camada de backend para garantir o funcionamento completo da aplicação.",
    },
    {
      cargo: "UX Designer Pleno",
      empresa: "Laboratório de Telemática, Acessibilidade e Projetos Educacionais (LTAP)",
      data: "09/25 até o momento",
      descricao: "Criação de fluxos, identidade visual e padrões, desenvolvimento de protótipos; colaboração com desenvolvedores, análise de usabilidade e acessibilidade.",
      historico: [
        { nome: "UX Designer", data: "09/25 até o momento" },
        { nome: "UX Designer Pleno", data: "04/26 até o momento" }
      ]
    },
    {
      cargo: "UX Designer",
      empresa: "Núcleo de Desenvolvimento de Software",
      data: "06/25 a 09/25",
      descricao: "Pesquisa com usuários; criação de fluxos, desenvolvimento de protótipos; colaboração com desenvolvedores e análise de usabilidade para melhoria contínua da interface.",
      voluntario: true
    },
    {
      cargo: "Jovem Aprendiz",
      empresa: "Metas Condomínios e Serviços",
      data: "04/24 a 04/25",
      descricao: "Atendimento ao cliente, com foco em alterações cadastrais; gerenciamento de documentos, contratos e protocolos; e arquivamento de atas de reunião."
    },
  ];

  cursos: Curso[] = [
    { nome: "Formação Java", orgao: "Alura", dataDeConclusao: "Dez/2025" },
    { nome: "Formação Angular", orgao: "Alura", dataDeConclusao: "Jul/2025" },
    { nome: "Imersão Flutter", orgao: "Alura", dataDeConclusao: "Abr/2025" },
    { nome: "Formação Typescript", orgao: "Alura", dataDeConclusao: "Mai/2025" },
    { nome: "Turma Foundation", orgao: "Apple Developer Academy", dataDeConclusao: "Dez/2022" },
    { nome: "Desenvolvimento iOS", orgao: "Capacita Brasil", dataDeConclusao: "Jun/2025" },
    { nome: "Jornada Digital", orgao: "Senac", dataDeConclusao: "Jul/2024" },
    { nome: "Serviços Administrativos", orgao: "Senac", dataDeConclusao: "Mai/2025" },
    { nome: "Introdução ao Javascript", orgao: "Fundação Bradesco", dataDeConclusao: "Dez/2021" },
    { nome: "Inovando com CSS", orgao: "Fundação Bradesco", dataDeConclusao: "Dez/2021" },
    { nome: "HTML e CSS na prática", orgao: "Fundação Bradesco", dataDeConclusao: "Dez/2021" },
    { nome: "HTML Avançado", orgao: "Fundação Bradesco", dataDeConclusao: "Dez/2021" },
    { nome: "Criando um site simples com HTML, CSS e Javascript", orgao: "Fundação Bradesco", dataDeConclusao: "Dez/2021" },
    { nome: "Fundamentos de TI: Hardware e Software", orgao: "Fundação Bradesco", dataDeConclusao: "Dez/2021" },
    { nome: "Sistemas Operacionais: Conceitos básicos", orgao: "Fundação Bradesco", dataDeConclusao: "Ago/2021" },
    { nome: "Fundamentos do Design Gráfico", orgao: "Fundação Bradesco", dataDeConclusao: "Ago/2021" },
  ];

  ngOnInit() {
    this.cursos.sort((a, b) => {
      const dataA = parseDataConclusao(a.dataDeConclusao);
      const dataB = parseDataConclusao(b.dataDeConclusao);
      return dataB.getTime() - dataA.getTime(); // mais recentes primeiro
    });
  }
}
