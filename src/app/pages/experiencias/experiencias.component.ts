import { Component, OnInit } from '@angular/core';
import { Conhecimento, Curso, Experiencia } from './experiencia';

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
	return new Date(Number.parseInt(anoStr, 10), meses[mesStr] ?? 0, 1);
}

@Component({
	selector: 'app-experiencias',
	imports: [],
	templateUrl: './experiencias.component.html',
	styleUrl: './experiencias.component.css'
})
export class ExperienciasComponent implements OnInit {
	diaAtual: Date = new Date();

	experiencias: Experiencia[] = [
		{
			cargo: "Desenvolvedora Frontend Júnior",
			empresa: "Laboratório de Visão Computacional e Inteligência Artificial (VICIA)",
			data: "08/25 até o momento",
			descricao: "Desenvolvimento de projeto em parceria com o Ministério da Educação (MEC), incluindo a criação de telas, ajustes de componentes e integração com a camada de backend (APIs) para garantir o funcionamento completo da aplicação.",
		},
		{
			cargo: "UX Designer Pleno",
			empresa: "Laboratório de Telemática, Acessibilidade e Projetos Educacionais (LTAP)",
			data: "09/25 até o momento",
			descricao: "Criação de fluxos, identidade visual e padrões; desenvolvimento de protótipos; colaboração com desenvolvedores; análise de requisitos, usabilidade e acessibilidade.",
			historico: [
				{ nome: "UX Designer", data: "09/25 até o momento" },
				{ nome: "UX Designer Pleno", data: "04/26 até o momento" }
			]
		},
		{
			cargo: "UX Designer",
			empresa: "Núcleo de Desenvolvimento de Software",
			data: "06/25 a 09/25",
			descricao: "Análise de padrões; criação de fluxos; desenvolvimento de protótipos; colaboração com desenvolvedores e análise de usabilidade para melhoria contínua da interface.",
			voluntario: true
		},
		{
			cargo: "Jovem Aprendiz Administrativo",
			empresa: "Metas Condomínios e Serviços",
			data: "04/24 a 04/25",
			descricao: "Atendimento ao cliente, com foco em alterações cadastrais; gerenciamento de documentos, contratos e protocolos; arquivamento e controle de atas de reunião."
		},
	];

	conhecimentos: Conhecimento[] = [
		{ nome: "Angular", dataInicio: new Date(2025, 6, 22) },
		{ nome: "Typescript", dataInicio: new Date(2025, 4, 8) },
		{ nome: "Git e Github", dataInicio: new Date(2022, 4, 14) },
		{ nome: "HTML, CSS e JS", dataInicio: new Date(2022, 4, 14) },
		{ nome: "Figma", dataInicio: new Date(2023, 3, 5) },
		// { nome: "Jest", dataInicio: new Date(2026, 0, 30) },
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

	renderTime(inicio: Date): string {
		const diffEmMs = this.diaAtual.getTime() - inicio.getTime();
		const dias = Math.floor(diffEmMs / 86400000);
		let anos = this.diaAtual.getFullYear() - inicio.getFullYear();
		let meses = (this.diaAtual.getFullYear() - inicio.getFullYear()) * 12 + (this.diaAtual.getMonth() - inicio.getMonth());

		if ( this.diaAtual.getMonth() < inicio.getMonth() || ( this.diaAtual.getMonth() === inicio.getMonth() && this.diaAtual.getDate() < inicio.getDate() ) ) anos--;
		if (this.diaAtual.getDate() < inicio.getDate()) meses--;

		if (anos >= 1) return `+${anos} ${anos === 1 ? 'ano' : 'anos'}`;
		if (meses >= 1) return `+${meses} ${meses === 1 ? 'mês' : 'meses'}`;
		return `+${dias} ${dias === 1 ? 'dia' : 'dias'}`;
	}
}
