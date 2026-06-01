export interface Experiencia extends Funcao {
	empresa: string
	descricao: string
	voluntario?: boolean
	historico?: Funcao[]
}

interface Funcao {
	cargo: string
	data: string
}

export interface Conhecimento {
	nome: string
	dataInicio: Date
	// dataFim?: Date
}

export interface Curso {
	nome: string
	orgao: string
	dataDeConclusao: string
}
