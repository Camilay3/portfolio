export interface Experiencia {
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

export interface Conhecimento {
	nome: string
	dataInicio: Date
	dataFim?: Date
}

export interface Curso {
	nome: string
	orgao: string
	dataDeConclusao: string
}
